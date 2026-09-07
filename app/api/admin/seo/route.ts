import { NextResponse } from 'next/server';

let inMemoryCustomSeo: any = null;

export async function GET() {
  return NextResponse.json({
    success: true,
    data: inMemoryCustomSeo,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body && body.routes) {
      inMemoryCustomSeo = body.routes;
      return NextResponse.json({ success: true, message: 'SEO configuration saved successfully.' });
    }
    return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Failed to save SEO config' }, { status: 500 });
  }
}
