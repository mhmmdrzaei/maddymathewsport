import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link } from "@chakra-ui/react";
import CategoriesListing from '../categoriesListing/categoriesListing.component'


const ArtworkPageDetails = ({wpArtwork})=> {

	return (

		<div className="projectInfo">
		    <h2>
		        {wpArtwork.title}
		    </h2>
		    <div className="projectDetails" 
		    dangerouslySetInnerHTML={{ __html: wpArtwork.artworksfields.artworkDescription }} />
			<CategoriesListing categories={wpArtwork.categories} />
		    <Link as={GatsbyLink} to="/">{`<< Back to Blog`}</Link>

		</div> 

		)
}

export default ArtworkPageDetails;