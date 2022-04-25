import React from 'react';

function CategorySummary(props) {
  const categories = [
    ...new Set(props.products.map((product) => product.category)),
  ];

  function getTotalValue(category) {
    return props.products.reduce((previousValue, currentValue) => {
      if (currentValue.category === category) {
        return previousValue + currentValue.price;
      }
      return previousValue;
    }, 0);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Total value</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, id) => {
          return (
            <tr key={id}>
              <td>{category}</td>
              <td>{getTotalValue(category)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CategorySummary;
