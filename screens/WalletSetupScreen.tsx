import { Screen } from '@/components/ui/screen';
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';
import { router } from 'expo-router';
import { Text } from '@/components/ui/text';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import { Image } from 'expo-image';

const { width, height } = Dimensions.get('window')

const WalletSetupScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }),
        ]).start();
    }, [fadeAnim, scaleAnim]);

    return (
        <Screen style={styles.screen}>
            <Animated.View
                style={{
                    ...styles.rectangle,
                    backgroundColor: '#79e407',
                    opacity: fadeAnim,
                    transform: [{ scale: scaleAnim }],
                    overflow: 'hidden',
                    borderWidth: 2,
                    borderColor: '#2e7d32',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.18,
                    shadowRadius: 8,
                    elevation: 6,
                }}
            >
                <Image
                    source={require('@/assets/images/wallet2.svg')}
                    style={{
                        width: '80%',
                        height: '80%',
                        alignSelf: 'center',
                        marginTop: '10%',
                        borderRadius: 24,
                    }}
                    contentFit="contain"
                />
            </Animated.View>
            <Text variant='title' style={styles.title}>Setup wallet</Text>
            <Text style={styles.desc}>Setup your onhain presence.</Text>
            <Button style={styles.button} textStyle={{
                fontSize: 16,
                fontWeight: 'bold',
            }} onPress={() => { }}>
                Create a wallet
            </Button>
            <Button variant='ghost' style={styles.button} textStyle={{
                fontSize: 13, marginTop: -20           }} onPress={() => { }}>
                Already have a wallet? Import.
            </Button>
            <Text style={{
                opacity: 0.5,
                top: 40,
                fontWeight: '500',
            }} onPress={()=> router.push("/(tabs)")}>Skip for now</Text>
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    rectangle: {
        width: width * 0.85,
        height: height * 0.50,
        borderRadius: 32,
        marginBottom: 24,
        marginTop: 8,
        alignSelf: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 16,
        fontFamily: 'Manrope_400Regular',
        marginBottom: 12,
        lineHeight: 34,
        letterSpacing: -1,
        alignSelf: 'center',
        width: width * 0.85,
    },
    desc: {
        fontSize: 16, textAlign: 'center',
        marginBottom: 32,
        marginHorizontal: 12,
        lineHeight: 22,
        alignSelf: 'center',
        width: width * 0.85,
    },
    button: {
        marginTop: 12,
        width: width * 0.7,
        alignSelf: 'center',
        borderRadius: 24,
        paddingVertical: 14,
    },
    dotsContainer: {
        position: 'absolute',
        bottom: 38,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
    },
    dot: {
        width: 9,
        height: 9,
        borderRadius: 7,
        marginHorizontal: 4,
    },
})

export default WalletSetupScreen;