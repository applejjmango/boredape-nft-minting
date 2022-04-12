// export { default as getArts } from './getArts'
// export { default as getCategories } from './getCategories'

// const graphcmsEndpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

// export const getArts = async () => {
//   const query = gql`
//     query MyQuery {
//       artsConnection {
//         edges {
//           node {
//             id
//             title
//             twitterLink
//             categoryId
//             photo {
//               url
//             }
//             writer {
//               id
//               name
//               twitterAccount
//               discordId
//             }
//           }
//         }
//       }
//     }
//   `

//   const result = await request(graphcmsEndpoint, query)
//   return result.artsConnection.edges
// }

// export const getCategories = async () => {
//   const query = gql`
//     query MyQuery {
//       categoriesConnection {
//         edges {
//           node {
//             name
//           }
//         }
//       }
//     }
//   `

//   const result = await request(graphcmsEndpoint, query)
//   return result.categoriesConnection.edges
// }
