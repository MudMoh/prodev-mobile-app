import React from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '@/styles';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconsection}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require('@/assets/images/react-logo.png')} style={{ width: 36, height: 36 }} />
        </View>

        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Create an account</Text>
          <Text style={styles.subText}>Join ProDev and start building beautiful apps.</Text>
        </View>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Full name</Text>
            <TextInput placeholder="Your full name" style={styles.formControl} />
          </View>

          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput keyboardType="email-address" placeholder="you@example.com" style={styles.formControl} />
          </View>

          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput secureTextEntry style={styles.passwordControl} placeholder="••••••••" />
              <FontAwesome name="eye-slash" size={20} color="#7E7B7B" />
            </View>
          </View>

          <View>
            <Text style={styles.formLabel}>Confirm password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput secureTextEntry style={styles.passwordControl} placeholder="••••••••" />
              <FontAwesome name="eye-slash" size={20} color="#7E7B7B" />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
              <FontAwesome name="google" size={20} />
              <Text style={styles.secondaryButtonText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
              <FontAwesome name="facebook" size={20} />
              <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account?</Text>
          <Text style={styles.signupSubTitleText}> Sign in</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
