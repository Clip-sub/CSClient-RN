/**
 * @flow
 */
'use strict';
import React, {Component} from "react";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          Control Panel
        </Text>
        <Button
          onPress={() => {this.props.closeDrawer();}}
          text="Close Drawer"/>
      </View>
    );
  }
}

SideMenu.defaultProps = {};
