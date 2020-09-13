import { useState, useEffect } from "react"
import { getAllCategories } from "../helpers/getAllCategories";
import { getBooksById } from "../helpers/getBooksByID"


export const useFetch = (param = "",action) => {
    const [state, setState] = useState({ data: [], loading: true, error: false });
    let promese = () =>{}
  
    switch (action) {
        case 'BookId':
            promese=getBooksById(param)
            break;
        case 'AllCategories':
             promese=getAllCategories()
            break;
    
        default:
            break;
    }
    useEffect(() => {
        setTimeout(() => {

            promese
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
        }, 1200);
    }, [param]);

    return state;
}       
