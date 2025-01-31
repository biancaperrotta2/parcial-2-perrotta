// LOCAL STORAGE
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products){
        return products;
    }else{
        return [];
    }
};

//guardar en localStorage

//recibir un producto
export const setInLocalStorage = (productIn) => {
    if (productIn) {
        //traer los elementos
        let productsInLocal = handleGetProductLocalStorage();
        console.log(productIn);
        const existingIndex = productsInLocal.findIndex((productsLocal) =>
        productsLocal.id == productIn.id
        );

        //verificar si el elemento existe, si existe debe reemplazarse o sino, agregarse
        if(existingIndex != -1 ){
        productsInLocal[existingIndex] = productIn;
        }else{
            productsInLocal.push(productIn);
        }

        //setear el nuevo array
        localStorage.setItem("products", JSON.stringify(productsInLocal));
    }
};