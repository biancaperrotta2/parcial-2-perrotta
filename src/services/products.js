import { productoActivo } from "../../main.js"
import { handleGetProductLocalStorage, setInLocalStorage } from "./persistence/localStorage.js"
import { closeModal } from "./view/modal.js"
import { handleGetProductToStore, handleRenderList } from "./view/store.js"
import Swal from "sweetalert2"

//Guardamos
const acceptButton=document.getElementById('acceptButton')
acceptButton.addEventListener('click',()=>{
    handleSaveOrModifyElements()
})

//funcion
const handleSaveOrModifyElements=()=>{
    const nombre=document.getElementById('nombre').value,
         imagen=document.getElementById('img').value,
         precio=document.getElementById('precio').value,
         categories=document.getElementById('categoria').value
    let object=null

    if (productoActivo) {
        object={
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories
        }
    }else{
            object={
            id:new Date().toISOString(),  
            nombre,
            imagen,
            precio,
            categories
        }
    }
    Swal.fire({
        title: "Correcto",
        text: "Producto guardado correctamente!",
        icon: "success"
      });
    setInLocalStorage(object)
    handleGetProductToStore()
    closeModal()
}

//Eliminar elemento
export const handleDeleteProduct=()=>{
    Swal.fire({
        title: "¿Desea eliminar el elemento?",
        text: "Si lo eliminas sera permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SI, eliminar"
      }).then((result) => {
        if (result.isConfirmed) {
            const products=handleGetProductLocalStorage()
            const result=products.filter((el)=>el.id!=productoActivo.id)
             //setear el nuevo array
            localStorage.setItem("products",JSON.stringify(result))
            const newProducts=handleGetProductLocalStorage()
            handleRenderList(newProducts)
            closeModal()
        }else{
            closeModal()
        }
      });
   
}