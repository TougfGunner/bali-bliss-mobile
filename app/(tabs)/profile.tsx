import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { FontFamilies, FontSizes } from '../../constants/Typography';
import { Brand } from '../../constants/Brand';
import { router } from 'expo-router';

const MENU_ITEMS = [
  { icon: 'book-open', label: 'My BlissBook', subtitle: 'Your planning workspace' },
  { icon: 'heart', label: 'Saved Vendors', subtitle: 'Your favourites' },
  { icon: 'calendar', label: 'My Enquiries', subtitle: 'Booking requests' },
  { icon: 'file-text', label: 'Documents', subtitle: 'Contracts & quotes' },
  { icon: 'settings', label: 'Account Settings', subtitle: 'Profile & preferences' },
  { icon: 'help-circle', label: 'Help & Support', subtitle: 'Contact the team' },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Profile</Text>
        </View>

        {/* Profile Card */}
        <LinearGradient
          colors={[Colors.editorial.black, '#374151']}
          style={styles.profileCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.avatarCircle}>
            <Feather name="user" size={32} color={Colors.editorial.gold} />
          </View>
          <Text style={styles.profileScript}>Welcome back,</Text>
          <Text style={styles.profileName}>Future Newlywed</Text>
          <Text style={styles.profileEmail}>Sign in to access your planning tools</Text>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={() => router.push('/(auth)/login')}
          >
            <Text style={styles.signInText}>Sign In</Text>
            <Feather name="arrow-right" size={14} color={Colors.editorial.black} />
          </TouchableOpacity>
        </LinearGradient>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          {[
            { label: 'Days to Go', value: '—' },
            { label: 'Tasks Done', value: '2/12' },
            { label: 'Vendors Saved', value: '0' },
          ].map((stat) => (
            <View key={stat.label} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Menu */}
        <View style={styles.menuSection}>
          {MENU_ITEMS.map((item, i) => (
            <TouchableOpacity
              key={item.label}
              style={[
                styles.menuItem,
                i === MENU_ITEMS.length - 1 && { borderBottomWidth: 0 },
              ]}
            >
              <View style={styles.menuIcon}>
                <Feather
                  name={item.icon as React.ComponentProps<typeof Feather>['name']}
                  size={18}
                  color={Colors.editorial.gold}
                />
              </View>
              <View style={styles.menuText}>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Text style={styles.menuSub}>{item.subtitle}</Text>
              </View>
              <Feather name="chevron-right" size={16} color={Colors.ui.mediumGray} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Brand Footer */}
        <View style={styles.brandFooter}>
          <Text style={styles.brandScript}>{Brand.name}</Text>
          <Text style={styles.brandTagline}>{Brand.tagline}</Text>
          <Text style={styles.brandContact}>{Brand.email}</Text>
          <Text style={styles.brandContact}>{Brand.phone}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.editorial.cream },
  scroll: { flex: 1 },
  content: { paddingBottom: 40 },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  screenTitle: {
    fontFamily: FontFamilies.display,
    fontSize: FontSizes['3xl'],
    color: Colors.editorial.black,
  },
  profileCard: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(201,168,76,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: Colors.editorial.gold,
  },
  profileScript: {
    fontFamily: FontFamilies.script,
    fontSize: FontSizes.xl,
    color: Colors.editorial.gold,
  },
  profileName: {
    fontFamily: FontFamilies.display,
    fontSize: FontSizes['2xl'],
    color: Colors.ui.white,
    marginBottom: 6,
  },
  profileEmail: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.xs,
    color: 'rgba(255,255,255,0.6)',
    marginBottom: 20,
    letterSpacing: 0.3,
  },
  signInBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.editorial.gold,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 100,
  },
  signInText: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: FontSizes.sm,
    color: Colors.editorial.black,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 10,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.ui.white,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    shadowColor: Colors.ui.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1,
  },
  statValue: {
    fontFamily: FontFamilies.sansBold,
    fontSize: FontSizes.lg,
    color: Colors.editorial.black,
    marginBottom: 2,
  },
  statLabel: {
    fontFamily: FontFamilies.sans,
    fontSize: 10,
    color: Colors.ui.mediumGray,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  menuSection: {
    marginHorizontal: 20,
    backgroundColor: Colors.ui.white,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 24,
    shadowColor: Colors.ui.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.ui.border,
    gap: 12,
  },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: Colors.editorial.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: { flex: 1 },
  menuLabel: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: FontSizes.sm,
    color: Colors.editorial.black,
  },
  menuSub: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.xs,
    color: Colors.ui.mediumGray,
    marginTop: 1,
  },
  brandFooter: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  brandScript: {
    fontFamily: FontFamilies.script,
    fontSize: FontSizes['2xl'],
    color: Colors.editorial.gold,
    marginBottom: 2,
  },
  brandTagline: {
    fontFamily: FontFamilies.raleway,
    fontSize: FontSizes.xs,
    color: Colors.editorial.charcoal,
    letterSpacing: 1,
    marginBottom: 8,
  },
  brandContact: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.xs,
    color: Colors.ui.mediumGray,
    marginTop: 2,
  },
});
