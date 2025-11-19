import { Mail, Phone } from "lucide-react"
import Document from "next/document"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">The Vault</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Next-generation Warehouse Management System built for speed, precision, and control.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-white transition-colors">
                  Modules
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#resources" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
             <li>
                <a
                  href="/public/TheVaultBrochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Document
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
         <div>
  <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
  <ul className="space-y-3 text-sm">

    <li className="flex items-center gap-2">
      <Mail size={16} />
      <a href="mailto:info@vaultsinc.com" className="hover:text-white transition-colors">
        info@vaultsinc.com
      </a>
    </li>

    {/* Phone 1 */}
    <li className="flex items-center gap-2">
      <Phone size={16} />
      <a href="tel:+12888844428" className="hover:text-white transition-colors">
        +1 (248) 894-4428
      </a>
    </li>

    {/* Phone 2 */}
    <li className="flex items-center gap-2 pl-[22px]"> 
      {/* Left padding so it aligns perfectly under first line */}
      <a href="tel:+15767411356" className="hover:text-white transition-colors">
        +1 (586) 741-1256
      </a>
    </li>

  </ul>
</div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 The Vault. All rights reserved.</p>
            <div className="flex gap-6 text-sm mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
