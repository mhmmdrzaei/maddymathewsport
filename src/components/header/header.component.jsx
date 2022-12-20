import * as React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import { Link } from "@chakra-ui/react"; 



const Header = ()=> {


	const headerData = useStaticQuery(graphql`
	  query HeaderQuery {
	    site {
	      siteMetadata {
	        title
	      }
	    }
	    wpMenu {
	      id
	      menuItems {
	        nodes {
	          id
	          uri
	          label
	        }
	      }
	    }
	    allWpCategory {
	      nodes {
	        id
	        name
	        link
	        databaseId
	        __typename
	      }
	    }
	  }
	`)

	return (
	  <header>
	  <Link as={GatsbyLink} to="/">
	     <h1>{headerData.site.siteMetadata.title}</h1>
	  </Link>
	  <menu>
	  {
	  	headerData.wpMenu.menuItems.nodes.map(({id, uri, label}) => (
	  		<Link as={GatsbyLink} to={uri} key={id}>{label} </Link>
	  		)
	  		
	  	)
	  } 
	  {
	  	headerData.allWpCategory.nodes.filter((category)=> { 
	  	  if (category.name === "Uncategorized") {
	  	    return false;
	  	  }
	  	  return true;
	  	}).map((category)=>(<Link as={GatsbyLink} to={category.link} key={category.id}>{category.name} </Link>))
	  }
	  	
	  </menu>
	   
	  </header>
)
}

export default Header;

