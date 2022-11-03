const producto = require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpación del require

//ver la lista de productos
exports.getProducts=async (req,res,next) =>{
    const productos= await producto.find();
    if (!productos){
        return res.status(404).json({
            success:false,
            error:true
        })
    }

    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
        //message: "En esta ruta ud podra ver todos los productos" for show a message
    })
}
          

//ver un prodcuto  por id
exports.getProductById= async (req, res, next)=>{
    //se debe diferenciar del metodo anterior
    //el require o req es el mismo Body
    const product= await producto.findById(req.params.id)
    //verificacion
    if (!product){
        return res.status(404).json({
        success:false,
        message: 'No encontramos ese producto',
        error:true
        })
    }
    res.status(200).json({
        success:true,
        message:"Bellow are the details of the product selected: ",
        product
    })
}


//crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//updating a product
exports.updateProduct= async (req,res,next) =>{
    let product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){ //Verifico que el objeto no existe para finalizar el proceso
            return res.status(404).json({
            success:false,
            message: 'No encontramos ese producto'
        })
    }
    //Si el objeto si existia, entonces si ejecuto la actualización
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
}

//Eliminar un producto
exports.deleteProduct= async (req,res,next) =>{
    const product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){ //check the existnce of the product
            return res.status(404).json({ //Si el objeto no existe, return termina el metodo
            success:false,
            message: 'No encontramos ese producto'
        })
    }

    await product.remove();//remove in order to respect static order as opposite of delete, the tail is dinamic
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
    })
}

//FETCH
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos();

//Ver por id
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
 
//verProductoPorID('63546690aee8397ce04de0d2'); 