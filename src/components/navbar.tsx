
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Coffee } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-black/10 backdrop-blur-md sticky top-0 z-50">
      {/* Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none -z-10" />
      
      <div className="container flex items-center justify-between mx-auto px-6 py-4">
        <div className="flex items-center gap-8">
          {/* Brand Pill */}
          <Link 
            href="/" 
            className="group flex items-center gap-3 px-4 py-2.5 rounded-[14px] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/10 hover:border-primary/30"
          >
            <img 
              src="/logo-hexagon.png" 
              alt="Logo" 
              className="h-[28px] md:h-[32px] w-auto object-contain rounded-sm transition-transform group-hover:scale-105" 
            />
            <span className="font-bold tracking-tight text-foreground" style={{ fontSize: 'clamp(18px, 2vw, 22px)' }}>
              Unfinished Ideas
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/ideas" className="transition-colors hover:text-primary hover:glow-sm">
              Browse Ideas
            </Link>
            <Link href="/categories" className="transition-colors hover:text-primary hover:glow-sm">
              Categories
            </Link>
            <Link href="/about" className="transition-colors hover:text-primary hover:glow-sm">
              About
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <a 
            href="https://buymeacoffee.com/dennis2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="sm" className="gap-2 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10">
              <Coffee className="h-4 w-4" />
              <span className="hidden lg:inline">Buy me a coffee</span>
            </Button>
          </a>

          <Link href="/submit-idea">
            <Button size="sm" className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
              Submit Idea
            </Button>
          </Link>
          {/* Future: User Auth / Profile */}
        </div>
      </div>
    </nav>
  );
}
