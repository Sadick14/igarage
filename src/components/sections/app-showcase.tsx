import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Smartphone, Download } from 'lucide-react';

export default function AppShowcaseSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left content */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Consider life is UI Cater of
              <span className="block mt-2">your car or Cary Paref</span>
            </h2>
            
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-xl">
              Track your vehicle's health, book services instantly, and get real-time updates
              on your car maintenance - all from your mobile device.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-xl">
                <Download className="mr-2 h-5 w-5" /> Download App
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 border-2 border-white text-white hover:bg-white/10 font-semibold">
                Learn More
              </Button>
            </div>
            
            {/* Features list */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-300 mt-2"></div>
                <div>
                  <p className="font-semibold">Real-time Tracking</p>
                  <p className="text-sm text-blue-100">Monitor service progress</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-300 mt-2"></div>
                <div>
                  <p className="font-semibold">Instant Booking</p>
                  <p className="text-sm text-blue-100">Schedule in seconds</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-300 mt-2"></div>
                <div>
                  <p className="font-semibold">Service History</p>
                  <p className="text-sm text-blue-100">All records in one place</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-300 mt-2"></div>
                <div>
                  <p className="font-semibold">Reminders</p>
                  <p className="text-sm text-blue-100">Never miss maintenance</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Phone mockups */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              {/* Phone frame mockup */}
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-3 mx-auto w-72 h-[600px]">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl w-full h-full flex flex-col">
                  {/* Notch */}
                  <div className="flex justify-center pt-2">
                    <div className="bg-black/20 rounded-full h-6 w-32"></div>
                  </div>
                  
                  {/* App content simulation */}
                  <div className="flex-1 p-4 space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="h-4 bg-white/60 rounded w-24"></div>
                          <div className="h-3 bg-white/40 rounded w-32"></div>
                        </div>
                        <Smartphone className="h-8 w-8 text-white/80" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 h-24"></div>
                      ))}
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-2">
                      <div className="h-3 bg-white/60 rounded w-full"></div>
                      <div className="h-3 bg-white/40 rounded w-3/4"></div>
                      <div className="h-3 bg-white/40 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hand mockup */}
              <div className="absolute -right-6 bottom-0 z-0 opacity-90">
                <div className="w-32 h-48 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-t-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
