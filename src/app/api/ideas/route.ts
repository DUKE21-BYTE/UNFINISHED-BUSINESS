
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Idea from '@/models/Idea';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // 1. Strict Input Validation & Whitelisting
    const { 
      title, 
      problem, 
      solution, 
      abandonReason, 
      category, 
      license 
    } = body;

    // Check for missing required fields
    if (!title || !problem || !solution || !abandonReason || !category) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // 2. secure slug generation
    const slug = title.toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') + '-' + Date.now().toString().slice(-4) + Math.floor(Math.random() * 1000);
    
    // 3. Construct the object explicitly (Prevents Mass Assignment)
    const newIdea = {
      title,
      problem,
      solution,
      abandon_reason: abandonReason, // Map camelCase to snake_case for DB
      category,
      license: license || 'public-domain',
      slug,
      description: `${problem} ${solution}`.substring(0, 300), // Auto-generate description
      tags: [category.toLowerCase().replace(' ', '-')],
      status: 'available',
      created_at: new Date(),
      likes: 0, // Force default
      views: 0, // Force default
    };

    const idea = await Idea.create(newIdea);
    
    return NextResponse.json({ success: true, data: idea }, { status: 201 });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' }, 
      { status: 500 }
    );
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
