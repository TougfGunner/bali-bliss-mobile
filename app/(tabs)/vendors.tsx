import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { FontFamilies, FontSizes } from '../../constants/Typography';

const { width } = Dimensions.get('window');

const CATEGORIES = [
  { icon: 'camera', label: 'Photographers', count: '48+' },
  { icon: 'video', label: 'Videographers', count: '32+' },
  { icon: 'feather', label: 'Florists', count: '24+' },
  { icon: 'home', label: 'Venues', count: '60+' },
  { icon: 'scissors', label: 'Beauty', count: '36+' },
  { icon: 'music', label: 'Entertainment', count: '28+' },
  { icon: 'truck', label: 'Catering', count: '18+' },
  { icon: 'shopping-bag', label: 'Bridal Fashion', count: '22+' },
];

const FEATURED = [
  {
    name: 'Karma Kandara',
    category: 'Venue',
    location: 'Bukit Peninsula',
    rating: '4.9',
  },
  {
    name: 'Alila Villas Uluwatu',
    category: 'Venue',
    location: 'Uluwatu',
    rating: '4.8',
  },
  {
    name: 'The Layar',
    category: 'Private Villa',
    location: 'Seminyak',
    rating: '4.9',
  },
];

export default function VendorsScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.screenLabel}>Our</Text>
          <Text style={styles.screenTitle}>Vendors</Text>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={16}
            color={Colors.editorial.charcoal}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search vendors, venues, photographers..."
            placeholderTextColor={Colors.ui.mediumGray}
          />
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Browse by Category</Text>
          <View style={styles.categoryGrid}>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity key={cat.label} style={styles.categoryCard}>
                <View style={styles.categoryIconWrap}>
                  <Feather
                    name={cat.icon as React.ComponentProps<typeof Feather>['name']}
                    size={20}
                    color={Colors.editorial.gold}
                  />
                </View>
                <Text style={styles.categoryName}>{cat.label}</Text>
                <Text style={styles.categoryCount}>{cat.count}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Vendors */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Featured Venues</Text>
          {FEATURED.map((vendor) => (
            <TouchableOpacity key={vendor.name} style={styles.vendorCard}>
              <View style={styles.vendorImagePlaceholder}>
                <Feather name="home" size={32} color={Colors.editorial.gold} />
              </View>
              <View style={styles.vendorInfo}>
                <Text style={styles.vendorName}>{vendor.name}</Text>
                <Text style={styles.vendorCategory}>{vendor.category}</Text>
                <View style={styles.vendorMeta}>
                  <Feather name="map-pin" size={12} color={Colors.ui.mediumGray} />
                  <Text style={styles.vendorLocation}>{vendor.location}</Text>
                  <View style={styles.ratingBadge}>
                    <Feather name="star" size={10} color={Colors.editorial.gold} />
                    <Text style={styles.ratingText}>{vendor.rating}</Text>
                  </View>
                </View>
              </View>
              <Feather name="chevron-right" size={18} color={Colors.ui.mediumGray} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.editorial.cream },
  scroll: { flex: 1 },
  content: { paddingBottom: 32 },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  screenLabel: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: FontSizes.xs,
    color: Colors.editorial.gold,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  screenTitle: {
    fontFamily: FontFamilies.display,
    fontSize: FontSizes['3xl'],
    color: Colors.editorial.black,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: Colors.ui.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: Colors.ui.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 2,
  },
  searchIcon: { marginRight: 10 },
  searchInput: {
    flex: 1,
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.sm,
    color: Colors.editorial.black,
  },
  section: { paddingHorizontal: 24, marginBottom: 28 },
  sectionLabel: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: FontSizes.xs,
    color: Colors.editorial.charcoal,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 14,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryCard: {
    width: (width - 68) / 4,
    backgroundColor: Colors.ui.white,
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    shadowColor: Colors.ui.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1,
  },
  categoryIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.editorial.cream,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  categoryName: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: 9,
    color: Colors.editorial.charcoal,
    textAlign: 'center',
    letterSpacing: 0.3,
    marginBottom: 2,
  },
  categoryCount: {
    fontFamily: FontFamilies.sans,
    fontSize: 9,
    color: Colors.editorial.gold,
  },
  vendorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.ui.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: Colors.ui.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 2,
  },
  vendorImagePlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: Colors.editorial.cream,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  vendorInfo: { flex: 1 },
  vendorName: {
    fontFamily: FontFamilies.displayRegular,
    fontSize: FontSizes.md,
    color: Colors.editorial.black,
    marginBottom: 2,
  },
  vendorCategory: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: FontSizes.xs,
    color: Colors.editorial.gold,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  vendorMeta: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  vendorLocation: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.xs,
    color: Colors.ui.mediumGray,
    flex: 1,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: Colors.editorial.cream,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  ratingText: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: 10,
    color: Colors.editorial.charcoal,
  },
});
