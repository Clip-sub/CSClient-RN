/**
 * @flow
 */
'use strict';
import React, {Component} from "react";

export default class SideMenu extends Component {
  styles = {
    controlPanel: {},
    controlPanelWelcome: {}
  };

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
          title={''}
          onPress={() => {this.props.closeDrawer();}}
          text="Close Drawer"/>
      </View>
    );
  }
}

SideMenu.defaultProps = {};
