import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import EnquirySection from '@/components/EnquirySection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <EnquirySection />
      <Footer />
    </main>
  )
}

