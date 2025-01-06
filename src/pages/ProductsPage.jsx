import AddProductForm from "../components/AddProductForm";
import ProductCard from "../components/ProductCard";
import { useGetAllProducts } from "../services/queries";

function ProductsPage() {
  const { data, isPending, isError } = useGetAllProducts();

  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>Something went wrong!</p>;

  return (
    <div>
      <h4>Products List:</h4>
      <ul>
        {data?.data?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </ul>
      <AddProductForm />
    </div>
  );
}

export default ProductsPage;
