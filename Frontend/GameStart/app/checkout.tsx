// app/checkout.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useAuth } from '@/context/AuthContext'; 
import { useCart } from '@/context/CartContext';

const DARK_BG = '#000000ff';
const CARD_BG = '#101827';
const ACCENT = '#22c1dc';
const TEXT_PRIMARY = '#e5f2ff';
const TEXT_SECONDARY = '#9ca3af';
const BORDER = '#1f2937';

export default function CheckoutScreen() {
  const { user } = useAuth(); 
  const { items } = useCart(); // <-- ADDED

  // for none users)
  if (!user) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <View style={styles.navbar}>
            <Text style={styles.logo}>Checkout</Text>
          </View>
        </View>

        <View style={styles.mustSignInWrap}>
          <Text style={styles.mustSignInText}>Must be signed in</Text>

          <TouchableOpacity
            style={styles.goSignInButton}
            onPress={() => router.replace('/signIn')}
          >
            <Text style={styles.goSignInText}>Go to Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // read total from route params
  const { total } = useLocalSearchParams<{ total?: string }>();

  const numericTotal = total ? parseFloat(total) : 0;
  const displayTotal = numericTotal.toFixed(2);
  const [method, setMethod] = useState<'credit' | 'debit'>('credit');

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.navbar}>
          <Text style={styles.logo}>Checkout</Text>
        </View>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Order summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.summaryBox}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryTotalLabel}>Total</Text>
              <Text style={styles.summaryTotalPrice}>${displayTotal}</Text>
            </View>
          </View>
        </View>

        {/* Payment method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.methodRow}>
            <TouchableOpacity
              style={[
                styles.methodButton,
                method === 'credit' && styles.methodButtonActive,
              ]}
              onPress={() => setMethod('credit')}
            >
              <Text
                style={[
                  styles.methodText,
                  method === 'credit' && styles.methodTextActive,
                ]}
              >
                Credit Card
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.methodButton,
                method === 'debit' && styles.methodButtonActive,
              ]}
              onPress={() => setMethod('debit')}
            >
              <Text
                style={[
                  styles.methodText,
                  method === 'debit' && styles.methodTextActive,
                ]}
              >
                Debit Card
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card details needs work  */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {method === 'credit' ? 'Credit Card Details' : 'Debit Card Details'}
          </Text>
          <View style={styles.cardBox}>
            <TextInput
              placeholder="Cardholder Name"
              placeholderTextColor="#6b7280"
              style={styles.input}
            />
            <TextInput
              placeholder="Card Number"
              placeholderTextColor="#6b7280"
              style={styles.input}
              keyboardType="number-pad"
            />
            <View style={styles.row}>
              <TextInput
                placeholder="MM/YY"
                placeholderTextColor="#6b7280"
                style={[styles.input, styles.inputHalf]}
                keyboardType="number-pad"
              />
              <TextInput
                placeholder="CVV"
                placeholderTextColor="#6b7280"
                style={[styles.input, styles.inputHalf]}
                keyboardType="number-pad"
                secureTextEntry
              />
            </View>
          </View>
        </View>

        {/* no payment logic just the buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>← Back to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.payButton}
            onPress={async () => {
              const order = {
                id: Date.now().toString(),
                date: new Date().toLocaleString(),
                items: items.map(i => ({
                  name: i.name,
                  qty: i.quantity
                }))
              };

              await fetch(
                "http://127.0.0.1:8000/com.gamestart/v1/order/send",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email: user.email,
                    order
                  }),
                }
              );
            }}
          >
            <Text style={styles.payText}>Confirm Payment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: DARK_BG,
  },
  header: {
    backgroundColor: CARD_BG,
    paddingTop: 50,
    paddingBottom: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: TEXT_PRIMARY,
  },
  mustSignInWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  mustSignInText: {
    fontSize: 18,
    color: TEXT_SECONDARY,
    marginBottom: 20,
    textAlign: 'center',
  },
  goSignInButton: {
    backgroundColor: ACCENT,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 20,
  },
  goSignInText: {
    color: DARK_BG,
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: BORDER,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backText: {
    color: TEXT_PRIMARY,
    fontSize: 16,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: TEXT_PRIMARY,
    marginBottom: 10,
  },
  summaryBox: {
    backgroundColor: CARD_BG,
    borderRadius: 8,
    padding: 15,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryTotalLabel: {
    fontSize: 16,
    color: TEXT_SECONDARY,
  },
  summaryTotalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: ACCENT,
  },
  methodRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  methodButton: {
    backgroundColor: BORDER,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  methodButtonActive: {
    backgroundColor: ACCENT,
  },
  methodText: {
    color: TEXT_SECONDARY,
    fontSize: 16,
  },
  methodTextActive: {
    color: DARK_BG,
    fontWeight: 'bold',
  },
  cardBox: {
    backgroundColor: CARD_BG,
    borderRadius: 8,
    padding: 15,
  },
  input: {
    backgroundColor: BORDER,
    color: TEXT_PRIMARY,
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputHalf: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  payButton: {
    backgroundColor: ACCENT,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  payText: {
    color: DARK_BG,
    fontSize: 16,
    fontWeight: 'bold',
  },
});