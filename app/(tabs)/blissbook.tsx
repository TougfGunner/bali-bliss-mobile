import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { FontFamilies, FontSizes } from '../../constants/Typography';

const { width } = Dimensions.get('window');

const TOOLS = [
  {
    icon: 'dollar-sign',
    title: 'Budget Tracker',
    subtitle: 'Monitor every expense',
    color: Colors.theme.mintGold.secondary,
    textColor: Colors.theme.mintGold.text,
  },
  {
    icon: 'users',
    title: 'Guest List',
    subtitle: 'Manage your invitations',
    color: Colors.theme.lavenderDreams.secondary,
    textColor: Colors.theme.lavenderDreams.text,
  },
  {
    icon: 'layout',
    title: 'Seating Chart',
    subtitle: 'Plan your reception',
    color: Colors.theme.sageGarden.secondary,
    textColor: Colors.theme.sageGarden.text,
  },
  {
    icon: 'check-square',
    title: 'Checklist',
    subtitle: 'Track your to-dos',
    color: Colors.theme.blushRomance.secondary,
    textColor: Colors.theme.blushRomance.text,
  },
  {
    icon: 'calendar',
    title: 'Timeline',
    subtitle: 'Day-of schedule',
    color: Colors.theme.roseGold.secondary,
    textColor: Colors.theme.roseGold.text,
  },
  {
    icon: 'heart',
    title: 'Mood Board',
    subtitle: 'Your vision & inspiration',
    color: Colors.theme.blushRomance.secondary,
    textColor: Colors.theme.blushRomance.text,
  },
];

const CHECKLIST_PREVIEW = [
  { task: 'Book your venue', done: true },
  { task: 'Choose your photographer', done: true },
  { task: 'Select floral arrangements', done: false },
  { task: 'Finalise guest list', done: false },
  { task: 'Book hair & makeup', done: false },
];

export default function BlissBookScreen() {
  const done = CHECKLIST_PREVIEW.filter((t) => t.done).length;
  const total = CHECKLIST_PREVIEW.length;
  const progress = done / total;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.screenLabel}>Your</Text>
          <Text style={styles.screenTitle}>BlissBook</Text>
          <Text style={styles.screenSubtitle}>Wedding planning workbook</Text>
        </View>

        {/* Hero Card */}
        <LinearGradient
          colors={['#f9e8e8', '#fdf0e8', '#fdfaf6']}
          style={styles.heroCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.heroScript}>Planning Made</Text>
          <Text style={styles.heroTitle}>Beautiful</Text>
          <Text style={styles.heroSub}>
            All your wedding planning tools in one elegant space.
          </Text>
        </LinearGradient>

        {/* Progress */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Planning Progress</Text>
            <Text style={styles.progressPercent}>
              {done}/{total} tasks
            </Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
          </View>
          {CHECKLIST_PREVIEW.map((item) => (
            <View key={item.task} style={styles.checkItem}>
              <View
                style={[
                  styles.checkCircle,
                  item.done && styles.checkCircleDone,
                ]}
              >
                {item.done && (
                  <Feather name="check" size={10} color={Colors.ui.white} />
                )}
              </View>
              <Text
                style={[styles.checkText, item.done && styles.checkTextDone]}
              >
                {item.task}
              </Text>
            </View>
          ))}
        </View>

        {/* Tools Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Planning Tools</Text>
          <View style={styles.toolsGrid}>
            {TOOLS.map((tool) => (
              <TouchableOpacity
                key={tool.title}
                style={[styles.toolCard, { backgroundColor: tool.color }]}
              >
                <Feather
                  name={tool.icon as React.ComponentProps<typeof Feather>['name']}
                  size={22}
                  color={tool.textColor}
                />
                <Text style={[styles.toolTitle, { color: tool.textColor }]}>
                  {tool.title}
                </Text>
                <Text style={[styles.toolSub, { color: tool.textColor }]}>
                  {tool.subtitle}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
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
  },
  heroCard: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 28,
    marginBottom: 20,
  },
  heroScript: {
    fontFamily: FontFamilies.script,
    fontSize: FontSizes['2xl'],
    color: Colors.editorial.gold,
  },
  heroTitle: {
    fontFamily: FontFamilies.display,
    fontSize: FontSizes['3xl'],
    color: Colors.editorial.black,
    marginBottom: 8,
  },
  heroSub: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.sm,
    color: Colors.editorial.charcoal,
    lineHeight: 20,
  },
  progressSection: {
    marginHorizontal: 20,
    backgroundColor: Colors.ui.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: Colors.ui.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressLabel: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: FontSizes.sm,
    color: Colors.editorial.black,
    letterSpacing: 0.5,
  },
  progressPercent: {
    fontFamily: FontFamilies.sansBold,
    fontSize: FontSizes.sm,
    color: Colors.editorial.gold,
  },
  progressBar: {
    height: 4,
    backgroundColor: Colors.editorial.cream,
    borderRadius: 2,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.editorial.gold,
    borderRadius: 2,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.ui.border,
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.ui.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircleDone: {
    backgroundColor: Colors.editorial.gold,
    borderColor: Colors.editorial.gold,
  },
  checkText: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.sm,
    color: Colors.editorial.charcoal,
  },
  checkTextDone: {
    textDecorationLine: 'line-through',
    color: Colors.ui.mediumGray,
  },
  section: { paddingHorizontal: 20, marginBottom: 28 },
  sectionLabel: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: FontSizes.xs,
    color: Colors.editorial.charcoal,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 14,
  },
  toolsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  toolCard: {
    width: (width - 52) / 2,
    borderRadius: 16,
    padding: 18,
    gap: 6,
  },
  toolTitle: {
    fontFamily: FontFamilies.displayRegular,
    fontSize: FontSizes.md,
    marginTop: 8,
  },
  toolSub: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.xs,
    opacity: 0.7,
  },
});
