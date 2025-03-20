import Nav from '@/components/nav';
import { Metadata } from 'next';
import BlurIn from '../components/animations/BlurIn';
import { Github, Instagram, Twitter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Credits - Advanced Domain Finder',
  description: 'Credits for the developers of Advanced Domain Finder tool',
};

const CreditsPage = () => {
  return (
    <BlurIn>
    <main className="flex flex-col h-dvh items-center">
      <Nav />
      <div className="flex flex-col items-center min-h-0 grow justify-center w-full max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl lg:text-4xl font-bold text-center">
          Credits
        </h1>
        
        <div className="mt-10 space-y-8 text-lg w-full">
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-3">Original Creator</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="font-medium">David Ho (@1weiho)</p>
                <p className="text-gray-600 text-sm mt-1">
                  Created the original Vercel Domain Checker tool and open-sourced it on GitHub.
                </p>
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/davidho0403/vercel-domain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/1weiho" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-3">Remastered Version</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="font-medium">Batuhan (@nexusdevv)</p>
                <p className="text-gray-600 text-sm mt-1">
                  Added new features and improved the design of the original tool.
                </p>
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/nexusdevv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/batuhan13485" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-6 pb-4 text-center">
            <a 
              href="/"
              className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Back to Domain Checker
            </a>
          </div>
        </div>
      </div>
    </main>
    </BlurIn>
  );
};

export default CreditsPage; 