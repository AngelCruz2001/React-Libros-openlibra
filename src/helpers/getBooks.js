
export const getBooks = async (param="", type) => {
    param = param.replaceAll(" ","+");
    let url = `https://www.etnassoft.com/api/v1/get/?${type}=${param}`;
    console.log(url)
    const peticion = await fetch(url);
    const results = await peticion.json();
    return results;
};

