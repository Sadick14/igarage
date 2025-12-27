
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="container grid grid-cols-1 gap-12 px-4 py-24 md:grid-cols-2 md:px-8 lg:gap-16">
        <div className="flex flex-col justify-center space-y-6">
          <span className="text-red-600 font-bold tracking-widest text-xs md:text-sm uppercase">Contact</span>
          <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tight text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-red-600 rounded-full mb-4" />
          <p className="max-w-md text-gray-300 font-body mb-4">
            Your trusted partner for all auto repair and maintenance needs in Ghana.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-red-600" />
              <span>123 Spintex Road, Accra, Ghana</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-red-600" />
              <a href="tel:+233123456789" className="hover:underline text-white">+233 123 456 789</a>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
              <a href="https://wa.me/233123456789" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">WhatsApp Us</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 flex-shrink-0 text-red-600" />
              <a href="mailto:contact@igarage.com.gh" className="hover:underline text-white">contact@igarage.com.gh</a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-neutral-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.681189436667!2d-0.12643868568652233!3d5.614603995931887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b3a9c1b17e5%3A0x9d750c1b48b9f1d0!2sSpintex%20Rd%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1684343434343"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="iGarage Location"
            className="min-h-[300px]"
          ></iframe>
        </div>
      </div>
      <div className="bg-neutral-900 py-4 mt-8">
        <div className="container flex items-center justify-center px-4 text-center text-sm text-gray-500 md:px-6">
          <p>&copy; {new Date().getFullYear()} The IGarage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
