
import { Stack, useRouter, useSegments } from "expo-router";
import React from "react";
import { AuthProvider, useAuth } from "../providers/AuthContext";

// This component contains the core authentication logic
function RootLayoutContent() {
  // Check the user's authentication state using a hook
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      router.replace("/login");
      return;
    }

    if (user && inAuthGroup) {
      router.replace("/home");
    }
  }, [loading, user, segments, router]);

  // Always render the stack; navigation happens via effects to avoid flicker
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(app)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}

// Wrap the entire app with the AuthProvider
export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutContent />
    </AuthProvider>
  );
}
