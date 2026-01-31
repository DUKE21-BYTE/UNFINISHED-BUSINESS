
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { allIdeas } from '@/data/ideas';

export default function IdeasPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
           <h1 className="text-3xl font-bold tracking-tight mb-2">Browse Unfinished Ideas</h1>
           <p className="text-muted-foreground">Find a project that inspires you and bring it to life.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
             {/* Placeholder for Search/Filter components */}
             <Button variant="outline" className="w-full md:w-auto">Filter</Button>
             <Button variant="outline" className="w-full md:w-auto">Sort</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allIdeas.map((idea) => (
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
  );
}
