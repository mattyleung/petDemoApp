import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, images, SIZES } from '../constants'

const Onboarding = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flex: 0.6, flexDirection: 'column', alignItems: 'center' }}>
                <Image
                    source={images.dogBanner}
                    resizeMode="contain"
                    style={{

                        width: '80%',
                        height: '80%'
                    }}
                />
            </View>
            <View style={{ flex: 0.4, flexDirection: 'column', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2 }}>
                        Online Pet Sale - DEMO
                    </Text>
                    <Text style={{ color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center', ...FONTS.body3 }}>
                        This is a react-native demo that related to an online pet selling service. Can
                        you see this lovely dog above? :D
                    </Text>
                </View>
                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={() => navigation.navigate("Home")}
                >

                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#46aeff', '#5884ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Start</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5

    }
})

export default Onboarding;