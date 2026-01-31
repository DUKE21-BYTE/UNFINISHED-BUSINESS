
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Idea from '@/models/Idea';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();
    
    // Create a simple slug
    const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Math.floor(Math.random() * 1000);
    
    // Construct the idea object
    const newIdea = {
      ...data,
      slug,
      description: data.problem + " " + data.solution, // Fallback description
      tags: [data.category.toLowerCase().replace(' ', '-')],
      status: 'available',
      created_at: new Date(),
    };

    const idea = await Idea.create(newIdea);
    
    return NextResponse.json({ success: true, data: idea }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating idea:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET() {
    try {
        await dbConnect();
        const ideas = await Idea.find({}).sort({ created_at: -1 }); // Get latest ideas first
        return NextResponse.json({ success: true, data: ideas }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
