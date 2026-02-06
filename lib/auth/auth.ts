import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { initializeUserBoard } from "../init-user-board";
import connectDB from "../db";

// IMPORTANT: Skip database connection during build
let auth: any;

// Only initialize auth if we're not in build phase
if (process.env.NEXT_PHASE !== 'phase-production-build' && process.env.NODE_ENV !== 'test') {
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
    console.error("Failed to initialize auth during build:", error);
    // Create a mock auth object for build
    auth = {
      api: {
        getSession: async () => ({ user: null, session: null }),
        signOut: async () => ({ success: false })
      }
    };
  }
} else {
  // Create a mock auth object for build time
  auth = {
    api: {
      getSession: async () => ({ user: null, session: null }),
      signOut: async () => ({ success: false })
    }
  };
}

export { auth };

export async function getSession() {
  // Skip during build
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return { user: null, session: null };
  }

  try {
    const result = await auth.api.getSession({
      headers: await headers(),
    });
    return result;
  } catch (error) {
    console.error("Session error:", error);
    return { user: null, session: null };
  }
}

export async function signOut() {
  // Skip during build
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    redirect("/");
    return;
  }

  try {
    const result = await auth.api.signOut({
      headers: await headers(),
    });

    if (result.success) {
      redirect("/sign-in");
    }
  } catch (error) {
    console.error("Sign out error:", error);
    redirect("/");
  }
}