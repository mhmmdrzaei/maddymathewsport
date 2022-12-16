import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout/layout.component'

// styles


// markup
const NotFoundPage = () => {
  return (
    <Layout>
    <title>Not found</title>
    <h1>Woops! it seems like you've made an oopsie daisy. Would you like to:</h1>
    <Link to="/">Go Back to Home?</Link>

    {process.env.NODE_ENV === "development" ? (
      <>
        <br />
        Try creating a page in <code>src/pages/</code>.
        <br />
      </>
    ) : null}

      
    </Layout>
  );
};

export default NotFoundPage;
