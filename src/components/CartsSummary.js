import React from 'react';
import MostExpensiveCart from './MostExpensiveCart';

function CartsSummary(props) {
  function cartsValue(productsInCart) {
    return productsInCart.reduce((previousValue, currentValue) => {
      const product = props.products?.find((element) => {
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
      <MostExpensiveCart cart={cartsWithValues[0]} users={props.users} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserID</th>
            <th>Date</th>
            <td>Value</td>
          </tr>
        </thead>
        <tbody>
          {cartsWithValues.map((cart, id) => {
            return (
              <tr key={id}>
                <td>{cart.id}</td>
                <td>{cart.userId}</td>
                <td>{cart.date}</td>
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
