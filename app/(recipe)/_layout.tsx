import { Stack } from 'expo-router';

const RecipeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="detailRecipe" options={{ title: 'Detail Recipe' }} />
      <Stack.Screen name="detailRecipe1" options={{ title: 'Detail Recipe1' }} />
      <Stack.Screen name="progres" options={{ title: 'Cooking Progress' }} />
      <Stack.Screen name="doneProgress" options={{ title: 'Recipe Completed' }} />
    </Stack>
  );
};

export default RecipeLayout;