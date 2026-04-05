import { Tabs } from 'expo-router';
import { Platform, StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { FontFamilies } from '../../constants/Typography';
import { Feather } from '@expo/vector-icons';

function TabIcon({
  name,
  color,
  size,
}: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
  size: number;
}) {
  return <Feather name={name} color={color} size={size} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.editorial.gold,
        tabBarInactiveTintColor: Colors.editorial.charcoal,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.editorial.ivory,
          borderTopColor: Colors.ui.border,
          borderTopWidth: StyleSheet.hairlineWidth,
          height: Platform.OS === 'ios' ? 88 : 64,
          paddingBottom: Platform.OS === 'ios' ? 28 : 8,
          paddingTop: 8,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontFamily: FontFamilies.sansSemiBold,
          fontSize: 10,
          letterSpacing: 0.5,
          textTransform: 'uppercase',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="compass" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="vendors"
        options={{
          title: 'Vendors',
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="grid" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="blissbook"
        options={{
          title: 'BlissBook',
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="book-open" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: 'Gallery',
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="image" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
