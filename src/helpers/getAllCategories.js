//IDPrueba: 16806
export const getAllCategories = async () => {
    const url = `https://www.etnassoft.com/api/v1/get/?get_categories=all`;
    const peticion = await fetch(url);
    const results = await peticion.json();
    
    return results;
};
