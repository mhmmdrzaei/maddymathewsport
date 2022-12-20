import * as React from "react";
import Layout from '../components/layout/layout.component'
import HomePage from '../components/homePage/homePage.component'
import Seo from '../components/seo/seo.component'



const IndexPage = () => {

  return (
    <Layout>
    <HomePage />
      
    </Layout>
    

  );
};
export const Head = () => <Seo title="Home" />

export default IndexPage;
