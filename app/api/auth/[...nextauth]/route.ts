// api/auth/imagekit-auth/route.ts
import { getUploadAuthParams } from "@imagekit/next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions);
    if (!session) {
      return Response.json(
        { error: "Unauthorized - Please sign in to upload files" },
        { status: 401 }
      );
    }

    // Validate environment variables
    if (!process.env.IMAGEKIT_PRIVATE_KEY || !process.env.NEXT_PUBLIC_PUBLIC_KEY) {
      console.error("Missing ImageKit environment variables");
      return Response.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const authenticationParameters = getUploadAuthParams({
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      expire: 30 * 60, // 30 minutes expiry
    });

    return Response.json({
      authenticationParameters,
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    });
  } catch (error) {
    console.error("ImageKit authentication error:", error);
    return Response.json(
      { error: "Authentication for ImageKit failed" },
      { status: 500 }
    );
  }
}