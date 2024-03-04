import { useRouter } from 'next/router';
import { getProducts } from '../utils/data';
import { Product } from '../types/typeProduct';

const ProductPage = async () => {
  const router = useRouter();
  const { slug } = router.query;

  // Await the Promise to get the products array
  const products: Product[] = await getProducts();

  // Get the product data based on the slug
  const product: Product | undefined = products.find((product: Product) => product.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image.desktop} alt={product.name} />
      <p>{product.description}</p>
      // Add more product details here
    </div>
  );
};

export default ProductPage;

