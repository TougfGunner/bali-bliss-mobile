import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { FontFamilies, FontSizes } from '../../constants/Typography';
import { Brand } from '../../constants/Brand';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const CATEGORIES = [
  { icon: 'camera', label: 'Photographers' },
  { icon: 'music', label: 'Entertainment' },
  { icon: 'feather', label: 'Florists' },
  { icon: 'home', label: 'Venues' },
  { icon: 'scissors', label: 'Beauty' },
  { icon: 'truck', label: 'Catering' },
];

export default function DiscoverScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>{Brand.name}</Text>
          <TouchableOpacity style={styles.notifBtn}>
            <Feather name="bell" size={20} color={Colors.editorial.charcoal} />
          </TouchableOpacity>
        </View>

        {/* Hero Banner */}
        <View style={styles.heroBanner}>
          <LinearGradient
            colors={['#1f2937', '#3d4f63']}
            style={styles.heroGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.heroScript}>Your Perfect</Text>
            <Text style={styles.heroTitle}>Bali Wedding</Text>
            <Text style={styles.heroSubtitle}>
              Luxury destination wedding planning in the Island of the Gods
            </Text>
            <TouchableOpacity
              style={styles.heroCta}
              onPress={() => router.push('/(tabs)/vendors')}
            >
              <Text style={styles.heroCtaText}>Explore Vendors</Text>
              <Feather name="arrow-right" size={14} color={Colors.editorial.black} />
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* Quote Banner */}
        <View style={styles.quoteBanner}>
          <Text style={styles.quoteText}>{Brand.bannerText}</Text>
        </View>

        {/* Browse Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Browse By</Text>
          <Text style={styles.sectionTitle}>Category</Text>
          <View style={styles.categoryGrid}>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat.label}
                style={styles.categoryCard}
                onPress={() => router.push('/(tabs)/vendors')}
              >
                <View style={styles.categoryIcon}>
                  <Feather
                    name={cat.icon as React.ComponentProps<typeof Feather>['name']}
                    size={22}
                    color={Colors.editorial.gold}
                  />
                </View>
                <Text style={styles.categoryLabel}>{cat.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Your Planning</Text>
          <Text style={styles.sectionTitle}>Tools</Text>
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={[styles.actionCard, { backgroundColor: Colors.theme.blushRomance.secondary }]}
              onPress={() => router.push('/(tabs)/blissbook')}
            >
              <Feather name="book-open" size={24} color={Colors.theme.blushRomance.text} />
              <Text style={[styles.actionTitle, { color: Colors.theme.blushRomance.text }]}>
                BlissBook
              </Text>
              <Text style={[styles.actionSub, { color: Colors.theme.blushRomance.text }]}>
                Your wedding workbook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionCard, { backgroundColor: Colors.theme.sageGarden.secondary }]}
              onPress={() => router.push('/(tabs)/gallery')}
            >
              <Feather name="image" size={24} color={Colors.theme.sageGarden.text} />
              <Text style={[styles.actionTitle, { color: Colors.theme.sageGarden.text }]}>
                Gallery
              </Text>
              <Text style={[styles.actionSub, { color: Colors.theme.sageGarden.text }]}>
                Wedding inspiration
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact CTA */}
        <View style={styles.contactSection}>
          <Text style={styles.contactScript}>Ready to Begin?</Text>
          <Text style={styles.contactTitle}>Let's Plan Your Dream Wedding</Text>
          <Text style={styles.contactSub}>{Brand.email}</Text>
          <Text style={styles.contactSub}>{Brand.phone}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.editorial.cream,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: Colors.editorial.cream,
  },
  logo: {
    fontFamily: FontFamilies.displayItalic,
    fontSize: FontSizes['2xl'],
    color: Colors.editorial.black,
    letterSpacing: -0.5,
  },
  notifBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.ui.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.ui.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  heroBanner: {
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
  },
  heroGradient: {
    padding: 32,
    minHeight: 220,
    justifyContent: 'flex-end',
  },
  heroScript: {
    fontFamily: FontFamilies.script,
    fontSize: FontSizes['2xl'],
    color: Colors.editorial.gold,
    marginBottom: 2,
  },
  heroTitle: {
    fontFamily: FontFamilies.display,
    fontSize: FontSizes['3xl'],
    color: Colors.ui.white,
    marginBottom: 10,
  },
  heroSubtitle: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.sm,
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 20,
    marginBottom: 20,
  },
  heroCta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.editorial.gold,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 100,
  },
  heroCtaText: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: FontSizes.sm,
    color: Colors.editorial.black,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  quoteBanner: {
    marginHorizontal: 20,
    backgroundColor: Colors.editorial.black,
    borderRadius: 12,
    padding: 16,
    marginBottom: 28,
  },
  quoteText: {
    fontFamily: FontFamilies.raleway,
    fontSize: FontSizes.sm,
    color: Colors.editorial.gold,
    textAlign: 'center',
    letterSpacing: 0.5,
    lineHeight: 20,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 28,
  },
  sectionLabel: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: FontSizes.xs,
    color: Colors.editorial.gold,
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  sectionTitle: {
    fontFamily: FontFamilies.display,
    fontSize: FontSizes.xl,
    color: Colors.editorial.black,
    marginBottom: 16,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: (width - 60) / 3,
    backgroundColor: Colors.ui.white,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: Colors.ui.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 2,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.editorial.cream,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryLabel: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: FontSizes.xs,
    color: Colors.editorial.charcoal,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  actionCard: {
    flex: 1,
    borderRadius: 16,
    padding: 20,
    gap: 6,
  },
  actionTitle: {
    fontFamily: FontFamilies.displayRegular,
    fontSize: FontSizes.lg,
    marginTop: 8,
  },
  actionSub: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.xs,
    opacity: 0.75,
  },
  contactSection: {
    marginHorizontal: 20,
    backgroundColor: Colors.editorial.cream,
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.ui.border,
  },
  contactScript: {
    fontFamily: FontFamilies.script,
    fontSize: FontSizes['2xl'],
    color: Colors.editorial.gold,
    marginBottom: 4,
  },
  contactTitle: {
    fontFamily: FontFamilies.display,
    fontSize: FontSizes.xl,
    color: Colors.editorial.black,
    textAlign: 'center',
    marginBottom: 16,
  },
  contactSub: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.sm,
    color: Colors.editorial.charcoal,
    letterSpacing: 0.5,
    marginTop: 4,
  },
});
