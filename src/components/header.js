import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled/macro"
import Toggle from 'react-toggle'

const HeaderTag = styled.header `
  background: teal;
  margin-bottom: 1.45rem;
  display:flex;
  flex-flow:1;
  color: inherit;
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  flex-direction: row;
`;
const Right = styled.div `
  display:flex;
  flex-grow:1;
  flex-direction: row-reverse;
`;
const Left = styled.div `
  display:flex;
  flex-grow:1;
  align-items: center;
  flex-direction: row;
`;
const Header = ({siteTitle, checked}) => (
  <HeaderTag>

    <Left>
      <Toggle
        icons={{
        unchecked: "🌝",
        checked: "🌚"
      }}
        className='toggleMe'
        defaultChecked={false}
        onChange={(e) => checked(e.target.checked)}/>
    </Left>
    <Right>
      <h1>
        <Link
          to="/"
          style={{
          color: `white`,
          textDecoration: `none`
        }}>
          {siteTitle}
        </Link>
      </h1>
    </Right>
  </HeaderTag>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
