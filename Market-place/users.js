import { fetchProducts } from "./script.js";

const container = document.querySelector('#container')

function handleData(data) {
    console.log(data)

    container.innerHTML = data?.map(product => {
        const { image, name, price } = product;

        return `
           <div class="border">
               <img src=${image}>
               <h3>${name}</h3>
               <p>price: ${price}</p>
               <button class='btn'>Add to cart</button>
           </div>
        `
    }).join(' ')
}

// Call fetchProducts and pass the handleData function
fetchProducts(handleData);


