import * as React from "react";

const ArtWorkPageVisuals = ({wpArtwork})=> {
	const flex = wpArtwork.artworksfields.artworksContent || []
	const featured = ()=> {
	    if (!wpArtwork.artworksfields.artworksContent) {
	        console.log(wpArtwork.featuredImage);
	        return (            
	             <div className="projectVisuals"> 
	            <img src=
	            {wpArtwork.featuredImage.node.publicUrl} alt=
	            {wpArtwork.featuredImage.node.altText} /> 
	            </div>)

	    }
	}   
	return (
		<div className="flexContent"> 
		{featured()}

		  {

		        flex.map(({__typename,embeddedVideoLink,carouselOfImages})=> {
		          
		            if(__typename === 'WpArtwork_Artworksfields_ArtworksContent_EmbeddedVideo') {
		                return (<div  key={wpArtwork.contentType.node.Id+1} className="responsiveVideo" dangerouslySetInnerHTML={{ __html: embeddedVideoLink }} />)
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
		)
}

export default ArtWorkPageVisuals;