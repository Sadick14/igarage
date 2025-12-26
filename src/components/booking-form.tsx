'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { services } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState, useTransition } from 'react';
import { estimateServiceDurationAction } from '@/app/actions';
import { Loader2, Wand2, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  vehicleModel: z.string().min(3, { message: 'Please enter your vehicle model.' }),
  serviceType: z.string({ required_error: 'Please select a service.' }),
});

export function BookingForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [isEstimating, setIsEstimating] = useState(false);
  const [estimation, setEstimation] = useState<{ duration: string; reasoning: string } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      vehicleModel: '',
    },
  });

  const { watch, formState } = form;
  const watchedVehicleModel = watch('vehicleModel');
  const watchedServiceType = watch('serviceType');

  useEffect(() => {
    const getEstimation = async () => {
      if (watchedVehicleModel && watchedServiceType && formState.errors.vehicleModel === undefined) {
        setIsEstimating(true);
        setEstimation(null);
        const result = await estimateServiceDurationAction({
          vehicleModel: watchedVehicleModel,
          serviceType: watchedServiceType,
        });
        if (result.success) {
          setEstimation(result.data);
        }
        setIsEstimating(false);
      }
    };

    const timeoutId = setTimeout(() => {
      getEstimation();
    }, 500); // Debounce API call

    return () => clearTimeout(timeoutId);
  }, [watchedVehicleModel, watchedServiceType, formState.errors.vehicleModel]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => {
      console.log('Booking submitted:', values);
      toast({
        title: 'Booking Request Sent!',
        description: 'Thank you for your request. We will contact you shortly to confirm your appointment.',
      });
      form.reset();
      setEstimation(null);
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="024 123 4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.title} value={service.title}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="vehicleModel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle Model</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Toyota Corolla 2018" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className={cn("mt-4 space-y-2 text-sm transition-opacity duration-300", 
            (isEstimating || estimation) ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden')}>
          <div className="flex items-center font-semibold text-primary">
            <Wand2 className="mr-2 h-4 w-4" />
            <span>AI Service Time Estimation</span>
          </div>
          {isEstimating ? (
            <div className="flex items-center text-muted-foreground p-3 bg-secondary rounded-lg">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <span>Estimating duration for a {watchedServiceType} on a {watchedVehicleModel}...</span>
            </div>
          ) : estimation ? (
            <div className="p-3 bg-secondary rounded-lg space-y-2">
              <div className="flex items-center font-medium">
                <Clock className="mr-2 h-4 w-4" />
                Estimated Duration: <span className="ml-1 font-bold">{estimation.duration} minutes</span>
              </div>
              <p className="text-muted-foreground text-xs italic">
                {estimation.reasoning}
              </p>
            </div>
          ) : null}
        </div>

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Request Booking
        </Button>
      </form>
    </Form>
  );
}
