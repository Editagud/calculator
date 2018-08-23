import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />

    <div>{children()}</div>
    <style global jsx>
      {`
  @font-face  { 
font-family: "Hind";
font-weight: bold;
src: url(${require('..//..//..//learning/learning-site/Hind/Hind-Bold.ttf')});
  format("truetype"); }
  @font-face  { 
    font-family: "Montserrat";
    font-weight: regular;
    src: url(${require('..//..//..//learning/learning-site/Montserrat/Montserrat-Regular.ttf')});
      format("truetype"); }
`}
    </style>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
