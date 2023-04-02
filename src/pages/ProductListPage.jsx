import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';

const ProductListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Load your products and categories here using useEffect and API calls
  useEffect(() => {
    // Replace this with your actual API call to fetch products
    async function fetchProducts() {
      // const response = await yourApi.getProducts();
      // setProducts(response.data);
    }

    // Replace this with your actual API call to fetch categories
    async function fetchCategories() {
      // const response = await yourApi.getCategories();
      // setCategories(response.data);
    }

    fetchProducts();
    fetchCategories();
  }, []);

  const filteredProducts = selectedCategory ?
    products.filter((product) => product.categoryId === selectedCategory) :
    products;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <CategoryFilter
          categories={categories}
          onCategoryChange={handleCategoryChange}
        />
        <div className="grid grid-cols-4 gap-4 mt-4">
          {/* Loop through your filtered products array and render ProductCard components */}
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
