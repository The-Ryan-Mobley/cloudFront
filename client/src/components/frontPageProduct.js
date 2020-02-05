import React, { useState, useEffect} from "react";
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

export default function FrontPageProduct (props) {
    const [currentPrice, setPrice] = useState(0.00);
    useEffect(()=>{
        if(props.productData.salePercent !== 0){
            // let calcPrice = props.productData.productPrice - (props.productData.productPrice * (props.productData.salePercent / 100))
            // setPrice(calcPrice);
        }
    },[])
    return (
        <Grid container>
            <Grid item container xs={12} direction="column" justify="center" alignItems="center">
                <h2>{props.productData.productName}</h2>
                <h1 className="placeholder">IMAGES WILL GO HERE</h1>
            </Grid>
            <Grid item xs={12}>
                <p>product by: {props.productData.vendorName}</p>
            </Grid>
            <Grid item container xs={12} direction="row" justify="center" alignItems="center">
                <h2>${props.productData.productPrice}</h2>
            </Grid>
            <Grid container direction="row-reverse">
                <Button variant="contained">Details</Button>
                <p>only {props.productData.inventoryQuantity} left!</p>
            </Grid>


        </Grid>
    )
}