import React from 'react';

function CartsSummary(props) {
  function cartsValue(productsInCart) {
    return productsInCart.reduce((previousValue, currentValue) => {
      const product = props.products?.find((element) => {
        return element.id === currentValue.productId;
      });
      return previousValue + currentValue.quantity * product.price;
    }, 0);
  }

  return (
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
        {props.carts?.map((cart, id) => {
          return (
            <tr key={id}>
              <td>{cart.id}</td>
              <td>{cart.userId}</td>
              <td>{cart.date}</td>
              <td>{cartsValue(cart.products)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CartsSummary;
