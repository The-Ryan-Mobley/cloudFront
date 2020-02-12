import React, { useState, useEffect} from "react";
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/style.css";

import ScrollerDex from "../components/scrollerDex";
import FrontPageProduct from "../components/frontPageProduct";
import api from "../utils/api";

const IndexPage = () => {
  // const [dailyDealProducts, setDailyDealProducts] = useState([]);
  // useEffect(async ()=> {
  //   const result = await api.getDeals();
  //   if(result){
  //     setDailyDealProducts(result.data);
  //   }
  // }, [])
  return(
    <Layout>
      <Grid container>
        <SEO title="Home" />
        <h1>CLOUDFRONT</h1>
        <ScrollerDex/>

        <Link to="/page-2/">Go to page 2</Link>
      </Grid>
    </Layout>
  )
}

export default IndexPage
