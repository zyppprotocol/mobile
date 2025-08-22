import { Text } from '@/components/ui/text'
import { Screen } from '@/components/ui/screen'
import React, { useState, useRef, useEffect } from 'react'
import { View } from '@/components/ui/view'
import { StyleSheet, Animated, Easing, Dimensions } from 'react-native'
import { Button } from '@/components/ui/button'
import { router } from 'expo-router'

const SCREENS = [
    {
        bg: '#79e407',
        title: <>Use the chain without the <Text variant='title' style={{ color: '#79e407', fontWeight: 'bold' }}>UX</Text>.</>,
        desc: 'Transactions without QR codes, address hassles and all.',
    },
    {
        bg: '#0730e4',
        title: <>Share onchain assets without <Text variant='title' style={{ color: '#0730e4', fontWeight: 'bold' }}>internet connection</Text>.</>,
        desc: 'Send assets offline, no QR codes, no addresses.',
    },
    {
        bg: '#e40707',
        title: <>Fast, secure, and easy onboarding for everyone.</>,
        desc: 'Get started in seconds. No technical knowledge required.',
    },
]

const { width, height } = Dimensions.get('window')

const OnboardingScreen = () => {
    const [activeScreen, setActiveScreen] = useState(0)
    const fadeAnim = useRef(new Animated.Value(0)).current
    const scaleAnim = useRef(new Animated.Value(0.8)).current

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
                easing: Easing.out(Easing.exp),
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 6,
                useNativeDriver: true,
            }),
        ]).start()
        return () => {
            fadeAnim.setValue(0)
            scaleAnim.setValue(0.8)
        }
    }, [activeScreen])

    const handleNext = () => {
        if (activeScreen < SCREENS.length - 1) {
            setActiveScreen(activeScreen + 1)
        } else {
            router.push('/wallet-setup')
        }
    }

    return (
        <Screen style={styles.screen}>
            <Animated.View
                style={{
                    ...styles.rectangle,
                    backgroundColor: SCREENS[activeScreen].bg,
                    opacity: fadeAnim,
                    transform: [{ scale: scaleAnim }],
                }}
            />
            <Text variant='title' style={styles.title}>{SCREENS[activeScreen].title}</Text>
            <Text style={styles.desc}>{SCREENS[activeScreen].desc}</Text>
            <Button style={styles.button} onPress={handleNext}>
                {activeScreen < SCREENS.length - 1 ? 'Next' : 'Get Started'}
            </Button>
            <View style={styles.dotsContainer}>
                {SCREENS.map((screen, i) => (
                    <Animated.View
                        key={i}
                        style={{
                            ...styles.dot,
                            backgroundColor: i === activeScreen ? SCREENS[activeScreen].bg : '#e0e0e0',
                            transform: [{ scale: i === activeScreen ? 1.2 : 1 }],
                            opacity: i === activeScreen ? 1 : 0.5,
                        }}
                    />
                ))}
            </View>
        </Screen>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    // card removed
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

export default OnboardingScreen