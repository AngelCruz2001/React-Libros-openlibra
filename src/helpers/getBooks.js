export const getBooks = async (param, type) => {
    let url = `https://www.etnassoft.com/api/v1/get/?${type}=${param}`;   
    const peticion = await fetch(url);
    const results = await peticion.json();
    return results;
};

