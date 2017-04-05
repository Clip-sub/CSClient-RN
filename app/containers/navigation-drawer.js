import React, {Component, PropTypes} from "react";
import {Drawer} from "native-base";
import DrawerContent from "./drawer-content";
import {connect} from "react-redux";
import Styles from "./styles/styles-drawer";

class NavigationDrawer extends Component {
  static propTypes = {
    navigationState: PropTypes.object
  };

  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <Drawer
        ref='navigation'
        type='displace'
        open={state.open}
        onOpen={() => {
        }}
        onClose={() => {
        }}
        content={<DrawerContent/>}
        styles={Styles}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: {opacity: Math.max(0.54, 1 - ratio)}
        })}>
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer);
