import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />

    </Stack>
  );
}
