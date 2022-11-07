import React from 'react'
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Shared
import Header from '../../Shared/Header';

const HistoryContainer = (props) => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
        
        <Header navigation={props.navigation}/> 

            <Text>
                History Container
            </Text>

    </SafeAreaProvider>
  )
}

export default HistoryContainer