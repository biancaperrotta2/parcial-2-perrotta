//POPUP
import { productoActivo, setProductoActivo } from "../../../main.js"
import { handleDeleteProduct } from "../products.js"

const cancelButton =document.getElementById('cancelButton')

cancelButton.addEventListener('click',()=>{
    closeModal()
})

const handleCancelButton = () => {
}

//funciones para abrir cerrar modal
export const openModal=()=>{
    const modal =document.getElementById('modalPopUP')
    modal.style.display="flex"
    const buttonDelete=document.getElementById('deleteButton')
    
    if (productoActivo) {
        buttonDelete.style.display="block"
    }else{
        buttonDelete.style.display="none"
    }

    if (productoActivo) {
        const nombre=document.getElementById('nombre') ,
        imagen=document.getElementById('img'),
        precio=document.getElementById('precio'),
        categories=document.getElementById('categoria')  
        imagen.value=productoActivo.imagen
    precio.value=productoActivo.precio
    categories.value=productoActivo.categories
    nombre.value=productoActivo.nombre
    }
}

export const closeModal=()=>{
    const modal =document.getElementById('modalPopUP')
    modal.style.display="none"
    setProductoActivo(null)
    resetModal()
}

const resetModal=()=>{
    const nombre=document.getElementById('nombre'),
         imagen=document.getElementById('img'),
         precio=document.getElementById('precio'),
         categories=document.getElementById('categoria')   
    imagen.value=""
    precio.value=0
    categories.value="Seleccione una categoria"
    nombre.value=""
}

const deleteButton=document.getElementById('deleteButton')
deleteButton.addEventListener('click',()=>{
    handlebuttonDelete()
})

const handlebuttonDelete=()=>{
    handleDeleteProduct()
}