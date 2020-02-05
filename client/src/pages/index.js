import React, { useState, useEffect} from "react";
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/style.css";

import FrontPageProduct from "../components/frontPageProduct";

const IndexPage = () => {
  const [dailyDealProducts, setDailyDealProducts] = useState([
    {
      id:0,
      productName: "Widget",
      vendorName: "Widge Co",
      productPrice: 19.99,
      salePercent: 10,
      inventoryQuantity: 25
    },
    {
      id:1,
      productName: "Staplomatic",
      vendorName: "Office Co",
      productPrice: 9.99,
      salePercent: 25,
      inventoryQuantity: 13
    },
    {
      id:2,
      productName: "tunes",
      vendorName: "music co",
      productPrice: 14.99,
      salePercent: 35,
      inventoryQuantity: 220
    },
  ])
  return(
    <Layout>
      <Grid container>
        <SEO title="Home" />
        <h1>CLOUDFRONT</h1>
        <Grid container direction="row">
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
