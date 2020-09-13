import React from 'react'
import { ItemDropDown } from './ItemDropDown'

export const InputSearch = () => {
    return (
        <>
            <div className="input-group mb-3">
                <ItemDropDown />
                <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
            </div>
        </>
    )
}
