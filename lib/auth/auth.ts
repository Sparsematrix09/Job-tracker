import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { headers } from "next/headers";
import { initializeUserBoard } from "../init-user-board";
import connectDB from "../db";

// Helper to check if we're in build phase
const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build';

// Initialize auth conditionally
let auth: any;

if (!isBuildPhase && process.env.NODE_ENV !== 'test') {
  try {
    const mongooseInstance = await connectDB();
    const client = mongooseInstance.connection.getClient();
    const db = client.db();

    auth = betterAuth({
      database: mongodbAdapter(db, {
        client,
      }),
      session: {
        cookieCache: {
          enabled: true,
          maxAge: 60 * 60,
        },
      },
      emailAndPassword: {
        enabled: true,
      },
      databaseHooks: {
        user: {
          create: {
            after: async (user: any) => {
              if (user.id) {
                await initializeUserBoard(user.id);
              }
            },
          },
        },
      },
    });
  } catch (error) {
    console.error("Auth initialization error:", error);
    auth = createMockAuth();
  }
} else {
  auth = createMockAuth();
}

function createMockAuth() {
  return {
    api: {
      getSession: async () => ({ 
        user: null, 
        session: null,
        success: true 
      }),
      signOut: async () => ({ success: true })
    }
  };
}

export { auth };

export async function getSession() {
  if (isBuildPhase) {
    return { user: null, session: null, success: true };
  }

  try {
    const result = await auth.api.getSession({
      headers: await headers(),
    });
    return result;
  } catch (error) {
    console.error("Session error:", error);
    return { user: null, session: null, success: false };
  }
}

// IMPORTANT: Don't call redirect() during build
export async function signOut() {
  if (isBuildPhase) {
    return { success: true, redirectUrl: "/sign-in" };
  }

  try {
    const result = await auth.api.signOut({
      headers: await headers(),
    });

    return { 
      success: result.success, 
      redirectUrl: result.success ? "/sign-in" : null 
    };
  } catch (error) {
    console.error("Sign out error:", error);
    return { success: false, redirectUrl: null };
  }
}