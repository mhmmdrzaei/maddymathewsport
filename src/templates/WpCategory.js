import React from "react"
import {Link} from "@chakra-ui/react";
import {graphql, Link as GatsbyLink} from "gatsby";
// import { Helmet } from "react-helmet/es/Helmet";


const CategoryPageTemplate = ({ data }) => {
  const { wpCategory } = data;
  console.log(data);
  return (
    <>
    <h2>{wpCategory.name}</h2>
    <div className="bodyContainer">
        {wpCategory.artworks.nodes.map(({ id, title, uri ,featuredImage,categories}) => (

          <div className="listingEach" key={id}>
            <img src={featuredImage.node.publicUrl} alt={featuredImage.node.altText} />
            <div className="listingDetails">
            <Link as={GatsbyLink} to={uri}>
              <h2>{title}</h2>
             </Link> 
             <div className="categories">
               {categories.nodes.map(({link, uri, name,id})=>{
                return (
                  <ul>
                    <li>
                    <Link as={GatsbyLink} to={link} key={id}>
                    <span>
                      {name}
                    </span>
                    </Link>
                    </li>
                  </ul>
                  )
               })}
             </div>
            </div>
         
           </div>
        ))}
    </div>
    </>
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