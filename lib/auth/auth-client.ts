"use client";

import { createAuthClient } from "better-auth/react";

// Create a mock client for build time
const isBuildTime = typeof window === 'undefined' && process.env.NEXT_PHASE === 'phase-production-build';

export const authClient = isBuildTime 
  ? createMockAuthClient()
  : createAuthClient({
      baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    });

function createMockAuthClient() {
  return {
    signOut: async () => ({
      data: { success: true },
      error: null
    }),
    getSession: async () => ({
      data: { user: null, session: null },
      error: null
    }),
    // Add other methods as needed
  };
}

// Export the signOut function separately
export const signOut = async () => {
  if (isBuildTime) {
    return { data: { success: true }, error: null };
  }
  
  try {
    return await authClient.signOut();
  } catch (error) {
    console.error("Sign out error:", error);
    return { data: null, error };
  }
};