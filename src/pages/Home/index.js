import { useState } from "react";
import "./styles.scss";
import Slides from "../../components/Slides";
import CardProduct from "../../components/Card";
import json from "../../info.json";
import Paginations from "../../components/Pagination";

const styles = {
  containerImages: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
  },
};

const Home = () => {
  const [active, setChangeActive] = useState(1);
  const { products, imageSlides } = json;
  const quantityProduct = 4;
  const rest = products.length % quantityProduct;
  const operation = products.length / quantityProduct;
  const quantityPages = rest === 0 ? operation : operation + 1;
  const startIndex = active * quantityProduct - quantityProduct;

  return (
    <div className="container-home">
      <Slides images={imageSlides} />
      <div style={styles.containerImages} className="row">
        {products
          .slice([startIndex], [startIndex + quantityProduct])
          .map((product) => (
            <CardProduct key={product.id} {...product} />
          ))}
      </div>
      {quantityPages !== 1 && (
        <Paginations
          active={active}
          changeNumber={setChangeActive}
          quantityPages={quantityPages}
        />
      )}
    </div>
  );
};

export default Home;
