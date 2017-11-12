/**
 * @flow
 */
'use strict';
import React, { PropTypes } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';
import { clearPosts, getPosts } from '../actions/actions-content';
import { switchHomeTab } from '../actions/actions-navigation';
import { setViewMode } from '../actions/actions-config';

export const PostMenuBar = props => {
  const { dispatch, viewMode } = props;

  const onSubmitSearch = keyword => {
    //dispatch(clearPosts());
    //dispatch(switchHomeTab(1));
    //dispatch(getPosts(1, 10, { s: keyword }));
  };

  return (
    <View elevation={1} style={styles.container}>
      <View style={styles.searchBoxWrapper}>
        <Icon name="search" style={styles.searchBoxIcon} />
        <TextInput
          underlineColorAndroid="transparent"
          returnKeyType={'search'}
          multiline={false}
          style={styles.searchBoxInput}
          onSubmitEditing={event => onSubmitSearch(event.nativeEvent.text)}
        />
        <Icon name="ios-close-circle" style={styles.searchBoxIcon} />
      </View>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() =>
          viewMode !== 'list' ? dispatch(setViewMode('list')) : null}
      >
        <Icon active name="ios-images-outline" style={styles.iconOutside} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() =>
          viewMode !== 'grid' ? dispatch(setViewMode('grid')) : null}
      >
        <Icon name="grid" style={styles.iconOutside} />
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
