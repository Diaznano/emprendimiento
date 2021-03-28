import { useParams } from "react-router-dom";
import json from "../../info.json";
import CardProduct from "../../components/Card";

const ListProducts = () => {
  const { category } = useParams();
  const { products } = json;

  let title = "";
  switch (category) {
    case "1":
      title = "Mates";
      break;
    case "2":
      title = "Cuadros";
      break;
    case "3":
      title = "Bazar";
      break;
    default:
      title = "Productos";
      break;
  }

  const { innerHeight: height } = window;

  return (
    <div style={{ height, paddingTop: 120 }}>
      <h1>{title}</h1>
      <div className="row images-product">
        {products
          .filter((x) => x.category == category)
          .map((product) => (
            <CardProduct key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default ListProducts;
