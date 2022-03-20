import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({product, deleteProduct}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    
    return (
        <div className="">
            
            {
                isAdmin ? 
                <>
                    <Link className="btn  btn-default add-to-cart "  to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        Delete
                    </Link>
                    <Link className="btn  btn-default add-to-cart "  to={`/edit_product/${product._id}`}>
                        Edit
                    </Link>
                </>
                : <>
                    <Link className="btn  btn-default add-to-cart " to="#!" onClick={() => addCart(product)}><i class="fa fa-shopping-cart"></i>
                        Add To Cart
                    </Link>
                    {"   "}
                    <Link className="btn  btn-default add-to-cart " to={`/detail/${product._id}`}>
                        View
                    </Link>
                </>
            }
            
           
                
        </div>
    )
}

export default BtnRender
