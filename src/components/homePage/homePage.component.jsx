import * as React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import { Link } from "@chakra-ui/react";

const HomePage = ()=> {
	const homePageData = useStaticQuery(graphql`
		query MyQuery {
		  wpPage(id: {eq: "cG9zdDoxMTA="}) {
		    id
		    homePageFields {
		      fieldGroupName
		      homePageLayout {
		        ... on WpPage_Homepagefields_HomePageLayout_FullWidthPost {
		          fieldGroupName
		          fullWidthPost {
		            ... on WpArtwork {
		              id
		              link
		              categories {
		                nodes {
		                  id
		                  link
		                  name
		                }
		              }
		              featuredImage {
		                node {
		                  altText
		                  publicUrl
		                }
		              }
		              title
		              uri
		            }
		          }
		         
		        }
		        ... on WpPage_Homepagefields_HomePageLayout_HalfWidthAnnouncement {
		          fieldGroupName
		          halfWidthAnnouncementContent {
		            fieldGroupName
		            announcementImage {
		              altText
		              publicUrl
		            }
		            announcementLink
		            announcementText
		          }
		        }
		      }
		    }
		  }
		}



		`)

	return (
		<h1>test</h1>
		)
}
export default HomePage