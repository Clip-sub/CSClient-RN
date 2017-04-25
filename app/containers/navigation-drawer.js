/**
 * @flow
 */
"use strict";
import { bindActionCreators, connect } from "react-redux";
import HomeDrawerNavigator from "../navigations/drawer-navigator";

/**
 * If ownProps is specified as a second argument, its value will be the props passed to your component,
 * and mapStateToProps will be additionally re-invoked whenever the component receives new props.
 *
 * The result of mapStateToProps must be a plain object, which will be merged into component's props.
 */
const mapStateToProps = state => {
  const {posts, categories} = state;
  return {
    posts,
    categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeDrawerNavigator);
