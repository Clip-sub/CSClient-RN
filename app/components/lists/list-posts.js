/**
 * @flow
 * @beta
 */
'use strict';
import React, {Component, PropTypes} from "react";
import {View, ListView} from "react-native";
import {List, Content} from "native-base";

export default class ListPosts extends Component {
  static defaultProps = {
    mode: 'list'
  }

  static propTypes = {
    mode: PropTypes.oneOf(['list', 'grid', 'card']),
  }

  constructor(props) {
    super(props);
    this.ds = List.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    this.setState({dataSource: this.ds.cloneWithRows(this.props.result.items)});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({dataSource: this.ds.cloneWithRows(nextProps.result.items)});
  }

  render () {
    return (
      <Content>
        <List
          dataArray={this.props.posts}/>
      </Content>
    );
  }
}