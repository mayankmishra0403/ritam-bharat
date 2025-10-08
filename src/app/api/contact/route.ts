import { NextRequest, NextResponse } from 'next/server';
import { Client, Databases, ID } from 'node-appwrite';
import { z } from 'zod';

// Zod schema for input validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters long." }).regex(/^[\+]?[0-9\s\-\(\)]+$/, { message: "Invalid phone number format." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

// Initialize the Appwrite client for server-side use
let client: Client | null = null;
let databases: Databases | null = null;

// Only initialize if environment variables are available (not during build)
if (process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT && 
    process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID && 
    process.env.APPWRITE_API_KEY) {
  client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);
  
  databases = new Databases(client);
}

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) {
      throw new Error('NEXT_PUBLIC_APPWRITE_ENDPOINT is not configured');
    }
    if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
      throw new Error('NEXT_PUBLIC_APPWRITE_PROJECT_ID is not configured');
    }
    if (!process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID) {
      throw new Error('NEXT_PUBLIC_APPWRITE_DATABASE_ID is not configured');
    }
    if (!process.env.APPWRITE_CONTACTS_COLLECTION_ID) {
      throw new Error('APPWRITE_CONTACTS_COLLECTION_ID is not configured');
    }
    if (!process.env.APPWRITE_API_KEY) {
      throw new Error('APPWRITE_API_KEY is not configured');
    }

    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid JSON in request body',
          error: 'INVALID_JSON'
        },
        { status: 400 }
      );
    }

    // Validate input data using Zod schema
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((err: z.ZodIssue) => ({
        field: err.path.join('.'),
        message: err.message
      }));

      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          error: 'VALIDATION_ERROR',
          details: errors
        },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = validationResult.data;

    // Create document data with additional fields
    const documentData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      message: message.trim(),
      status: 'new',
      createdAt: new Date().toISOString(),
      ipAddress: request.headers.get('x-forwarded-for') || 
                 request.headers.get('x-real-ip') || 
                 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // Save to Appwrite database
    if (!databases) {
      return NextResponse.json(
        {
          success: false,
          message: 'Database service is not properly configured.',
          error: 'DATABASE_NOT_INITIALIZED'
        },
        { status: 500 }
      );
    }

    try {
      const document = await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.APPWRITE_CONTACTS_COLLECTION_ID!,
        ID.unique(),
        documentData
      );

      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for your message! We will get back to you soon.',
          data: {
            id: document.$id,
            status: 'submitted',
            submittedAt: document.$createdAt
          }
        },
        { status: 201 }
      );

    } catch (appwriteError: any) {
      console.error('Appwrite database error:', appwriteError);
      
      // Handle specific Appwrite errors
      if (appwriteError?.type === 'document_invalid_structure') {
        return NextResponse.json(
          {
            success: false,
            message: 'Database configuration error. Please contact support.',
            error: 'DATABASE_STRUCTURE_ERROR'
          },
          { status: 500 }
        );
      }

      if (appwriteError?.type === 'collection_not_found') {
        return NextResponse.json(
          {
            success: false,
            message: 'Service temporarily unavailable. Please try again later.',
            error: 'SERVICE_UNAVAILABLE'
          },
          { status: 503 }
        );
      }

      if (appwriteError?.code === 401) {
        return NextResponse.json(
          {
            success: false,
            message: 'Authentication failed. Please contact support.',
            error: 'AUTH_ERROR'
          },
          { status: 500 }
        );
      }

      // Generic database error
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to save your message. Please try again later.',
          error: 'DATABASE_ERROR'
        },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('Contact API error:', error);

    // Handle configuration errors
    if (error.message?.includes('is not configured')) {
      return NextResponse.json(
        {
          success: false,
          message: 'Service configuration error. Please contact support.',
          error: 'CONFIGURATION_ERROR'
        },
        { status: 500 }
      );
    }

    // Generic server error
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
        error: 'INTERNAL_SERVER_ERROR'
      },
      { status: 500 }
    );
  }
}

// Handle unsupported HTTP methods
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed. This endpoint only accepts POST requests.',
      error: 'METHOD_NOT_ALLOWED'
    },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed. This endpoint only accepts POST requests.',
      error: 'METHOD_NOT_ALLOWED'
    },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed. This endpoint only accepts POST requests.',
      error: 'METHOD_NOT_ALLOWED'
    },
    { status: 405 }
  );
}
