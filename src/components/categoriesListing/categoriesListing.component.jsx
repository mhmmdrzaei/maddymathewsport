import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link } from "@chakra-ui/react";

const CategoriesListing = ({ categories }) => {
	return (

		<div className="categories">
		  {categories.nodes.map(({link, uri, name,id})=>{
		   return (
		       <Link as={GatsbyLink} to={link} key={id}>
		         {name}
		       </Link>
		     )
		  })}
		</div>


		)

}

export default CategoriesListing;