import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link } from "@chakra-ui/react";
import CategoriesListing from '../categoriesListing/categoriesListing.component'

export const BOX_SIZING_STYLES = {
  "Half With": "halfWidthPost",
  "Full Width": "fullWidthPost",
  "undefined": ''
};

const ArtworkItem = ({data, sizing})=> {
	const {featuredImage,id,uri,title,categories} = data


	return (
		<div className={`listingEach ${BOX_SIZING_STYLES[sizing]}`} key={id}>
		  <img loading="lazy" src={featuredImage.node.publicUrl} alt={featuredImage.node.altText} />
		  <div className="listingDetails">
		  <Link as={GatsbyLink} to={uri}>
		    <h2>{title}</h2>
		   </Link> 
		   <CategoriesListing categories={categories} />
		  </div>
		
		 </div>
		)
}

export default ArtworkItem;