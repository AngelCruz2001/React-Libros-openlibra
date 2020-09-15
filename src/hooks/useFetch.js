import { useState, useEffect } from "react"
import { getBooks } from "../helpers/getBooks"


export const useFetch = ({ param = "", type = "" }) => {
    const [state, setState] = useState({ data: [], loading: false, error: false });
    console.log("Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 1 ")

    useEffect(() => {
        if (param !== "") {
            console.log("Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 2 ")
            setState({ data: [], loading: true, error: false })
            setTimeout(() => {

                getBooks(param, type)
                    .then(data => {
                        console.log("Entre a el then")
                        setState({
                            data: data,
                            loading: false,
                            error: false,
                        });
                    })
                    .catch(data => {
                        console.log("Entre a el catch")
                        setState(s => ({
                            ...s,
                            error: true
                        }))
                    })
            }, 1000);
        }

    }, [param]);

    return state;
}       
