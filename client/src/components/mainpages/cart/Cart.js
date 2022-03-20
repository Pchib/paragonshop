import React, { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";
import axios from "axios";
import PaypalButton from "./PaypalButton";
import { Button } from "reactstrap";

function Cart() {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userAPI.cart;
  const [token] = state.token;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(total);
    };

    getTotal();
  }, [cart]);

  const addToCart = async (cart) => {
    await axios.patch(
      "/user/addcart",
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };

  const increment = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });

      setCart([...cart]);
      addToCart(cart);
    }
  };

  const tranSuccess = async (payment) => {
    const { paymentID, address } = payment;

    await axios.post(
      "/api/payment",
      { cart, paymentID, address },
      {
        headers: { Authorization: token },
      }
    );

    setCart([]);
    addToCart([]);
    alert("You have successfully placed an order.");
  };

  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
    );

  return (
    <div>
      <section id="cart_items">
        <div class="breadcrumbs">
          <ol class="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li class="active">Shopping Cart</li>
          </ol>
        </div>
        <div class="table-responsive cart_info">
          <table class="table table-condensed borderless">
            <thead>
              <tr class="cart_menu">
                <td class="image">Item</td>
                <td class="description">Description</td>
                <td class="price">Price</td>
                <td class="quantity">Quantity</td>
                <td class="total">Total</td>
                <td></td>
              </tr>
            </thead>
            {cart.map((product) => (
              <tbody>
                <tr>
                  <td class="cart_image" key={product._id}>
                    <img height={150} src={product.images.url} alt="" />
                  </td>
                  <td class="cart_description">
                    <h4> {product.title}</h4>
                    <p></p>
                  </td>
                  <td class="cart_price">
                    <p>${product.price}</p>
                  </td>
                  <td class="cart_quantity">
                    <div class="cart_quantity_button">
                      <a class="cart_quantity_up">
                        <button onClick={() => decrement(product._id)}>
                          -
                        </button>
                      </a>
                      <input
                        class="cart_quantity_input"
                        type="text"
                        name="quantity"
                        value={product.quantity}
                        autocomplete="off"
                        size="2"
                      />
                      <a class="cart_quantity_down">
                        {" "}
                        <button onClick={() => increment(product._id)}>
                          {" "}
                          +{" "}
                        </button>
                      </a>
                    </div>
                  </td>
                  <td class="cart_total">
                    <p class="cart_total_price">
                      ${product.price * product.quantity}
                    </p>
                  </td>
                  <td class="cart_delete">
                    <a
                      class="cart_quantity_delete"
                      onClick={() => removeProduct(product._id)}
                    >
                      <i class="fa fa-times"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="total">
          <h3>Total: $ {total}</h3>
          <Button>Order</Button>
          <PaypalButton total={total} tranSuccess={tranSuccess} />
        </div>
      </section>
    </div>
  );
}

export default Cart;
