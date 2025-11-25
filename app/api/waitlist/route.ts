import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields (portfolio and linkedin are optional)
    const requiredFields = ['name', 'email', 'phone', 'jobProfession', 'company', 'instagram', 'country'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get Google Sheets URL from server-side environment variable
    const googleSheetsUrl = process.env.GOOGLE_SHEETS_URL;
    
    if (!googleSheetsUrl) {
      console.error('Google Sheets URL not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Send data to Google Sheets
    const response = await fetch(googleSheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    return NextResponse.json(
      { success: true, message: 'Successfully added to waitlist' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
