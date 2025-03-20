import Nav from '@/components/nav';
import SearchForm from '@/components/search-form';
import VercelLogo from '@/components/vercel-logo';
import { Metadata } from 'next';
import BlurIn from './components/animations/BlurIn';
import PageTitle from './components/PageTitle';


export const runtime = 'edge';

export const metadata: Metadata = {
  metadataBase: new URL('https://vercel-domain.vercel.app/'),
  title: 'Advanced Vercel Domain Checker',
  description: 'Check domain availability across multiple TLDs and get smart suggestions',
  openGraph: {
    title: 'Advanced Vercel Domain Checker',
    description: 'Check domain availability across multiple TLDs and get smart suggestions',
    url: 'https://vercel-domain.vercel.app/',
    type: 'website',
    images: '/og-image.png',
  },
};

const Home = () => {
  return (
    <BlurIn>
    <main className="flex flex-col h-dvh items-center">
      <Nav />
      <div className="flex flex-col items-center min-h-0 grow justify-center w-full max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4">
          <VercelLogo className="h-16 w-16" />
          <div>
            <PageTitle>Domain Checker</PageTitle>
            <p className="text-gray-500 mt-1">
              Find your perfect domain name with smart suggestions
            </p>
          </div>
        </div>
        
        <div className="w-full mt-10">
          <SearchForm className="mt-6" />
        </div>
        
        <div className="mt-16 text-center text-sm text-gray-500">
          <p>
            Check domain availability and get smart suggestions for alternatives.
          </p>
          <p className="mt-2">
            Built with Next.js by <a href="https://github.com/nexusdevv" target="_blank" rel="noopener noreferrer" className="underline">Nexus</a>.
          </p>
        </div>
      </div>
    </main>
    </BlurIn>
  );
};

export default Home;
