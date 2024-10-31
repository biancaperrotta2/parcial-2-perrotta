import { categoriaActiva } from "../../main.js";
import { handleGetProductLocalStorage } from "./persistence/localStorage.js";
import { handleRenderList } from "./view/store.js";

//CATEGORIA
const handleFilterProductsByCategory =(categoryIn)=>{
    const product=handleGetProductLocalStorage()
    switch(categoryIn){
        case categoriaActiva:
            handleRenderList(product)
            break
        case "Todo":
            handleRenderList(product)
            break
        case "Hamburguesas":
        case "Papas":   
        case "Gaseosas":
            const result=product.filter((el)=>el.categories===categoryIn)
            handleRenderList(result)
        default:
            break
        case"mayorPrecio":
            const resultPrecioMayor=product.sort((a,b)=>b.precio-a.precio)
            handleRenderList(resultPrecioMayor)
            
            break
        case"menorPrecio":
            const resultPrecioMenor=product.sort((a,b)=>a.precio-b.precio)
            handleRenderList(resultPrecioMenor)
            break
}       
}

//render de la vista categorias
export const renderCategories = () => {
    //tomamos elementos de la lista
    const ulList = document.getElementById
    ("listFilter");
    //creamos esos elmentos dentro de la lista
    ulList.innerHTML = `
        <li id="Todo">Todos los productos</li>
        <li id="Hamburguesas">Hamburguesas</li>
        <li id="Papas">Papas</li>
        <li id="Gaseosas">Gaseosas</li>
        <li id="mayorPrecio">Mayor precio</li>
        <li id="menorPrecio">Menor precio</li>
    `;

    //añadimos dinamicamente el evento click
    const liElements=ulList.querySelectorAll("li")
    liElements.forEach((liElement)=>{
        liElement.addEventListener('click',()=>{    
            handleClick(liElement)
        })
    })
    
    //verficamos y manejamos el estilo del elemento activo
    const handleClick=(elemento)=>{ 
        handleFilterProductsByCategory(elemento.id)
        liElements.forEach((el)=>{
            if (el.classList.contains('liActive')) {
                el.classList.remove('liActive')
            }else if (elemento===el) {
                el.classList.add('liActive')
            }
        })
    }
};