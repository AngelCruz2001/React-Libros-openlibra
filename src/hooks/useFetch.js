import { useState, useEffect } from "react"
import { getBooksById } from "../helpers/getBooksByID";

export const useFetch = (param = "") => {
    const [state, setState] = useState({ data: [], loading: true, error: false });
    useEffect(() => {
        getBooksById(param)
            .then(data => {
                setState({
                    data: data,
                    loading: false,
                    error: false,
                });
            })
            .catch(data => {
                setState(s => ({
                    ...s,
                    error: true
                }))
            })
    }, [param]);

    return state;
}       
