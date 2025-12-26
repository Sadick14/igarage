import { Car, Wrench, Activity, Droplets, BatteryCharging, ShieldCheck, Users, Zap, Gem, Laptop } from 'lucide-react';
import { TireIcon } from '@/components/icons/tire';
import { BrakeDiscIcon } from '@/components/icons/brake-disc';

export const services = [
  {
    icon: Wrench,
    title: 'Car Maintenance',
    description: 'Stay ahead of problems with regular inspections, fluid checks, and tune-ups to keep your car running smoothly.',
  },
  {
    icon: Activity,
    title: 'Engine Diagnostics',
    description: 'We use advanced diagnostic tools to accurately identify and resolve any engine issues, from check engine lights to performance problems.',
  },
  {
    icon: Droplets,
    title: 'Oil & Lubrication',
    description: 'Essential for engine health, our scheduled oil changes use premium oils to ensure optimal performance and longevity.',
  },
  {
    icon: TireIcon,
    title: 'Tire Services',
    description: 'Complete tire care including alignment, balancing, rotation, and puncture repairs to ensure your safety and extend tire life.',
  },
  {
    icon: BatteryCharging,
    title: 'Battery Replacement',
    description: 'We offer comprehensive battery testing and quick, reliable replacement services to ensure you\'re never left stranded.',
  },
  {
    icon: BrakeDiscIcon,
    title: 'Brake Repair',
    description: 'Your safety is our priority. Our professional brake inspections and repairs ensure your vehicle stops safely and reliably.',
  },
  {
    icon: Car,
    title: 'General Servicing',
    description: 'Comprehensive care for all makes and models, covering all aspects of your vehicle to keep it in peak condition.',
  },
];

export const whyChooseUs = [
    {
        icon: Users,
        title: 'Professionalism',
        description: 'Our team consists of skilled and experienced mechanics dedicated to providing top-quality service for every vehicle type.',
    },
    {
        icon: Zap,
        title: 'Efficiency',
        description: 'We deliver quick and reliable work without compromising on quality, getting you back on the road faster.',
    },
    {
        icon: Gem,
        title: 'Value',
        description: 'Receive premium auto repair services at affordable, budget-friendly rates that don\'t break the bank.',
    },
    {
        icon: Laptop,
        title: 'Modernity',
        description: 'We utilize the latest diagnostic tools and repair technology to ensure precise and effective repairs every time.',
    },
    {
        icon: ShieldCheck,
        title: 'Guarantee',
        description: 'Your satisfaction is our promise. We stand behind our work with a commitment to quality and customer care.',
    },
];

export const testimonials = [
  {
    quote: 'The service was quick, professional, and they fixed my issue in no time. My car feels like it just left the showroom. Highly recommended for anyone needing reliable car care!',
    author: 'John D.',
    location: 'Accra',
  },
  {
    quote: 'Finally, an auto shop in Accra that is affordable, fast, and reliable. The IGarage team is fantastic and always transparent with their pricing. I wouldn\'t trust my car with anyone else.',
    author: 'Ama K.',
    location: 'Tema',
  },
  {
    quote: 'From the moment I walked in, the staff was friendly and attentive. They explained everything clearly and made my car feel brand new again. Exceptional service all around!',
    author: 'Kwame T.',
    location: 'Kumasi',
  },
];

export const faqs = [
    {
        question: 'What types of vehicles do you service?',
        answer: 'We service a wide range of vehicles, including sedans, SUVs, 4x4s, and light commercial trucks from various manufacturers.'
    },
    {
        question: 'Do I need to book an appointment?',
        answer: 'While walk-ins are welcome, we recommend booking an appointment to ensure minimal waiting time. You can call, use WhatsApp, or book online.'
    },
    {
        question: 'How long will the service take?',
        answer: 'A standard service typically takes between 1-2 hours. For more complex repairs, the duration can vary. We provide an estimated time with our booking confirmation.'
    },
    {
        question: 'Do you offer a warranty on your repairs?',
        answer: 'Yes, all our repair services come with a warranty on parts and labor. We believe in the quality of our work and your peace of mind.'
    },
    {
        question: 'How do you determine the cost of a service?',
        answer: 'We provide a transparent and detailed cost estimate before any work begins. Our pricing is based on the service required, parts, and labor, with no hidden fees.'
    }
]
