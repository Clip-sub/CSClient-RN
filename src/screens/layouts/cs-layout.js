import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export class CSLayout extends React.Component {
  render() {
    const { children, colors, scrollable, style } = this.props;

    return (
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.0, y: 1.0 }}
        colors={colors}
        style={[styles.gradient, style]}
      >
        {scrollable ? <ScrollView>{children}</ScrollView> : children}
      </LinearGradient>
    );
  }
}

CSLayout.defaultProps = {
  colors: ['#000', '#fff'],
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
