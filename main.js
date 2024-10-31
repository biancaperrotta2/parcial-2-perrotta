import { renderCategories } from "./src/services/categories.js";
import { openModal } from "./src/services/view/modal.js";
import { handleGetProductToStore } from "./src/services/view/store.js";
import "./style.css"

// APLICACION
export let categoriaActiva=null

export const setCategoriaActiva=(categoriaIn)=>{
    categoriaActiva=categoriaIn
}

export let productoActivo=null

export const setProductoActivo=(productoIn)=>{
    productoActivo=productoIn
}

handleGetProductToStore()
renderCategories()

// HEADER
const buttonAdd=document.getElementById('buttonAddElement')
buttonAdd.addEventListener('click',()=>{
    openModal()
})

//buttonSearch
const buttonSearch=document.getElementById('buttonSearch')
buttonSearch.addEventListener('click',()=>{
    handleSearchProductByName()
})