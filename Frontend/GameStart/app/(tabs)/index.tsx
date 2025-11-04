import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';


export default function App() {
  const [showSignIn, setShowSignIn] = useState(false);

  const images = new Map([
    ['videoGames', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg'],
    ['consoles', 'https://www.billboard.com/wp-content/uploads/2023/07/Marvel-s-Spider-Man-2-Limited-Edition-cr-Sony-billboard-1548.png?w=942&h=628&crop=1'],
    ['accessories', 'https://assets.xboxservices.com/assets/59/10/5910d098-6cb4-459e-a3bf-10972df27ac7.jpg?n=Xbox-Wireless-Controller_Image-Hero_1084_Blue_1920x831_01.jpg'],
  ]);

  // if (showSignIn) {
  //   return <SignInScreen onBack={() => setShowSignIn(false)} />;
  // }

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <View style={styles.navbar}>
          <Text style={styles.logo}>GameStart</Text>
          
          <TouchableOpacity style={styles.signInButton} onPress={() => router.push('/signIn')}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartText}>Cart (0)</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder="Search games, consoles, accessories..."
          placeholderTextColor="#ccc"
        />
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollArea}>
        <Text style={styles.title}>Gear up. Game on.</Text>
        <Text style={styles.subtitle}>Gamers Paradise</Text>
        <View style={styles.cardContainer}>
          {[
            { title: 'Video Games', key: 'videoGames' },
            { title: 'Consoles', key: 'consoles' },
            { title: 'Accessories', key: 'accessories' },
          ].map((item) => (
            <TouchableOpacity style={styles.card} key={item.key}>
              <Image source={{ uri: images.get(item.key) }} style={styles.image} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardText}>Tap to explore</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#000',
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#111',
    width: '95%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  logo: {
    color: '#00ffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  signInButton: {
    marginHorizontal: 5,
  },
  signInText: {
    color: '#00ffff',
    fontWeight: '600',
    fontSize: 14,
  },
  cartButton: {
    backgroundColor: '#00ffff',
    borderRadius: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  cartText: {
    color: '#000',
    fontWeight: 'bold',
  },
  searchBar: {
    width: '95%',
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginTop: 10,
  },
  scrollArea: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    color: '#00ffff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  subtitle: {
    color: '#ccc',
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#111',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    width: '90%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
  },
  cardTitle: {
    color: '#00ffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardText: {
    color: '#aaa',
    marginBottom: 10,
  },
});

// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
