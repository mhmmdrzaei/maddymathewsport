

exports.createPages = async({actions, graphql, reporter}) => {

    const result = await graphql(`
        {
          allWpArtwork {
            nodes {
              __typename
              id
              databaseId
              uri
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

    if (result.errors) {
        reporter.error("There was an error fetching posts", result.errors)
    }

    const { allWpArtwork } = result.data;
    const { allWpCategory } =  result.data;




    let template = require.resolve(`./src/templates/WpPost.js`);
    let catTemplate = require.resolve(`./src/templates/WpCategory.js`);

    allWpArtwork.nodes.map( post => {
        actions.createPage({
            path: post.uri,
            component: template,
            context: post
        })
    })

    allWpCategory.nodes.map( cat => {
        actions.createPage({
            path: cat.link,
            component: catTemplate,
            context: cat
        })
    })

}
