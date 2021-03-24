import "./styles.scss";
import Slides from "../../components/Slides";
import CardProduct from "../../components/Card";
import json from "../../info.json";

const Home = () => {
  const { products, imageSlides } = json;
  return (
    <div className="container-home">
      <Slides images={imageSlides} />
      <div className="row images-product">
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
