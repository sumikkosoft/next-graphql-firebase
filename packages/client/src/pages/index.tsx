import React, { FC } from 'react'

import { useUsersQuery, useDeleteUserMutation } from '../gen/schema'

const Home: FC = () => {
  const usersQuery = useUsersQuery()
  const [deleteUserMutation] = useDeleteUserMutation()
  return (
    <>
      {!usersQuery.loading ? (
        <ul>
          {usersQuery?.data?.users &&
            usersQuery.data.users.map((user) => {
              return (
                <li key={user.id}>
                  {user.id}:{user.name}
                  <button
                    onClick={async (e) => {
                      e.preventDefault()
                      const { data } = await deleteUserMutation({ variables: { id: user.name } })
                      console.log(data)
                      usersQuery.refetch()
                    }}
                  ></button>
                </li>
              )
            })}
        </ul>
      ) : (
        <p>loadなう</p>
      )}
    </>
  )
}

export default Home
