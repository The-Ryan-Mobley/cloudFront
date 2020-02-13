import React, { useState, useEffect} from "react";
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import FrontPageProduct from "./frontPageProduct";


export default function ScrollerDex (props) {
    const [dailyDeals, setDailyDeals] = useState({
        fullListOfDeals: [], //stores full array of products
        currentlyDisplayedDeals: [] //stores only the 3 products currently viewed will change as users scroll
    });
    useEffect(()=> {
        setDailyDeals({
              ...dailyDeals,
              fullListOfDeals: props.products,
                currentlyDisplayedDeals: [props.products[0], props.products[1], props.products[2]]
        });
      }, []);
    
    const nextItem = () => {
        //moves displayed deals over by one when user clicks arrow
        const max = dailyDeals.fullListOfDeals.length-1; //length of product array
        const LastItemIndex = dailyDeals.fullListOfDeals.indexOf(dailyDeals.currentlyDisplayedDeals[2]); //index of last displayed item
        
        if(LastItemIndex === 0){ //when the user iterates to the end of the array it needs to loop from the beginning
            setDailyDeals({
                ...dailyDeals,
                currentlyDisplayedDeals: [
                    dailyDeals.fullListOfDeals[max], 
                    dailyDeals.fullListOfDeals[0],
                    dailyDeals.fullListOfDeals[1]
                ]
            });

        }
        else if(LastItemIndex < max){ //for normal iteration across full product array by 1
            setDailyDeals({
                ...dailyDeals,
                currentlyDisplayedDeals: [
                    dailyDeals.fullListOfDeals[LastItemIndex-1], 
                    dailyDeals.fullListOfDeals[LastItemIndex],
                    dailyDeals.fullListOfDeals[LastItemIndex+1]
                ]
            });

        } else if (LastItemIndex === max) { /*when the user reaches the end of the full product array 
            the scroller needs to start over from index 0 while still displaying last products*/
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
    const previousItem = () => { //needs to progress backwards across product array
        const max = dailyDeals.fullListOfDeals.length-1; //same as with next item
        const FirstItemIndex = dailyDeals.fullListOfDeals.indexOf(dailyDeals.currentlyDisplayedDeals[0]); /*since we are iterating backwards we need the
        correlating index from the first item in the display array*/
        if((FirstItemIndex > 0) && (FirstItemIndex !== max)){ //normal iteration, since iterating backwards needs to avoid max
            setDailyDeals({
                ...dailyDeals,
                currentlyDisplayedDeals: [
                    dailyDeals.fullListOfDeals[FirstItemIndex-1], 
                    dailyDeals.fullListOfDeals[FirstItemIndex],
                    dailyDeals.fullListOfDeals[FirstItemIndex+1]
                ]
            });

        } else if(FirstItemIndex === 0){ //when we reach index 0 we need to move to the end of the array
            setDailyDeals({
                ...dailyDeals,
                currentlyDisplayedDeals: [
                    dailyDeals.fullListOfDeals[max], 
                    dailyDeals.fullListOfDeals[0],
                    dailyDeals.fullListOfDeals[1]
                ]
            });

        } else if(FirstItemIndex === max){ //when the array reaches the end and needs to iterate backwards but still show index 0
            setDailyDeals({
                ...dailyDeals,
                currentlyDisplayedDeals: [
                    dailyDeals.fullListOfDeals[max-1], 
                    dailyDeals.fullListOfDeals[max],
                    dailyDeals.fullListOfDeals[0]
                ]
            });

        }

    }
    
    return (
        <Grid container direction = "row" spacing={5}>
            <Grid item xs={1}>
                <Button variant="contained" onClick={previousItem}>{"<"}</Button>
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