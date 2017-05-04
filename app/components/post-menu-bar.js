/**
 * @flow
 */
'use strict';
import React, { PropTypes } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';

export const PostMenuBar = props => {
  const { dispatch } = props;

  return (
    <View elevation={1} style={styles.container}>
      <View style={styles.searchBoxWrapper}>
        <Icon name="search" style={styles.searchBoxIcon} />
        <TextInput
          underlineColorAndroid="transparent"
          returnKeyType={'search'}
          multiline={false}
          style={styles.searchBoxInput}
        />
        <Icon name="ios-close-circle" style={styles.searchBoxIcon} />
      </View>
      <TouchableOpacity style={styles.iconWrapper}>
        <Icon name="ios-list-outline" style={styles.iconOutside} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconWrapper}>
        <Icon name="grid" style={styles.iconOutside} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconWrapper}>
        <Icon name="ios-images-outline" style={styles.iconOutside} />
      </TouchableOpacity>
    </View>
  );
};

PostMenuBar.propTypes = {
  onChangeText: PropTypes.func,
  onChangeDisplayMode: PropTypes.func,
};

const styles = {
  container: {
    zIndex: -2,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#424242',
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  searchBoxWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    paddingVertical: 2,
    borderRadius: 50,
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
  },
  iconWrapper: {
    paddingHorizontal: 10,
  },
  iconOutside: {
    color: '#fff',
    fontSize: 24,
  },
};
