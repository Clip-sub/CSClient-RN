import React, {Component} from "react";
import {ScrollView, Image, BackAndroid} from "react-native";
import {DrawerStyles} from "./styles/styles-drawer";

export default class DrawerContent extends Component {
  static contextTypes = {
    drawer: React.PropTypes.object
  };

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this._toggleDrawer();
        return true;
      }
      return false;
    })
  }

  _toggleDrawer() {
    this.context.drawer.toggle();
  }

  render() {
    return (
      <ScrollView style={DrawerStyles.container}>
        {/* Drawer content here */}
      </ScrollView>
    );
  }
}
