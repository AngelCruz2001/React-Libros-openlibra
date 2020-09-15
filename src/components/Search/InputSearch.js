import React from 'react'
import { Form } from './Form'

export const InputSearch = React.memo(({ setDataFetch }) => {
    return (
        <Form setDataFetch={setDataFetch} />
    )
})
