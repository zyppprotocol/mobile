import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BookOpen, Stars, Terminal } from 'lucide-react-native';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const bottom = useBottomTabBarHeight();

  const cardColor = useThemeColor({}, 'card');
  const borderColor = useThemeColor({}, 'border');
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={{ padding: 16, paddingBottom: bottom, width: '100%', height: 600, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});
