import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-24 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div>
            <h2 className="text-[120px] font-bold leading-none tracking-tighter text-gray-200 select-none">EllipX</h2>
          </div>
          
          <div className="mt-8 md:mt-4 grid grid-cols-2 md:grid-cols-4 gap-12">
             <div>
                <h4 className="font-bold mb-4">PLATFORM</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                   <li><a href="#" className="hover:text-black">Markets</a></li>
                   <li><a href="#" className="hover:text-black">Exchange</a></li>
                   <li><a href="#" className="hover:text-black">Earn</a></li>
                   <li><a href="#" className="hover:text-black">Wallet</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold mb-4">SUPPORT</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                   <li><a href="#" className="hover:text-black">Help Center</a></li>
                   <li><a href="#" className="hover:text-black">API Documentation</a></li>
                   <li><a href="#" className="hover:text-black">Fees</a></li>
                   <li><a href="#" className="hover:text-black">Security</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold mb-4">COMPANY</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                   <li><a href="#" className="hover:text-black">About</a></li>
                   <li><a href="#" className="hover:text-black">Careers</a></li>
                   <li><a href="#" className="hover:text-black">Blog</a></li>
                   <li><a href="#" className="hover:text-black">Contact</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold mb-4">SOCIAL</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                   <li><a href="#" className="hover:text-black">Twitter / X</a></li>
                   <li><a href="#" className="hover:text-black">Discord</a></li>
                   <li><a href="#" className="hover:text-black">Telegram</a></li>
                   <li><a href="#" className="hover:text-black">Instagram</a></li>
                </ul>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-xs text-gray-400 font-medium">
          <p>© 2024 EllipX. Licensed in Europe.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-gray-600">PRIVACY POLICY</a>
             <a href="#" className="hover:text-gray-600">TERMS AND CONDITIONS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};