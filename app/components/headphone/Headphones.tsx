import { Product } from '@/app/types/typeProduct';
import { getProducts } from '@/app/utils/data';
import React, { useState, useEffect } from 'react';

const Headphones = ({ id }: { id: string }) => {
  const [product, setProduct] = useState<Product | null>(null); // State for product

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProducts(id);

        // Assuming getProducts returns a single product by ID:
        if (fetchedProduct) {
          setProduct(fetchedProduct); // Set single product
        } else {
          console.error('Product not found for ID:', id);
          // Handle product not found scenario (display message, redirect, etc.)
        }

      } catch (error) {
        console.error('Error fetching product:', error);
        // Handle errors (display a message, redirect, etc.)
      }
    };

    fetchProduct();
  }, [id]); // Dependency array: fetch only when id changes

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.id}</h2> {/* Access product properties */}
          <p>{product.description}</p>
          {/* Display other product details */}
        </div>
      ) : (
        <p>
          {product === null ? 'Loading product details...' : 'Product not found'}
        </p>
      )}
    </div>
  );
};

export default Headphones;
