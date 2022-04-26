import React from 'react';
import MostExpensiveCart from '../mostExpensiveCart/MostExpensiveCart';

function CartsSummary(props) {
  function cartsValue(productsInCart) {
    return productsInCart.reduce((previousValue, currentValue) => {
      const product = props.products.find((element) => {
        return element.id === currentValue.productId;
      });
      return previousValue + currentValue.quantity * product.price;
    }, 0);
  }

  const cartsWithValues = props.carts
    .map((cart) => {
      return { ...cart, value: cartsValue(cart.products) };
    })
    .sort((a, b) => (a.value < b.value ? 1 : -1));

  return (
    <>
      <h3>Most expensive cart</h3>
      <MostExpensiveCart cart={cartsWithValues[0]} users={props.users} />
      <h3>All carts</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserID</th>
            <th>Date</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {cartsWithValues.map((cart, id) => {
            return (
              <tr key={id}>
                <td>{cart.id}</td>
                <td>{cart.userId}</td>
                <td>{cart.date.substring(0, 10)}</td>
                <td>{cart.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CartsSummary;
