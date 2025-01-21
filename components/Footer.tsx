import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, AtSign } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-[#1A1919] text-white flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">GrandFleet</h3>
            <p className="text-sm">Expert Solutions for Growing Businesses</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-1">
              {['Home', 'About Us', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm hover:text-[#FF8A00] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Connect With Us</h3>
            <div className="flex space-x-3">
              <Link href="https://www.facebook.com/share/19kXUaws9E/?mibextid=wwXIfr" className="text-white hover:text-[#FF8A00]">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://wa.me/+61426188416" className="text-white hover:text-[#FF8A00]">
              <Phone className="h-6 w-6"/>
              </Link>
              <Link href="https://www.instagram.com/Grand_Fleet_" className="text-white hover:text-[#FF8A00]">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
            <div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div>
                  <MapPin width={24} height={24} />
                </div>
                <div>
                  <p> Melbourne, Victoria</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <Phone width={24} height={24} />
                </div>
                <div>
                  <p><a href='tel:0426188416'>0426 188 416</a></p>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <AtSign width={24} height={24} />
                </div>
                <div>
                  <p><a href='email:support@grandfleet.au'>support@grandfleet.au</a></p>
                </div>
              </div>
            </div>
          
          
            </div>
          </div>
          <div></div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} GrandFleet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

