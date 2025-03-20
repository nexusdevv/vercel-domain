import Nav from '@/components/nav';
import { Metadata } from 'next';
import BlurIn from '../components/animations/BlurIn';

export const metadata: Metadata = {
  title: 'About - Vercel Domain Checker',
  description: 'Learn more about the Vercel Domain Checker tool and how it works',
};

const AboutPage = () => {
  return (
    <BlurIn>
    <main className="flex flex-col h-dvh items-center">
      <Nav />
      <div className="flex flex-col items-center min-h-0 grow justify-center w-full max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl lg:text-4xl font-bold text-center">
          About Vercel Domain Checker
        </h1>
        
        <div className="mt-10 space-y-6 text-lg">
          <p>
            Vercel Domain Checker is a powerful tool designed to help you find the perfect domain name for your next project. It goes beyond simple availability checking by providing smart suggestions and alternatives.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8">Features</h2>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Check domain availability and get smart alternative domain suggestions if your desired domain is taken</li>
            <li>Direct links to register available domains</li>
            <li>Modern, responsive UI for a seamless experience</li>
            <li>Fast performance with edge functions</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8">Open Source</h2>
          
          <p>
            This project is open source and available on <a href="https://github.com/nexusdevv/vercel-domain" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>. Contributions are welcome!
          </p>
          
          <div className="pt-8 pb-4">
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

export default AboutPage; 