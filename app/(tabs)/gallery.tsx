import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { FontFamilies, FontSizes } from '../../constants/Typography';

const { width } = Dimensions.get('window');

const COLLECTIONS = [
  {
    title: 'Clifftop Ceremonies',
    location: 'Uluwatu',
    count: 48,
    category: 'Venue',
  },
  {
    title: 'Jungle Romance',
    location: 'Ubud',
    count: 62,
    category: 'Garden',
  },
  {
    title: 'Beach Elopements',
    location: 'Seminyak',
    count: 35,
    category: 'Beach',
  },
  {
    title: 'Villa Weddings',
    location: 'Canggu',
    count: 41,
    category: 'Private',
  },
  {
    title: 'Traditional Bali',
    location: 'Gianyar',
    count: 27,
    category: 'Cultural',
  },
  {
    title: 'Sunset Ceremonies',
    location: 'Tanah Lot',
    count: 33,
    category: 'Iconic',
  },
];

const PALETTE_NAMES: Array<keyof typeof Colors.theme> = [
  'blushRomance',
  'sageGarden',
  'lavenderDreams',
  'roseGold',
  'mintGold',
  'blushRomance',
];

export default function GalleryScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.screenLabel}>Real</Text>
          <Text style={styles.screenTitle}>Weddings</Text>
          <Text style={styles.screenSubtitle}>
            Inspiration from real Bali celebrations
          </Text>
        </View>

        {/* Filter chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          {['All', 'Venue', 'Beach', 'Garden', 'Private', 'Cultural'].map(
            (filter) => (
              <TouchableOpacity
                key={filter}
                style={[
                  styles.filterChip,
                  filter === 'All' && styles.filterChipActive,
                ]}
              >
                <Text
                  style={[
                    styles.filterText,
                    filter === 'All' && styles.filterTextActive,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            )
          )}
        </ScrollView>

        {/* Collections Grid */}
        <View style={styles.grid}>
          {COLLECTIONS.map((col, i) => {
            const theme = Colors.theme[PALETTE_NAMES[i % PALETTE_NAMES.length]];
            return (
              <TouchableOpacity key={col.title} style={styles.collectionCard}>
                <View
                  style={[
                    styles.collectionImage,
                    { backgroundColor: theme.secondary },
                  ]}
                >
                  <Feather name="image" size={32} color={theme.text} />
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryBadgeText}>{col.category}</Text>
                  </View>
                </View>
                <View style={styles.collectionInfo}>
                  <Text style={styles.collectionTitle}>{col.title}</Text>
                  <View style={styles.collectionMeta}>
                    <Feather
                      name="map-pin"
                      size={11}
                      color={Colors.ui.mediumGray}
                    />
                    <Text style={styles.collectionLocation}>{col.location}</Text>
                    <Text style={styles.collectionCount}>
                      {col.count} photos
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
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
  screenSubtitle: {
    fontFamily: FontFamilies.raleway,
    fontSize: FontSizes.sm,
    color: Colors.editorial.charcoal,
    marginTop: 2,
    marginBottom: 16,
  },
  filterRow: {
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 20,
  },
  filterChip: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 100,
    backgroundColor: Colors.ui.white,
    borderWidth: 1,
    borderColor: Colors.ui.border,
  },
  filterChipActive: {
    backgroundColor: Colors.editorial.black,
    borderColor: Colors.editorial.black,
  },
  filterText: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: FontSizes.xs,
    color: Colors.editorial.charcoal,
    letterSpacing: 0.5,
  },
  filterTextActive: {
    color: Colors.ui.white,
  },
  grid: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  collectionCard: {
    width: (width - 52) / 2,
    backgroundColor: Colors.ui.white,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: Colors.ui.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 2,
  },
  collectionImage: {
    width: '100%',
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255,255,255,0.85)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  categoryBadgeText: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: 9,
    color: Colors.editorial.charcoal,
    letterSpacing: 0.5,
  },
  collectionInfo: { padding: 12 },
  collectionTitle: {
    fontFamily: FontFamilies.displayRegular,
    fontSize: FontSizes.md,
    color: Colors.editorial.black,
    marginBottom: 4,
  },
  collectionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  collectionLocation: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.xs,
    color: Colors.ui.mediumGray,
    flex: 1,
  },
  collectionCount: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.xs,
    color: Colors.editorial.gold,
  },
});
