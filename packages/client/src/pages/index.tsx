import React, { FC } from 'react'

import { useUsersQuery } from '../gen/schema'

const Home: FC = () => {
  const usersQuery = useUsersQuery()
  return (
    <>
      {!usersQuery.loading && (
        <ul>
          {usersQuery?.data?.users &&
            usersQuery.data.users.map((user) => {
              return (
                <li key={user.id}>
                  {user.id}:{user.name}
                </li>
              )
            })}
        </ul>
      )}
    </>
  )
}

export default Home
