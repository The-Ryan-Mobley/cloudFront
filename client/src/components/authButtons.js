import React, { useState, useEffect} from "react"
import { Link } from "gatsby"

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange} from "../utils/redux/actions";

const mapStateToProps = state => {
    return { 
      userData: state.formManipulation.userData
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      userInputChange
    },
    dispatch
  );

const AuthButtons = (props) => {
    return (
        <Grid>

        </Grid>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthButtons);


