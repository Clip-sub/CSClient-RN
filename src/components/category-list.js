/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import { Spinner, List } from 'native-base';
import { CategorySearchBar } from './category-search-bar';
import { ItemCategory } from './items/item-category';

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredCategories: [],
    };
  }

  componentDidMount() {
    const { getCategories } = this.props;
    const { list } = this.props.categories;
    if (!list || list.length <= 0) {
      getCategories();
    }
  }

  onRedirect = () => {
    const { getPosts, switchHomeTab, posts } = this.props;

    getPosts(1, posts.args);
    switchHomeTab(1);
  };

  onItemPress = (categoryId: number) => {
    const { clearPosts, setPostsArgs } = this.props;

    setPostsArgs({ categories: categoryId });
    clearPosts();
    setTimeout(() => {
      this.onRedirect();
    }, 400);
  };

  renderItem = item => {
    return (
      <ItemCategory
        id={item.id}
        title={item.title}
        postCount={item.post_count}
        parentId={item.parent}
        onPress={this.onItemPress}
      />
    );
  };

  renderCategorySearchBar = () => (
    <CategorySearchBar
      onChangeText={text => this.props.filterCategories(text)}
      {...this.props}
    />
  );

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
        style={{ alignSelf: 'stretch', backgroundColor: '#fff' }}
        renderHeader={this.renderCategorySearchBar}
        renderFooter={() =>
          status === 'loaded' ? null : <Spinner color="red" />}
      />
    );
  }

  render() {
    const { categories } = this.props;

    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          alignItems: 'center',
        }}
      >
        {this.renderCategoryList(categories.listFiltered)}
      </View>
    );
  }
}
