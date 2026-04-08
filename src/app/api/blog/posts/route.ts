import { NextResponse } from 'next/server';

const BLOG_ID = process.env.BLOG_ID || process.env.NEXT_PUBLIC_BLOG_ID || process.env.NEXT_PUBLIC_BLOGGER_ID;
const API_KEY = process.env.BLOGGER_API_KEY || process.env.NEXT_PUBLIC_BLOGGER_API_KEY || process.env.BLOGGER_KEY;

export async function GET() {
  if (!BLOG_ID || !API_KEY) {
    return NextResponse.json({ error: 'Missing BLOG_ID or BLOGGER_API_KEY env vars' }, { status: 500 });
  }

  try {
    const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?maxResults=50&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error('Error fetching Blogger posts:', err);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
