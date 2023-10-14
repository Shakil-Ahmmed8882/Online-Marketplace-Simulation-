// dataFetcher.js
import "./users.js";

async function fetchProducts(callback) {
  try {
    const res = await fetch("/Market-place/Products.json");
    const data = await res.json();

    if (data) {
      if (typeof callback === "function") {
        callback(data);
      }
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

export { fetchProducts };
