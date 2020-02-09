import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange} from "../utils/redux/actions";

import Grid from '@material-ui/core/Grid';

import AuthButtons from "./authButtons";

const mapStateToProps = state => {
  return { 
    userData: state.userManipulation.userData
   };
};

const mapDispatchToProps = dispatch =>
bindActionCreators(
  {
    userInputChange
  },
  dispatch
);
const Header = ({ siteTitle}) => (
  
  <header
    style={{
      background: `#dbfeff`,
      marginBottom: `1.45rem`,
      boxShadow: "10px 10px 14px -10px #000000",
      fontFamily: "'Roboto Condensed', sans-serif"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Grid container direction="row-reverse">
      <AuthButtons/>
      </Grid>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);