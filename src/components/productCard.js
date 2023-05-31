import './style.css';

export const createProductCard = (product) => `
   <div class="card">
      <p>${product.productName}</p>
      <img src=${product.productImage} />
      <p>${product.price}</p>
      <a href="src/pages/details/details.html?id=${product.id}">Details</a>
   </div>
`;
