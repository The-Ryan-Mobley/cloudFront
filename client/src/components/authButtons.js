import React, { useState, useEffect} from "react"
import { Link } from "gatsby"

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {HeaderButton} from "./styledComponents";

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
          <p>{props.userData.userName}</p>
            {props.userData.userId ? 
            (
                <Button>Logout</Button>
            ) : 
            (
                <Grid container direction="row" spacing={3}>
                    <Grid item>
                        <HeaderButton variant="contained"><Link to="/signup">Register</Link></HeaderButton>
                    </Grid>
                    <Grid item>
                        <HeaderButton variant="contained"><Link to="/login">Login</Link></HeaderButton>
                    </Grid>
                </Grid>
            )}

        </Grid>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthButtons);


