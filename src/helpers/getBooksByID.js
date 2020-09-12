
//IDPrueba: 16806
export const getBooksById = async (id) => {
    const url = `https://www.etnassoft.com/api/v1/get/?id=${id}`;
    const peticion = await fetch(url);
    const results = await peticion.json();
    
    return results;
};

