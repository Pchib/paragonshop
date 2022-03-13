import React from "react";
import BtnRender from "./BtnRender";

function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
  return (
    <div className="">
      <div class="features_items">
        <div class="col-lg-12 col-sm-4">
          <div class="product-image-wrapper">
            <div class="single-products">
              <div class="productinfo text-center">
                {isAdmin && (
                  <input
                    type="checkbox"
                    checked={product.checked}
                    onChange={() => handleCheck(product._id)}
                  />
                )}
                <img height={250} src={product.images.url} alt="" />

                <div className="">
                  <h2>
                    <span>${product.price}</span>
                  </h2>
                  <p title={product.title}>{product.title}</p>

                  <p>{product.description}</p>
                </div>

                <BtnRender product={product} deleteProduct={deleteProduct} />
                <div class="product-overlay">
                  <div class="overlay-content">
                    <h2>${product.price}</h2>
                    <p title={product.title}>{product.title}</p>
                    <BtnRender product={product} deleteProduct={deleteProduct} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
