'use client';

import { Button } from '@/components/ui/button';
import { Github, Globe, Instagram, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import VercelLogo from '@/components/vercel-logo';

const Nav = () => {
  return (
    <nav className="flex w-full justify-between px-4 lg:px-12 h-16 items-center">
      <div className="flex items-center gap-2">
       <VercelLogo className="h-7 w-7" />
        <span className="font-semibold">Domain Checker</span>
        <p className="text-muted-foreground">by</p>
        <a href="https://github.com/nexusdevv" target="_blank" rel="noopener noreferrer" className="underline text-muted-foreground">
          Nexus
        </a>
      </div>
      
      <div className="flex items-center space-x-3 text-muted-foreground">
        <Button variant="ghost" className="px-4">
          <a href="/credits" className="flex items-center">
            <span className="text-sm font-medium whitespace-nowrap">Credits</span>
          </a>
        </Button>

        <Button variant="ghost" className="px-4">
          <a href="/about" className="flex items-center">
            <span className="text-sm font-medium whitespace-nowrap">About</span>
          </a>
        </Button>

        <div className="h-5 w-px bg-gray-300"></div>
        
        <Button size="icon" variant="ghost">
          <a
            href="https://github.com/nexusdevv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>
        
        <Button size="icon" variant="ghost">
          <a href="https://instagram.com/bbatuu.u" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5" />
          </a>
        </Button>
        
      </div>
    </nav>
  );
};

export default Nav;
