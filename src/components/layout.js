/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"
import styled from "@emotion/styled/macro"
import Header from "./header"
import "./layout.css"
import "react-toggle/style.css"

const Anchor = styled.a `
  display: inline-block;
  margin: 0 12px;
`;
const Layout = ({children}) => {
  const [dark,
    setDark] = useState(false);

  return (
    <StaticQuery
      query={graphql ` query SiteTitleQuery { site { siteMetadata { title } } } `}
      render={data => (
      <div
        style={{
        backgroundColor: dark
          ? `black`
          : `#F2F2F2`,
        color: dark
          ? `#E3E6DF`
          : `#00524D`
      }}>
        <Header checked={setDark} siteTitle={data.site.siteMetadata.title}/>
        <div
          style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}>
          <main>{children}</main>
          <footer style={{
            fontFamily: "Tahoma"
          }}>
            © {new Date().getFullYear()}
            {" "}
            Built with:
            <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor>
            <Anchor href="https://www.netlify.come">Netlify</Anchor>
            <Anchor href="https://github.com/ALYREZA/jawshan">Source Code</Anchor>
          </footer>
        </div>
      </div>
    )}/>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
