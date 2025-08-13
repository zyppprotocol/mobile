import { ThemeProvider } from '@/theme/theme-provider';
import { useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { Manrope_400Regular } from '@expo-google-fonts/manrope';

export default function RootLayout() {

  const [loaded, error] = useFonts({
    Manrope_400Regular
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='wallet-setup' options={{ headerShown: false }} />
          <Stack.Screen name='import-wallet' />
          <Stack.Screen name='create-vault'/>
          <Stack.Screen name='vault-success' options={{ headerShown: false }} />
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='+not-found' />
        </Stack>
        <StatusBar style='auto' />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
