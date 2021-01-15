import React, { FC } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { useUsersQuery, useDeleteUserMutation, useAddUserMutation } from '../gen/schema'

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
                      await deleteUserMutation({ variables: { id: user.id } })
                      usersQuery.refetch()
                    }}
                  >
                    削除
                  </button>
                </li>
              )
            })}
        </ul>
      ) : (
        <p>loadなう</p>
      )}
      <AddUser addUser={usersQuery} />
    </>
  )
}

const AddUser: FC<{ addUser: any }> = ({ addUser }) => {
  const [addUserMutation] = useAddUserMutation()

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={async (values) => {
        await addUserMutation({ variables: values })
        addUser.refetch()
      }}
    >
      {() => {
        return (
          <Form>
            <Field type="text" name="name" placeholder="名前" />
            <ErrorMessage name="name">{(msg) => <div>{msg}</div>}</ErrorMessage>
            <button type="submit">Submit</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Home
