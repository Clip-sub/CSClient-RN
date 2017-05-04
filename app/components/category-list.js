'use strict';
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { Spinner, List } from 'native-base';
import { getCategoryIndex } from '../actions/actions-core';
import { CategorySearchBar } from './category-search-bar';
import { ItemCategory } from './items/item-category';

export default class CategoryList extends Component {
  static propTypes = {
    categoryItems: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.oneOf(['loading', 'error', 'loaded']),
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCategoryIndex());
  }

  renderItem = item => {
    return (
      <ItemCategory
        id={item.id}
        title={item.title}
        postCount={item.post_count}
        parentId={item.parent}
      />
    );
  };

  renderCategorySearchBar = () => <CategorySearchBar {...this.props} />;

  renderLoadingIndicator = () => <Spinner />;

  renderCategoryList(categories) {
    const { status } = this.props;

    return (
      <List
        dataArray={categories}
        keyExtractor={item => item.id}
        pageSize={20}
        renderRow={item => this.renderItem(item)}
        initialNumToRender={15}
        style={{ alignSelf: 'stretch' }}
        renderHeader={this.renderCategorySearchBar}
        renderFooter={() => (status === 'loaded' ? null : <Spinner />)}
      />
    );
  }

  render() {
    const { status, categoryItems } = this.props;

    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        {this.renderCategoryList(categoryItems)}
      </View>
    );
  }
}
