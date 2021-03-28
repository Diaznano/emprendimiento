import "./styles.scss";
import Slides from "../../components/Slides";
import CardProduct from "../../components/Card";
import json from "../../info.json";
import HorizontalScroll from "react-scroll-horizontal";

const Home = () => {
  const { products, imageSlides } = json;

  const renderCategory = (productList, title) => (
    <div className="images-product">
      <h1>{title}</h1>
      <div style={{ height: "600px", width: "99%" }}>
        <HorizontalScroll reverseScroll>
          {productList.map((product) => (
            <CardProduct key={product.id} {...product} />
          ))}
          <div style={{ width: "1200px" }} />
        </HorizontalScroll>
      </div>
    </div>
  );
  return (
    <div className="container-home">
      <Slides images={imageSlides} />
      {renderCategory(
        products.filter((x) => x.category == 1),
        "Mates"
      )}
      {renderCategory(
        products.filter((x) => x.category == 2),
        "Cuadros"
      )}
      {renderCategory(
        products.filter((x) => x.category == 3),
        "Bazar"
      )}
    </div>
  );
};

export default Home;
