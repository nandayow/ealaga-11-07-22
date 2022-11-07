import React from 'react'
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Shared
import Header from '../../Shared/Header';

const DonationsContainer = (props) => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
        
        <Header navigation={props.navigation}/> 

            <Text>
                Donations Container
            </Text>

    </SafeAreaProvider>
  )
}

export default DonationsContainer