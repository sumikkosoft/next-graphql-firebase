import axios from 'axios'
// import gql from 'graphql-tag'

const query = `
  query Me($id: ID!) {
    me(id: $id)
  }
`

const url = 'http://localhost:4000/'

const main = () => {
  axios({
    url,
    method: 'POST',
    data: {
      query,
      variables: { id: '5c9beed4a34c1303f3371a38' }
    }
  })
    .then((responce) => responce.data)
    .then((result) => {
      console.log(result.data)
    })
    .catch((err) => {
      console.log('何か')
      console.log(err.message)
    })
}

export default main()
