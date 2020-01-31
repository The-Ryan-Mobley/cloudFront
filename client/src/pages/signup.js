import React, { useState, useEffect} from "react"
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

const Signup = (props) => {
    onTextChange = (event) => {
        props.characterInputChange(event.target.name, event.target.value); 
    }
    return (
        <Layout>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item container xs={12} justify="center" alignItems="center">
                    <h1>Sign Up!</h1>
                </Grid>
                <TextField
                    id="userName"
                    label="User Name"
                    defaultValue=""
                    name="userName" 
                    onChange={this.onTextChange}
                    fullWidth={true}
                   
                />
                <TextField
                    id="password"
                    label="Password"
                    defaultValue=""
                    name="password" 
                    onChange={this.onTextChange}
                    fullWidth={true}
                />
                <TextField
                    id="confirmPassword"
                    label="Confirm Password"
                    defaultValue=""
                    name="confirmPassword" 
                    onChange={this.onTextChange}
                    fullWidth={true}
                />

            </Grid>
        </Layout>
    )

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup);