import React from "react"
import styled from "@emotion/styled/macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {useStaticQuery, graphql} from "gatsby"
import Number from "../components/Number";
const Wrapper = styled.div `
  direction: rtl;
  text-align: right;

`;
const List = styled.h1 `
  color: inherit;
  margin-bottom: 5px;
  padding: 12px 20px;
  line-height: 65px;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql `query{
  allJawshanJson{
    nodes{
      id
      value
    }
  }
}`)
  return (
    <Layout dark={false}>
      <SEO title="Home"/>
      <Wrapper>
        {data
          .allJawshanJson
          .nodes
          .map(({
            value,
            id
          }, index) => {
            return <List key={id}>
              <Number cnt={index}/> {value}
            </List>

          })}
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
