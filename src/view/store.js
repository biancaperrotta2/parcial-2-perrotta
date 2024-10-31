// STORE
import { setProductoActivo } from "../../../main.js"
import { handleGetProductLocalStorage } from "../persistence/localStorage.js"
import { openModal } from "./modal.js"

//Funcion que se encarga de traer los elementos y llamar al render
export const handleGetProductToStore =()=>{
    const products=handleGetProductLocalStorage()
    handleRenderList(products)
}

//Se encarga de filtrar y de renderizar las seccion con todos sus elementos
export const handleRenderList=(productosIn)=>{
    //flitrado de array por <categorias></categorias>
    const burgers=productosIn.filter((el)=>el.categories=="Hamburguesas")
    const papas=productosIn.filter((el)=>el.categories=="Papas")
    const gaseosas=productosIn.filter((el)=>el.categories=="Gaseosas")

    //renderiza los elementos de la seccion
    const rederProductGroup =(productos,title)=>{
        if (productos.length >0) {
            const productosHTML=productos.map((producto,index)=>{
                return `
                <div class='containerTargetItem' id="product-${producto.categories}-${index}">
                    <div >
                        <img src="${producto.imagen}">/>
                        <div> 
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class='targetProps'>
                            <p><b>Precio:</b> $ ${producto.precio}</p>
                           
                        </div>
                    </div>

                </div>`;

            })

            //retorna la seccion con todos lo elmentos dentro
            return `
                <section class='sectionStore'>
                <div class='containerTitleSection'>
                <h3>${title}</h3>
                </div>
                <div class='containerProductStore'>
                ${productosHTML.join("")}
                </div>
                </section>
            `;
        }else{
            return ""
        }
    }

    //renderizar cada uno de los productos en su categoria
    const appContainer=document.getElementById('storeContainer')
    appContainer.innerHTML=`
        ${rederProductGroup(burgers,"Hamburguesas")}
        ${rederProductGroup(papas,"Papas")}
        ${rederProductGroup(gaseosas,"Gaseosas")}
    `;

    //añade los eventos de manera dinamica
    const addEvents =(productsIn)=>{
        if (productsIn) {
            productsIn.forEach((element,index )=> {
                const productContainer=document.getElementById(`product-${element.categories}-${index}`)
                productContainer.addEventListener('click',()=>{
                    setProductoActivo(element)
                    openModal()
                })
            });
        }
    }

    addEvents(burgers)
    addEvents(papas)
    addEvents(gaseosas)
}