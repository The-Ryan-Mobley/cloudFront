import React, { useState, useEffect} from "react"
import { Link } from "gatsby";
import { navigate } from '@reach/router';

import Layout from "../components/layout";
import SEO from "../components/seo";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange} from "../utils/redux/actions";

import api from "../utils/api";

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

const Signup = (props) => {
    const [errorMessage, setMessage] = useState("");
    const [canSendUserData, setFlag] = useState(false);
    const onTextChange = (event) => {
        props.userInputChange(event.target.name, event.target.value);
        if(props.userData.password === props.userData.confirmPassword){
            setFlag(true);
        }
        console.log(props.userData);
    }
    const sendNewUserData = async () => {
        const result = await api.newUser(props.userData);
        if(result){
            console.log("yo");
            navigate("/index");
        }

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
                    onChange={onTextChange}
                    fullWidth={true}
                   
                />
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
                <TextField
                    id="confirmPassword"
                    label="Confirm Password"
                    defaultValue=""
                    name="confirmPassword" 
                    onChange={onTextChange}
                    fullWidth={true}
                />
                <Button 
                variant="contained" 
                onClick={sendNewUserData}
                disabled={!props.userData.userName.length && !canSendUserData}
                >Submit</Button>

            </Grid>
        </Layout>
    )

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup);