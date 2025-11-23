import { StyleSheet } from 'react-native';
import { styles as joinStyles } from './_joinstyle';
import { styles as mainStyles } from './_mainstyle';

const fallback = StyleSheet.create({
  navGroup: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  largeText: { fontSize: 32, fontWeight: '700' },
  smallText: { fontSize: 14, color: '#7E7B7B' },
  placeholderText: { color: '#7E7B7B', marginBottom: 8 },
  inputField: { borderWidth: 1, borderColor: '#E9E9E9', padding: 10, borderRadius: 8 },
  passwordGroup: { flexDirection: 'row', alignItems: 'center' },
  button: { backgroundColor: '#34967C', height: 53, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 17 },
  socialMediaButtonGroup: { marginTop: 10 },
  socialMediaButton: { height: 53, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 10, borderWidth: 1 },
  socialMediaButtonText: { fontSize: 16 },
  subTextGroup: { flexDirection: 'row', justifyContent: 'center', gap: 8 },
  subText: { fontSize: 14 },
  subTextJoin: { fontSize: 14, color: '#FFA800' }
});

// Merge available style objects, with joinStyles taking precedence over mainStyles,
// and finally the fallback values for any missing keys.
const mergedStyles = {
  ...(mainStyles as any),
  ...(joinStyles as any),
  ...fallback
};

export const styles = mergedStyles as any;
