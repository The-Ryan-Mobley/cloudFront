import React, { useState, useEffect} from "react"
import { Link } from "gatsby";
import { Router, Location, Redirect } from "@reach/router"

import Layout from "../components/layout";
import SEO from "../components/seo";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange, userAuthenticatedLoginData} from "../utils/redux/actions";

import api from "../utils/api";
import "../components/style.css";

const mapStateToProps = state => {
    return { 
      userData: state.userManipulation.userData
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      userInputChange,
      userAuthenticatedLoginData
    },
    dispatch
  );
const Login = (props) => {
  const [errorMessage, setError] = useState("");
  const [canRedirectOnSuccess, setRedirect] = useState(false);
  const userLoginCall = async () => {
    const result = await api.loginUser(props.userData);
    if(result){
      console.log(result);
      props.userAuthenticatedLoginData(result.data.displayName);
      setRedirect(true);
    } else {
      setError("Invalid Username of Password");
    }
  }
  const onTextChange = (event) => {
    props.userInputChange(event.target.name, event.target.value);
  }

    return (
        <Layout>
            <Grid container direction="row" justify="center" alignItems="center">
            <Grid item container xs={12} justify="center" alignItems="center">
                    <h1>Login</h1>
                </Grid>
                <TextField
                    id="Email"
                    label="Email"
                    defaultValue=""
                    name="email" 
                    onChange={onTextChange}
                    fullWidth={true}
                   
                />
                <TextField
                    id="password"
                    label="Password"
                    defaultValue=""
                    name="password" 
                    onChange={onTextChange}
                    fullWidth={true}
                />
            </Grid>
            <Button 
              variant="contained" 
              onClick={userLoginCall}
              disabled={!props.userData.userName.length && !props.userData.password.length}
            >Submit</Button>
            <p>{errorMessage}</p>
            {canRedirectOnSuccess ? (<Redirect noThrow to="/"/>) : (<p></p>)}
        </Layout>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);