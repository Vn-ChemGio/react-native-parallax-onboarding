import * as React from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';
import { ParallaxOnboarding } from 'react-native-parallax-onboarding';
import type { PageInterface } from 'react-native-parallax-onboarding';

const data: PageInterface[] = [
  {
    title: 'Samurai',
    description:
      'A durable deck featured with a menacing face of a samurai at the center of the underside accompanied with a large red sun motif.',
    source: require('./assets/onboarding-01.png'),
  },
  {
    title: 'Reject',
    description:
      "You don't have time to consider wheter the graphic on your CSS board would be considered modernist.",
    source: require('./assets/onboarding-02.png'),
  },
  {
    title: 'Great Wave',
    description:
      'The top of the deck has the same matching graphic in black outline and embodies an overall mellow concave.',
    source: require('./assets/onboarding-03.png'),
  },
  {
    title: 'Samurai',
    description:
      'A durable deck featured with a menacing face of a samurai at the center of the underside accompanied with a large red sun motif.',
    source: require('./assets/onboarding-04.png'),
  },
  {
    title: 'Reject',
    description:
      "You don't have time to consider wheter the graphic on your CSS board would be considered modernist.",
    source: require('./assets/onboarding-05.png'),
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ParallaxOnboarding data={data} onEnd={() => {}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
