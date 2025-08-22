import { forwardRef } from 'react';
import { ScrollView as RNScrollView, type ScrollViewProps, SafeAreaView, Platform } from 'react-native';

export const ScrollView = forwardRef<RNScrollView, ScrollViewProps>(
  ({ style, ...otherProps }, ref) => {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'transparent' }}
      >
        <RNScrollView
          ref={ref}
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            paddingTop: Platform.OS === 'android' ? 24 : 0,
            paddingBottom: 16,
            paddingHorizontal: 16,
            ...(typeof style === 'object' && style !== null ? style : {}),
          }}
          contentContainerStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          {...otherProps}
        />
      </SafeAreaView>
    );
  }
);
