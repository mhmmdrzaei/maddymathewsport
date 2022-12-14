import React from "react"
import {Link} from "@chakra-ui/react";
import {graphql, Link as GatsbyLink} from "gatsby";
// import { Helmet } from "react-helmet/es/Helmet";

const WpPost = ({ data }) => {
    const { wpArtwork } = data;
    const flex = wpArtwork.artworksfields.artworksContent || []
    const featured = wpArtwork.featuredImage
    return(

        <div className="container" key={wpArtwork.contentType.node.id} >
            <div className="projectInfo">
                <h2>
                    {wpArtwork.title}
                </h2>
                <div className="projectDetails" 
                dangerouslySetInnerHTML={{ __html: wpArtwork.artworksfields.artworkDescription }} />
                <div className="categories">
                  {wpArtwork.categories.nodes.map(({link, uri, name,id})=>{
                   return (
                     <ul>
                       <li key={id} >
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
                <Link as={GatsbyLink} to="/">{`<< Back to Blog`}</Link>

            </div> 

            <div className="flexContent"> 


              {

                    flex.map(({__typename,embeddedVideoLink,carouselOfImages})=> {
                      
                        if(__typename === 'WpArtwork_Artworksfields_ArtworksContent_EmbeddedVideo') {
                            return (<span>{embeddedVideoLink}</span>)
                        }
                        if(__typename === 'WpArtwork_Artworksfields_ArtworksContent_CarouselOfImages') {
                            return carouselOfImages.map(({publicUrl, altText},i)=> {
                                const assts = {publicUrl, altText, i}
                                return(

                                    <img src={assts.publicUrl} alt={assts.altText} key={assts.i} / >
                                    )
                            
                            })
                               
            
                        } else return (            
                            <div className="projectVisuals"> 
                            <img src=
                            {wpArtwork.featuredImage.node.publicUrl} alt=
                            {wpArtwork.featuredImage.node.altText} /> 
                            </div>)

                    })
                }

            </div>

                
        </div>

    )
}

export default WpPost;

export const query = graphql`
query PostById($id: String) {
  wpArtwork(id: {eq: $id}) {
    title
    contentType {
        node {
            id
        }
    }
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
         id
       }
    }
    artworksfields {
      artworkDescription
      artworksContent {
        __typename
        ... on WpArtwork_Artworksfields_ArtworksContent_EmbeddedVideo {
          embeddedVideoLink
        }
        ... on WpArtwork_Artworksfields_ArtworksContent_CarouselOfImages {
          carouselOfImages {
            altText
            link
            mediaItemUrl
            publicUrl
          }
        }
      }
    }

  }
}
`;
