import { Screen } from '@/components/ui/screen';
import React from 'react';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { StyleSheet } from 'react-native';
import { View } from '@/components/ui/view';
import { router } from 'expo-router';

const ImportWalletScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.glassCard}>
                <Text variant='title' style={styles.title}>
                    Import Wallet
                </Text>
                <Text style={styles.desc}>
                    Enter your seed phrase or private key to import your wallet.
                </Text>
                {/* Input fields for seed phrase/private key can go here */}
                <Button style={[styles.button, styles.green]} onPress={() => router.push('/')}>
                    <Text style={styles.buttonText}>Import & Go Home</Text>
                </Button>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(245, 247, 250, 0.9)',
    },
    glassCard: {
        width: '92%',
        padding: 32,
        borderRadius: 32,
        backgroundColor: 'rgba(255,255,255,0.25)',
        shadowColor: '#0730e4',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 24,
        borderWidth: 1.5,
        borderColor: 'rgba(7,48,228,0.18)',
        backdropFilter: 'blur(16px)',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0730e4',
        marginBottom: 32,
        textAlign: 'center',
        letterSpacing: -1,
    },
    desc: {
        fontSize: 16,
        color: '#222',
        textAlign: 'center',
        marginBottom: 32,
        marginHorizontal: 12,
        lineHeight: 22,
        alignSelf: 'center',
        width: '100%',
    },
    button: {
        width: '100%',
        borderRadius: 24,
        paddingVertical: 16,
        marginBottom: 18,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#0730e4',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.10,
        shadowRadius: 12,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    green: {
        backgroundColor: '#79e407',
    },
});

export default ImportWalletScreen;
