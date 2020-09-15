import { useState, useEffect } from "react"
import { getBooks } from "../helpers/getBooks"


export const useFetch = ({ param = "", type = "" }) => {
    const [state, setState] = useState({ data: [], loading: true, error: false });

    useEffect(() => {
        setState({ data: [], loading: true, error: false })
        setTimeout(() => {

            getBooks(param, type)
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
        }, 1000);
    }, [param]);

    return state;
}       
