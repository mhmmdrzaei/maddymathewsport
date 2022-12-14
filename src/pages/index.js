import * as React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import { Link } from "@chakra-ui/react";


// export default function Header() {
//   const data = useStaticQuery(graphql`
//     query HeaderQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <header>
//       <h1>{data.site.siteMetadata.title}</h1>
//     </header>
//   )
// }


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

  );
};

export default HomePage;
