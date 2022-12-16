import React from "react"

import {graphql } from "gatsby";
// import { Helmet } from "react-helmet/es/Helmet";
import Layout from '../components/layout/layout.component'
import ArtworkItem from '../components/artworkItem/artworkItem.component'

const CategoryPageTemplate = ({ data }) => {
  const { wpCategory } = data;
  const artworkData = wpCategory.artworks.nodes
  return (
   <Layout>
    <h2>{wpCategory.name}</h2>
    <div className="bodyContainer">
        {artworkData.map((artworkItems) => (

            <ArtworkItem data={artworkItems} key={artworkItems.id}/>

        ))}
    </div>
    </Layout>
  )
}

export default CategoryPageTemplate;

export const pageQuery = graphql`

query CategoryPageByType($id: String) {
   wpCategory(id: {eq: $id}) {
      id
      link
      name
      artworks {
        nodes {
          id
          title
          uri
          featuredImage {
            node {
              altText
              publicUrl
            }
          }
          categories {
            nodes {
              id
              link
              uri
              slug
              name
            }
          }
        }
      }
  }
}

`