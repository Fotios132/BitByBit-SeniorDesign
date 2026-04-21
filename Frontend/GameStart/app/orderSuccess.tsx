import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const DARK_BG = '#000000ff';
const CARD_BG = '#101827';
const ACCENT = '#22c1dc';
const TEXT_PRIMARY = '#e5f2ff';

export default function OrderSuccessScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>✓</Text>
        </View>
        
        <Text style={styles.title}>Order Confirmed!</Text>
        <Text style={styles.message}>
          A confirmation email has been sent to your inbox.
        </Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.buttonText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: DARK_BG,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconBox: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: ACCENT,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  icon: {
    fontSize: 60,
    color: DARK_BG,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: TEXT_PRIMARY,
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: ACCENT,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: DARK_BG,
    fontSize: 16,
    fontWeight: '600',
  },
});
