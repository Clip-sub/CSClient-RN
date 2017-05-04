/**
 * @flow
 */
'use strict';
import React, { PropTypes } from 'react';
import { TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import { Icon } from 'native-base';

export const CategorySearchBar = props => (
  <View elevation={1} style={styles.container}>
    <View style={styles.searchBoxWrapper}>
      <Icon name="search" style={styles.searchBoxIcon} />
      <TextInput
        underlineColorAndroid="transparent"
        returnKeyType={'search'}
        multiline={false}
        style={styles.searchBoxInput}
      />
      <TouchableOpacity onPress={() => alert('clear')}>
        <Icon name="ios-close-circle" style={styles.searchBoxIcon} />
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      onPress={() => Keyboard.dismiss()}
      style={styles.iconWrapper}
    >
      <Icon name="arrow-forward" style={styles.iconOutside} />
    </TouchableOpacity>
  </View>
);

CategorySearchBar.propTypes = {
  onChangeText: PropTypes.func,
};

const styles = {
  container: {
    zIndex: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#ffeded',
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  searchBoxWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    paddingVertical: 2,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#ff6060',
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  searchBoxInput: {
    flex: 1,
    fontSize: 14,
    lineHeight: 10,
    height: 28,
    padding: 0,
    alignSelf: 'stretch',
  },
  searchBoxIcon: {
    fontSize: 20,
    marginHorizontal: 10,
    color: '#ff6060',
  },
  iconWrapper: {
    paddingHorizontal: 10,
  },
  iconOutside: {
    color: '#ff6060',
    fontSize: 24,
  },
};
