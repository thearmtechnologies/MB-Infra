import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t-4 border-[#f25810] pt-20 pb-10 w-full text-gray-400">
      <div className="w-full px-6 xl:px-12 mx-auto max-w-450">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-3xl font-black tracking-tighter text-white">MB</span>
              <span className="text-3xl font-black tracking-tighter text-[#f25810]">INFRA</span>
            </div>
            <p className="text-sm font-medium leading-relaxed mb-8">
              A premier EPC organization focused on constructing India's critical infrastructure. Delivering mega-projects in highways, bridges, and industrial sectors with unwavering engineering excellence.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              {['Facebook', 'Twitter', 'LinkedIn'].map((social, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-gray-900 hover:bg-[#f25810] hover:text-white transition-colors flex items-center justify-center">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm font-bold uppercase tracking-wider">
              {["About Company", "Leadership Team", "Quality Policy", "Investors Relation", "Career Opportunities", "Contact Us"].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-[#f25810] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Our Expertise</h4>
            <ul className="space-y-3 text-sm font-bold uppercase tracking-wider">
              {["Highway Expansion", "Bridge Construction", "Industrial Civil Works", "Earthmoving & Excavation", "Heavy Machinery Leasing"].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-[#f25810] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Company Updates</h4>
            <p className="text-sm mb-4">Subscribe to our tender alerts and corporate news.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-gray-900 border border-gray-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#f25810]"
              />
              <button className="bg-[#f25810] hover:bg-[#d44a0d] text-white px-4 py-3 font-bold uppercase tracking-widest text-xs transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} MB Infraprojects Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}