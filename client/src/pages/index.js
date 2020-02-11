import React, { useState, useEffect} from "react";
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/style.css";

import FrontPageProduct from "../components/frontPageProduct";
import api from "../utils/api";

const IndexPage = () => {
  const [dailyDealProducts, setDailyDealProducts] = useState([]);
  useEffect(async ()=> {
    const result = await api.getDeals();
    if(result){
      setDailyDealProducts(result.data);
    }
  }, [])
  return(
    <Layout>
      <Grid container>
        <SEO title="Home" />
        <h1>CLOUDFRONT</h1>
        <Grid container direction="row" spacing={2}>
          {dailyDealProducts.map(item => (
            <Grid item xs={4}>
              <FrontPageProduct key={item.id} productData={item}/>
            </Grid>
          ))}
        </Grid>

        <Link to="/page-2/">Go to page 2</Link>
      </Grid>
    </Layout>
  )
}

export default IndexPage
