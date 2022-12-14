import * as React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import { Link } from "@chakra-ui/react";
import Layout from '../components/layout/layout.component'



const HomePage = () => {
  const data = useStaticQuery(graphql`
    {
      allWpArtwork {

         nodes {
          featuredImage {
            node {
              altText
              publicUrl
            }
          }
          id
          uri
          title
          categories {
             nodes {
               link
               uri
               name
             }
           }
         }

        }
        
    }

  `);




  const { allWpArtwork } = data;
// console.log(data);
  return (
    <Layout>
      <div className="bodyContainer">
          {allWpArtwork.nodes.map(({ id, title, uri ,featuredImage,categories}) => (

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
      
    </Layout>
    

  );
};

export default HomePage;
