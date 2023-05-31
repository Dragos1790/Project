import './style.css';

export const createProductDetailsCard = (product) => `
   <div class="card details">
      <p>${product.productName}</p>
      <img src=${product.productImage} />
      <p>${product.price}</p>
      <a href="/src/pages/details/details.html?id=${product.id}">Details</a>
      <p>${product.productDetail}</p>
   </div>
`;
