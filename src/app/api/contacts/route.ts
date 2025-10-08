import { NextRequest, NextResponse } from 'next/server';
import { Client, Databases, Query } from 'node-appwrite';

// Initialize Appwrite client with server-side API key
const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    .setKey(process.env.APPWRITE_API_KEY!);

const databases = new Databases(client);
const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const collectionId = process.env.APPWRITE_CONTACTS_COLLECTION_ID!; // Use the same collection ID as the contact form

export async function GET(request: NextRequest) {
  try {
    // Verify required environment variables are present
    if (!process.env.APPWRITE_API_KEY || !process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || !process.env.APPWRITE_CONTACTS_COLLECTION_ID) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Server configuration error: Missing required environment variables' 
        },
        { status: 500 }
      );
    }

    // Fetch all contact submissions, ordered by creation date (newest first)
    const response = await databases.listDocuments(
      databaseId,
      collectionId,
      [
        Query.orderDesc('$createdAt'), // Sort by creation date, newest first
        Query.limit(100) // Limit to 100 documents for performance (adjust as needed)
      ]
    );

    // Return the documents with metadata
    return NextResponse.json({
      success: true,
      data: {
        documents: response.documents,
        total: response.total,
        limit: 100,
        offset: 0
      }
    });

  } catch (error) {
    console.error('Error fetching contact submissions:', error);

    // Handle specific Appwrite errors
    if (error instanceof Error) {
      // Check for common Appwrite error types
      if (error.message.includes('Collection with the requested ID could not be found')) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Collection not found. Please verify the collection ID.' 
          },
          { status: 404 }
        );
      }

      if (error.message.includes('Invalid API key')) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Authentication failed. Please check API key configuration.' 
          },
          { status: 401 }
        );
      }
    }

    // Return generic error for any other cases
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch contact submissions',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
