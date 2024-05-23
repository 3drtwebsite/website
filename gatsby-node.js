const path = require("path")
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Blogs {
      allContentfulBlog(filter: {spaceId: {eq: "c8js3kcyd4fa"}}) {
        nodes {
            slug
        }
      }
    }
  `)
  
  data.allContentfulBlog.nodes.forEach(node => {
    actions.createPage({
      path: '/blog/' + node.slug,
      component: path.resolve('./src/templates/blog-template.js'),
      context: { slug: node.slug }
    })
  })
}
