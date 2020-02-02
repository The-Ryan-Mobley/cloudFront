import React, { useState, useEffect} from "react"
import { Link } from "gatsby"

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange} from "../utils/redux/actions";

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

const AuthButtons = (props) => {
    return (
        <Grid>
            {props.userData.userId ? 
            (
                <Button>Logout</Button>
            ) : 
            (
                <Grid container direction="row" spacing={1}>
                    <Button><Link to="/signup">Register</Link></Button>
                    <Button><Link to="/login">Login</Link></Button>
                </Grid>
            )}

        </Grid>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthButtons);


