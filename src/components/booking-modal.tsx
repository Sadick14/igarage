'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { BookingForm } from './booking-form';

type BookingModalProps = {
  children: React.ReactNode;
};

export function BookingModal({ children }: BookingModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-primary font-headline text-2xl">Book Your Service</DialogTitle>
          <DialogDescription>
            Fill out the form below to schedule your appointment. We'll get back to you shortly to confirm.
          </DialogDescription>
        </DialogHeader>
        <BookingForm />
      </DialogContent>
    </Dialog>
  );
}
