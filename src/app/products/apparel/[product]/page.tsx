type Props = {
  params: {
    product: string;
  };
};

export default function Apparel({ params: { product } }: Props) {
  return <h1>You are viewing product {product}</h1>;
}
