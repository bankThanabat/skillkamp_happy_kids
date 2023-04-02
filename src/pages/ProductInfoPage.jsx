import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';

const ProductInfoPage = ({match}) => {
  const productId = match.params.id;
  const [product, setProduct] = useState(null);

  // Load your product data here using useEffect and API calls
  useEffect(() => {
    async function fetchProduct() {
      // Replace this with your actual API call to fetch the product by ID
      // const response = await yourApi.getProductById(productId);
      // setProduct(response.data);
    }

    // fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        {/* Your product information goes here */}
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover mb-4"
        />
        <div className="text-gray-700">${product.price.toFixed(2)}</div>
        <p className="mt-4">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductInfoPage;
