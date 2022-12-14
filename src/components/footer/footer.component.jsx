import * as React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import { Link } from "@chakra-ui/react";

const Footer = ()=>{
	const footerData = useStaticQuery(graphql`
		query footerQuary {
		  site {
		    siteMetadata {
		      title
		    }
		  }
		}


		`)
	return(
		<footer>
		<span>
		© {new Date().getFullYear()} 
          {` `}
          {footerData.site.siteMetadata?.title}</span>
		</footer>
		)
}

export default Footer;