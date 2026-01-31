
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">About Unfinished Ideas</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We believe that every idea deserves a chance to be built, even if the original creator couldn't finish it.
        </p>
      </div>

      <div className="grid gap-12">
        <section className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">The Graveyard of Great Ideas</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Developers, designers, and entrepreneurs are constantly coming up with brilliant ideas. 
            They start building, buy the domain, set up the repo... and then life happens. 
            They get busy, they lose interest, or they hit a technical wall.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-4">
            Usually, these projects die a quiet death in a private GitHub repository or a dusty notebook. 
            <strong>Unfinished Ideas</strong> exists to change that. We turn the "project graveyard" into a 
            library of open-source inspiration.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="bg-muted/50 border-none shadow-none">
                <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm font-medium text-muted-foreground">Abandoned Projects</div>
                </CardContent>
            </Card>
            <Card className="bg-muted/50 border-none shadow-none">
                <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">Free</div>
                    <div className="text-sm font-medium text-muted-foreground">To Adopt & Build</div>
                </CardContent>
            </Card>
            <Card className="bg-muted/50 border-none shadow-none">
                <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">Open</div>
                    <div className="text-sm font-medium text-muted-foreground">Community Driven</div>
                </CardContent>
            </Card>
        </div>

        <section className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground">
            <li><strong>Browse:</strong> Look through ideas that have been submitted.</li>
            <li><strong>Adopt:</strong> Find one that sparks your interest. Check the license/status.</li>
            <li><strong>Build:</strong> Take the idea and run with it. No permission needed for public domain ideas.</li>
            <li><strong>Submit:</strong> Have an old project you'll never finish? List it here for someone else.</li>
          </ul>
        </section>

        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
                <h3 className="text-2xl font-bold mb-2">Have a project gathering dust?</h3>
                <p className="text-muted-foreground">Give your idea a second life. Submit it to the database today.</p>
            </div>
            <Link href="/submit-idea">
                <Button size="lg" className="whitespace-nowrap">Submit an Idea</Button>
            </Link>
        </div>
      </div>
    </div>
  );
}
