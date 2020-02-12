import React, { useState, useEffect} from "react";
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import FrontPageProduct from "./frontPageProduct";
import api from "../utils/api";

export default function ScrollerDex () {
    const [dailyDeals, setDailyDeals] = useState({
        fullListOfDeals: [],
        currentlyDisplayedDeals: []
    });
    useEffect(()=> {
        async function queryFireBase(){
            const result = await api.getDeals();
            if(result){
            setDailyDeals({
                  ...dailyDeals,
                  fullListOfDeals: result.data,
                  currentlyDisplayedDeals: [result.data[0], result.data[1], result.data[2]]
            });
            }
        }
        queryFireBase();
      }, []);
    
    const nextItem = () => {
        const max = dailyDeals.fullListOfDeals.length-1;
        const LastItemIndex = dailyDeals.fullListOfDeals.indexOf(dailyDeals.currentlyDisplayedDeals[2]);
        if(LastItemIndex < max){
            setDailyDeals({
                ...dailyDeals,
                currentlyDisplayedDeals: [
                    dailyDeals.fullListOfDeals[LastItemIndex-1], 
                    dailyDeals.fullListOfDeals[LastItemIndex],
                    dailyDeals.fullListOfDeals[LastItemIndex+1]
                ]
            });

        } else {
            setDailyDeals({
                ...dailyDeals,
                currentlyDisplayedDeals: [
                    dailyDeals.fullListOfDeals[LastItemIndex-1], 
                    dailyDeals.fullListOfDeals[LastItemIndex],
                    dailyDeals.fullListOfDeals[0]
                ]
            });

        }

    }
    const previousItem = () => {
        const LastItemIndex = dailyDeals.currentlyDisplayedDeals;
        if(LastItemIndex > 0){
            setDailyDeals({
                ...dailyDeals,
                currentlyDisplayedDeals: [
                    dailyDeals.fullListOfDeals[LastItemIndex-2], 
                    dailyDeals.fullListOfDeals[LastItemIndex-1],
                    dailyDeals.fullListOfDeals[LastItemIndex]
                ]
            });

        } else {
            setDailyDeals({
                ...dailyDeals,
                currentlyDisplayedDeals: [
                    dailyDeals.fullListOfDeals[dailyDeals.fullListOfDeals.length-1], 
                    dailyDeals.fullListOfDeals[LastItemIndex],
                    dailyDeals.fullListOfDeals[0]
                ]
            });

        }

    }
    
    return (
        <Grid container direction = "row" spacing={8}>
            <Grid item xs={1}>
                <Button 
                    variant="contained"
                    onClick={previousItem}
                >
                    {"<"}
                </Button>
            </Grid>
                {dailyDeals.currentlyDisplayedDeals.map((product, index) => (
                    <Grid item xs={3}>
                        <FrontPageProduct key={index} productData={product}/>
                    </Grid>
                ))}
            <Grid item xs={1}>
                <Button variant="contained" onClick={nextItem}>{">"}</Button>
            </Grid>
        </Grid>
    )
}