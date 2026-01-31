"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function SubmitIdeaPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
        title: formData.get('title'),
        problem: formData.get('problem'),
        solution: formData.get('solution'),
        abandon_reason: formData.get('abandonReason'),
        category: formData.get('category'),
        license: formData.get('license'),
    };

    try {
      const response = await fetch('/api/ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error);
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error('Error submitting idea:', err);
      setError(err.message || 'Failed to submit idea. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Submit an Unfinished Idea</h1>
        <p className="text-muted-foreground">Don't let your idea die. Release it to the world so someone else can build it.</p>
      </div>

      {success && (
        <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-lg mb-6 text-center">
          Idea submitted successfully! It is now live in the database.
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-lg mb-6 text-center">
          {error}
        </div>
      )}

      <Card className="border-white/10 bg-black/40 backdrop-blur-md">
        <CardHeader>
          <CardTitle>Idea Details</CardTitle>
          <CardDescription>Share as much context as possible to help the next builder succeed.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Idea Title</Label>
              <Input name="title" id="title" placeholder="e.g. AI-Powered Plant Doctor" required className="bg-white/5 border-white/10" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="problem">The Problem</Label>
              <Textarea 
                name="problem"
                id="problem" 
                placeholder="What specific problem does this solve? Why does it matter?"
                className="min-h-[100px] bg-white/5 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="solution">Proposed Solution</Label>
              <Textarea 
                name="solution"
                id="solution" 
                placeholder="How did you plan to solve it? What features were planned?"
                className="min-h-[100px] bg-white/5 border-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="abandonReason">Why did you abandon it?</Label>
              <Textarea 
                name="abandonReason"
                id="abandonReason" 
                placeholder="Be honest. Ran out of time? Technical hurdle? Lost interest?" 
                className="bg-white/5 border-white/10"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select name="category" id="category" className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      <option>Startup Idea</option>
                      <option>Mobile App</option>
                      <option>Web App</option>
                      <option>Side Project</option>
                      <option>SaaS</option>
                      <option>Hardware</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <Label htmlFor="license">License Preference</Label>
                  <select name="license" id="license" className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      <option value="public-domain">Public Domain (Free for all)</option>
                      <option value="attribution">Attribution Required</option>
                      <option value="collaboration">Collaboration Open</option>
                  </select>
               </div>
            </div>
            
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Idea'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
