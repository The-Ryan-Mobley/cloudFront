import React, { useState, useEffect} from "react";
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button';
import { Router, Location, Redirect } from "@reach/router"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {siteSearchInput} from "../utils/redux/actions";

const mapStateToProps = state => {
    return { 
      siteControls: state.siteVariableManipulation.siteControls
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      siteSearchInput
    },
    dispatch
  );

const SearchBar = (props) => {
    const inputChangeHandler = (event) => {

    }
    const initiateSearchQuery = () => {

    }
    return (
        <Grid container direction="row">
            <Grid item xs={10}>
                <TextField
                    id="standard-multiline-static"
                    label="Search"
                    defaultValue=""
                    fullWidth={true}
                    margin="normal"
                    variant="filled"
                    name="SearchTerms"
                    onChange={inputChangeHandler}
                />
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained">Search</Button>
            </Grid>
        </Grid>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar);