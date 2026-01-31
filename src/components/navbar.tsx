
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-14 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <img src="/logo-hexagon.png" alt="Logo" className="h-8 w-8 object-contain" />
            <span>Unfinished Ideas</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
            <Link href="/ideas" className="transition-colors hover:text-foreground">
              Browse Ideas
            </Link>
            <Link href="/categories" className="transition-colors hover:text-foreground">
              Categories
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/submit-idea">
            <Button size="sm" className="hidden sm:inline-flex">
              Submit Idea
            </Button>
          </Link>
          {/* Future: User Auth / Profile */}
        </div>
      </div>
    </nav>
  );
}
