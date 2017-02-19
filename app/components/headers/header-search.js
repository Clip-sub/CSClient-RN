/**
 * @flow
 */
'use strict';
import React, {Component, PropTypes} from "react";
import {Header, Item, Icon, Input, Button, Text} from "native-base";

export default class HeaderSearch extends Component {
  constructor(props) {
    super(props);
  }

  _handleKeywordChange(event) {
    this.props.setSearchKeyword(event.nativeEvent.text.trim());
  }

  _handleSubmit(event) {
    this.props.runSearch(this.props.keyword);
  }

  render() {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="search"/>
          <Input
            value={this.props.keyword}
            onChange={this._handleKeywordChange.bind(this)}
            placeholder="Search"/>
          <Icon active name="people"/>
        </Item>
        <Button
          title={''}
          onPress={this._handleSubmit.bind(this)}
          transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    );
  }
}

HeaderSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  isSearching: PropTypes.bool.isRequired,
  setSearchKeyword: PropTypes.func.isRequired,
  runSearch: PropTypes.func.isRequired
};
