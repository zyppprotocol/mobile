import { Screen } from '@/components/ui/screen';
import React from 'react';
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';
import { router } from 'expo-router';
import { Text } from 'react-native-svg';

const WalletSetupScreen = () => {
    return (
        <Screen style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
            <View style={{position: 'absolute', width: '100%', height: '100%'}}>
                <Text>Wallet</Text>
            </View>
        </Screen>
    );
};

export default WalletSetupScreen;