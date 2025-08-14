import { FaFacebookF, FaInstagram, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Left Logo + Tagline */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src="/arc.png" alt="Aicademy" className="h-10" />
            <span className="text-2xl font-bold">Aicademy</span>
          </div>
          <p className="text-2xl text-gray-700 leading-snug">
            Explore the World of <br />
            Artificial Intelligence.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li className="flex items-center gap-2">
              <a href="#">Career</a>
              <span className="bg-teal-500 text-white text-[10px] px-2 py-[2px] rounded-full">New</span>
            </li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Webinars</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Program</a></li>
            <li><a href="#">Trainers</a></li>
            <li><a href="#">Membership</a></li>
            <li><a href="#">Certification</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Get In Touch</a></li>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Knowledgebase</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-bold mb-4">Address:</h3>
          <p className="text-sm mb-4">930 Palma Lane Suite 500 Larkinhaven</p>
          <h3 className="font-bold mb-2">Contact:</h3>
          <p className="text-sm text-blue-600"><a href="tel:4749378270">474 - 937-8270</a></p>
          <p className="text-sm"><a href="mailto:hello@yoursite.com">hello@yoursite.com</a></p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} Aicademy Template Kit | Designed by Deverust Studio
          </p>
          <div className="flex gap-4 text-xl text-gray-600">
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
            <FaXTwitter className="cursor-pointer hover:text-black" />
            <FaGithub className="cursor-pointer hover:text-black" />
            <FaYoutube className="cursor-pointer hover:text-black" />
            <FaLinkedin className="cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>
    </footer>
  )
}
