
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function SubmitIdeaPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Submit an Unfinished Idea</h1>
        <p className="text-muted-foreground">Don't let your idea die. Release it to the world so someone else can build it.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Idea Details</CardTitle>
          <CardDescription>Share as much context as possible to help the next builder succeed.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Idea Title</Label>
            <Input id="title" placeholder="e.g. AI-Powered Plant Doctor" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="problem">The Problem</Label>
            <Textarea 
              id="problem" 
              placeholder="What specific problem does this solve? Why does it matter?"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="solution">Proposed Solution</Label>
            <Textarea 
              id="solution" 
              placeholder="How did you plan to solve it? What features were planned?"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="abandonReason">Why did you abandon it?</Label>
            <Textarea 
              id="abandonReason" 
              placeholder="Be honest. Ran out of time? Technical hurdle? Lost interest?" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select id="category" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>Startup Idea</option>
                    <option>Mobile App</option>
                    <option>Web App</option>
                    <option>Side Project</option>
                </select>
             </div>
             <div className="space-y-2">
                <Label htmlFor="license">License Preference</Label>
                <select id="license" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>Public Domain (Free for all)</option>
                    <option>Attribution Required</option>
                    <option>Collaboration Open</option>
                </select>
             </div>
          </div>
          
          <Button className="w-full" size="lg">Submit Idea</Button>
        </CardContent>
      </Card>
    </div>
  );
}
