import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Grid from '@material-ui/core/Grid';

import AuthButtons from "./authButtons";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#dbfeff`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Grid container direction="row-reverse">
      <AuthButtons/>
      </Grid>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
