
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { allIdeas } from '@/data/ideas';

// Data fetcher
const getIdeaBySlug = (slug: string) => {
  return allIdeas.find(idea => idea.slug === slug) || null;
};

// Metadata generation
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const idea = getIdeaBySlug(slug);
  
  if (!idea) {
    return { title: 'Idea Not Found' };
  }

  return {
    title: `${idea.title} | Unfinished Idea`,
    description: idea.description,
  };
}

export default async function IdeaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idea = getIdeaBySlug(slug);

  if (!idea) {
    notFound();
  }

  // JSON-LD Schema
  const jsonLd = {
    "@type": "CreativeWork",
    "name": idea.title,
    "description": idea.description,
    "license": idea.status
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <Link href="/ideas" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Ideas
      </Link>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <main>
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">{idea.category}</Badge>
              {idea.tags.map((tag: string) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">{idea.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-1"><User className="h-4 w-4" /> Anonymous Creator</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date().getFullYear()}</span>
            </div>
          </div>

          <div className="space-y-8 prose dark:prose-invert max-w-none">
            <section>
              <h2 className="text-2xl font-bold border-b pb-2 mb-4">About this Idea</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{idea.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b pb-2 mb-4">Why It Was Abandoned</h2>
              <div className="bg-amber-50 dark:bg-amber-950/30 p-4 border-l-4 border-amber-500 rounded-sm">
                 <p className="text-lg leading-relaxed italic">
                   "The creator moved on to other projects or hit a roadblock. This idea is now waiting for someone new to pick up the torch."
                 </p>
              </div>
            </section>
          </div>
        </main>

        <aside className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Idea Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-sm font-medium text-muted-foreground block mb-1">License & Status</span>
                <Badge variant="default" className="text-base py-1 px-3 bg-green-600 hover:bg-green-700">{idea.status}</Badge>
              </div>
              
              <div className="pt-4 border-t">
                <Button className="w-full mb-3" size="lg">Adopt this Idea</Button>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Share2 className="h-4 w-4" /> Share
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                By adopting this idea, you agree to respect its current status ({idea.status}).
              </p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
