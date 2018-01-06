import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const ButtonGradient = ({
  title,
  variant = 'warm',
  style,
  titleStyle,
}) => {
  const getVariant = () => {
    switch (variant) {
      case 'cool':
        return ['#52cedb', '#57b7d2'];
      case 'warm':
        return ['#f35e8b', '#fc9b7c'];
      default:
        return ['#f35e8b', '#fc9b7c'];
    }
  };

  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      colors={getVariant()}
      style={[styles.linearGradient, style]}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

ButtonGradient.defaultProps = {
  title: '',
};
