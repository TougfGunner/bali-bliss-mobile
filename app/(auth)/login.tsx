import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { FontFamilies, FontSizes } from '../../constants/Typography';
import { Brand } from '../../constants/Brand';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Back */}
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Feather name="arrow-left" size={20} color={Colors.editorial.charcoal} />
          </TouchableOpacity>

          {/* Brand */}
          <View style={styles.brandSection}>
            <Text style={styles.brandScript}>{Brand.name}</Text>
            <Text style={styles.brandTag}>{Brand.tagline}</Text>
          </View>

          {/* Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Welcome Back</Text>
            <Text style={styles.cardSubtitle}>
              Sign in to continue planning your Bali wedding
            </Text>

            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Email</Text>
              <View style={styles.inputWrap}>
                <Feather name="mail" size={16} color={Colors.ui.mediumGray} />
                <TextInput
                  style={styles.input}
                  placeholder="hello@example.com"
                  placeholderTextColor={Colors.ui.mediumGray}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>Password</Text>
              <View style={styles.inputWrap}>
                <Feather name="lock" size={16} color={Colors.ui.mediumGray} />
                <TextInput
                  style={styles.input}
                  placeholder="Your password"
                  placeholderTextColor={Colors.ui.mediumGray}
                  secureTextEntry
                />
              </View>
            </View>

            <TouchableOpacity style={styles.forgotLink}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signInBtn}
              onPress={() => router.replace('/(tabs)')}
            >
              <LinearGradient
                colors={[Colors.editorial.black, '#374151']}
                style={styles.signInGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.signInText}>Sign In</Text>
                <Feather name="arrow-right" size={16} color={Colors.ui.white} />
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity style={styles.registerBtn}>
              <Text style={styles.registerText}>
                New couple?{' '}
                <Text style={styles.registerLink}>Create account</Text>
              </Text>
            </TouchableOpacity>
          </View>

          {/* Vendor login hint */}
          <TouchableOpacity style={styles.vendorHint}>
            <Feather name="briefcase" size={14} color={Colors.ui.mediumGray} />
            <Text style={styles.vendorHintText}>Are you a vendor? Sign in here</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.editorial.cream },
  content: { flexGrow: 1, padding: 24 },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.ui.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: Colors.ui.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1,
  },
  brandSection: { alignItems: 'center', marginBottom: 32 },
  brandScript: {
    fontFamily: FontFamilies.script,
    fontSize: FontSizes['4xl'],
    color: Colors.editorial.black,
  },
  brandTag: {
    fontFamily: FontFamilies.raleway,
    fontSize: FontSizes.xs,
    color: Colors.editorial.charcoal,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginTop: 4,
  },
  card: {
    backgroundColor: Colors.ui.white,
    borderRadius: 24,
    padding: 28,
    shadowColor: Colors.ui.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 4,
    marginBottom: 20,
  },
  cardTitle: {
    fontFamily: FontFamilies.display,
    fontSize: FontSizes['2xl'],
    color: Colors.editorial.black,
    marginBottom: 6,
  },
  cardSubtitle: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.sm,
    color: Colors.ui.mediumGray,
    marginBottom: 28,
    lineHeight: 20,
  },
  fieldGroup: { marginBottom: 16 },
  fieldLabel: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: FontSizes.xs,
    color: Colors.editorial.charcoal,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.ui.lightGray,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  input: {
    flex: 1,
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.sm,
    color: Colors.editorial.black,
  },
  forgotLink: { alignSelf: 'flex-end', marginBottom: 24 },
  forgotText: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.xs,
    color: Colors.editorial.gold,
    letterSpacing: 0.5,
  },
  signInBtn: { borderRadius: 100, overflow: 'hidden', marginBottom: 20 },
  signInGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
  },
  signInText: {
    fontFamily: FontFamilies.sansSemiBold,
    fontSize: FontSizes.sm,
    color: Colors.ui.white,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  dividerLine: { flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.ui.border },
  dividerText: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.xs,
    color: Colors.ui.mediumGray,
  },
  registerBtn: { alignItems: 'center' },
  registerText: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.sm,
    color: Colors.editorial.charcoal,
  },
  registerLink: {
    color: Colors.editorial.gold,
    fontFamily: FontFamilies.sansSemiBold,
  },
  vendorHint: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  vendorHintText: {
    fontFamily: FontFamilies.sans,
    fontSize: FontSizes.xs,
    color: Colors.ui.mediumGray,
    letterSpacing: 0.3,
  },
});
