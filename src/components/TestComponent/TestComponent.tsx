import { builder } from "@builder.io/sdk";

type ProductData = {
  price: number;
  name: string;
  type: string;
};
type Props = {
  myProp: string;
};
export default async function TestComponent({ myProp }: Props) {
  const products = await builder.getAll("ip-product");
  return (
    <div>
      <h1>My Test Component {myProp}</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>{(product.data as ProductData).name}</div>
        ))}
      </div>
    </div>
  );
}
