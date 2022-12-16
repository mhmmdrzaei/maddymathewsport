import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ArtworkItem from '../artworkItem/artworkItem.component'

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
		          objectPostingSize
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
		              id
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
	

	const layoutfieds = homePageData.wpPage.homePageFields.homePageLayout;
	return (

	<div className="bodyContainer">
	{

	      layoutfieds.map(({fieldGroupName,fullWidthPost,halfWidthAnnouncementContent,objectPostingSize})=> {
	        
	          if(fieldGroupName === 'Page_Homepagefields_HomePageLayout_HalfWidthAnnouncement') {
	              return (
	              	<div className="announcementHome" key={halfWidthAnnouncementContent.announcementImage.id}>
	              	  <img src={halfWidthAnnouncementContent.announcementImage.publicUrl} alt={halfWidthAnnouncementContent.announcementImage.altText} />
	              	  <div className="listingDetails">
	              	  <a href={halfWidthAnnouncementContent.announcementLink} target="_blank" rel="noopener noreferrer">
	              	    {halfWidthAnnouncementContent.announcementText}
	              	  </a>
	              	  </div>
	              	
	              	 </div>


	              	)
	          }
	          if(fieldGroupName === 'Page_Homepagefields_HomePageLayout_FullWidthPost') {

	              return (
	              	 <ArtworkItem data={fullWidthPost} key={fullWidthPost.id} sizing={objectPostingSize} />

	              	)
	                 
	
	          }
	          else return [];

	        
	      })
	  }

    </div>
		)
}
export default HomePage