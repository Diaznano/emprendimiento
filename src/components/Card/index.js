import { ProductCard } from "react-ui-cards";
import "./styles.scss";
import PropTypes from "prop-types";

const CardProduct = ({ images, description, name, price, message }) => {
  return (
    <div className="link-product">
      <ProductCard
        photos={images}
        price={`$${price}`}
        productName={name}
        description={description}
      />
      <button
        onClick={() => window.open(message, "_blank")}
        type="button"
        className="btn btn-primary button-link"
      >
        Info
      </button>
    </div>
  );
};

CardProduct.propTypes = {
  images: PropTypes.arrayOf({}),
  description: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  message: PropTypes.string,
};

export default CardProduct;
