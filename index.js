import { NativeModules, Platform } from 'react-native'

const { RNStaticSafeAreaInsets } = NativeModules

if (Platform.OS === 'ios') {
    if (RNStaticSafeAreaInsets.safeAreaInsetsTop === 0) {
        RNStaticSafeAreaInsets.safeAreaInsetsTop = 20
    }
}

export default RNStaticSafeAreaInsets
