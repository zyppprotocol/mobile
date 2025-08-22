import { forwardRef } from 'react';
import { View as RNView, type ViewProps, SafeAreaView, Platform } from 'react-native';

export const Screen = forwardRef<RNView, ViewProps>(
  ({ style, ...otherProps }, ref) => {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'transparent' }}
      >
        <RNView
          ref={ref}
          style={[{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            paddingTop: Platform.OS === 'android' ? 24 : 0,
            paddingBottom: 16,
            paddingHorizontal: 16,
          }, style]}
          {...otherProps}
        />
      </SafeAreaView>
    );
  }
);
