
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { allIdeas } from '@/data/ideas';

// Helper to normalize strings for comparison (kebab-case to loose matching)
const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // This is a simple client-side filter simulation. 
  // In a real app, you'd have a mapping of slugs to category IDs or precise names.
  // Here we'll try to match the slug loosely to the category string in the data.
  
  // Map slug to display name/search term
  const categoryMap: Record<string, string> = {
    'startup-ideas': 'Startup',
    'app-ideas': 'App', // Matches "Mobile App", "Web App"
    'social-impact-ideas': 'Social',
    'creative-ideas': 'Creative',
    'hardware': 'Hardware',
    'design': 'Design',
    'saas': 'SaaS',
    'side-projects': 'Side Project',
    'mobile-app': 'Mobile App',
    'web-app': 'Web App'
  };

  const searchTerm = categoryMap[slug] || slug.replace(/-/g, ' ');

  const filteredIdeas = allIdeas.filter(idea => {
    const cat = idea.category.toLowerCase();
    const tags = idea.tags.map(t => t.toLowerCase());
    const search = searchTerm.toLowerCase();
    
    return cat.includes(search) || tags.some(tag => tag.includes(search));
  });

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <Link href="/categories" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
        </Link>
        <h1 className="text-3xl font-bold tracking-tight capitalize">
          {searchTerm} Ideas
        </h1>
        <p className="text-muted-foreground mt-2">
          Found {filteredIdeas.length} ideas in this category.
        </p>
      </div>

      {filteredIdeas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea) => (
            <Card key={idea.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{idea.category}</Badge>
                  <Badge variant="outline" className="text-xs">{idea.status}</Badge>
                </div>
                <CardTitle className="text-xl line-clamp-1">{idea.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {idea.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {idea.tags.map(tag => (
                    <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/ideas/${idea.slug}`} className="w-full">
                  <Button className="w-full">View Idea</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/30 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">No ideas found</h2>
          <p className="text-muted-foreground mb-6">We couldn't find any ideas in this category yet.</p>
          <Link href="/submit-idea">
            <Button>Submit the first one</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
