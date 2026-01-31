
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Lightbulb, Rocket, Users } from 'lucide-react';

import { allIdeas } from '@/data/ideas';

export default function Home() {
  const featuredIdeas = allIdeas.slice(0, 3);

  const categories = [
    { name: "Startup Ideas", slug: "startup-ideas", icon: Rocket },
    { name: "App Ideas", slug: "app-ideas", icon: Code },
    { name: "Social Impact", slug: "social-impact-ideas", icon: Users },
    { name: "Creative", slug: "creative-ideas", icon: Lightbulb },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Where Ideas Don&apos;t Die,<br className="hidden sm:inline" /> They Get Adopted.
          </h1>
          <p className="max-w-[700px] mx-auto text-xl text-muted-foreground mb-10">
            The world&rsquo;s most searchable database of unfinished ideas. 
            If you have an idea but no time, list it. 
            If you want to build but have no idea, steal one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ideas">
              <Button size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                Browse Ideas
              </Button>
            </Link>
            <Link href="/submit-idea">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                Submit an Idea
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Ideas Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Recent Unfinished Ideas</h2>
            <Link href="/ideas" className="text-primary hover:underline flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredIdeas.map((idea) => (
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
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`}>
                <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full text-center">
                    <category.icon className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
