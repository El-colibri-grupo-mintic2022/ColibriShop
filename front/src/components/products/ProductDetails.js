import React, { Fragment } from 'react'
import MetaData from "../layout/MetaData"

export const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title="Cupcake Nutella"></MetaData>
        <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
                <img src="../../images/Productos/cupcake_nutella.jpg" alt="Imagen_producto" height="450" width="450"></img>
            </div>

            <div className='col-12 col-lg-5 mt-5'>
                <h3>Cupcake naranja amapola, con relleno de Nutella</h3>
                <p id="product_id">Product #3253252</p>
            </div>
        </div>
    </Fragment>
  )
}



