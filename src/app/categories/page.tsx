
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Lightbulb, Rocket, Users, Wrench, Palette, Laptop, Briefcase } from 'lucide-react';

export default function CategoriesPage() {
  const categories = [
    { name: "Startup Ideas", slug: "startup-ideas", icon: Rocket, count: 12, description: "Business concepts waiting for a CEO." },
    { name: "App Ideas", slug: "app-ideas", icon: Code, count: 18, description: "Mobile and web applications needing code." },
    { name: "Social Impact", slug: "social-impact-ideas", icon: Users, count: 5, description: "Projects to make the world better." },
    { name: "Creative", slug: "creative-ideas", icon: Lightbulb, count: 8, description: "Artistic and content-focused projects." },
    { name: "Hardware", slug: "hardware", icon: Wrench, count: 4, description: "Physical product concepts." },
    { name: "Design", slug: "design", icon: Palette, count: 6, description: "UI kits, mockups, and design systems." },
    { name: "SaaS", slug: "saas", icon: Laptop, count: 9, description: "Software as a Service platforms." },
    { name: "Side Projects", slug: "side-projects", icon: Briefcase, count: 15, description: "Fun tools and utilities." },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Browse by Category</h1>
        <p className="text-muted-foreground text-lg">
          Filter thousands of unfinished ideas by their domain. Find the niche that matches your skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.slug} href={`/categories/${category.slug}`} className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-muted group-hover:border-primary/50">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <category.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                </div>
                <Badge variant="secondary" className="mt-auto">
                  {category.count} ideas
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
