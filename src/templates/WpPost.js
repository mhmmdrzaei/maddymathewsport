import React from "react"
import {graphql} from "gatsby";
// import { Helmet } from "react-helmet/es/Helmet";
import Layout from '../components/layout/layout.component'
import ArtworkPageDetails from '../components/artworkPageDetails/artworkPageDetails.component';
import ArtWorkPageVisuals from '../components/artworkPageVisuals/artworkPageVisuals.component';
import Seo from '../components/seo/seo.component'



const WpPost = ({ data }) => {
    const { wpArtwork } = data;
    return(
        <Layout key={wpArtwork.contentType.node.id} >
            <ArtworkPageDetails wpArtwork={wpArtwork} />
            <ArtWorkPageVisuals wpArtwork={wpArtwork} />
        </Layout>

    )
}


export default WpPost;

export const Head = () => <Seo title="Visual Artist" />


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
