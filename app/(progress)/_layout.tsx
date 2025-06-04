import { Stack } from 'expo-router';

const RecipeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="progress1A" options={{ title: 'Progress1' }} />
      <Stack.Screen name="progress1B" options={{ title: 'Progress2' }} />
      <Stack.Screen name="progress1C" options={{ title: 'Progress2' }} />
      <Stack.Screen name="progress1D" options={{ title: 'Progress2' }} />
      <Stack.Screen name="progress1E" options={{ title: 'Progress2' }} />
      <Stack.Screen name="progress1F" options={{ title: 'Progress2' }} />
      <Stack.Screen name="progress1G" options={{ title: 'Progress2' }} />
      {/* <Stack.Screen name="progress1C" options={{ title: 'Recipe Completed' }} /> */}
    </Stack>
  );
};

export default RecipeLayout;