import "./styles.scss";
import PropTypes from "prop-types";
import { Slide } from "react-slideshow-image";

const CardProduct = ({ images, name, price, discount }) => {
  let priceWithDiscount = price;
  if (discount) {
    const priceInt = parseInt(price);
    priceWithDiscount = priceInt - priceInt * (discount / 100);
  }

  const renderSlide = (image) => (
    <div className="each-slide">
      <img src={image} alt="new" className="pic-1" />
    </div>
  );

  return (
    <div style={{ marginTop: 40 }} className="col-md-3 col-sm-6">
      <div className="product-grid">
        <div className="product-image">
          <div className="image">
            {images.length > 1 ? (
              <>
                <Slide arrows autoplay={false} easing="ease">
                  {images.map((image) => renderSlide(image))}
                </Slide>
              </>
            ) : (
              <img className="pic-1" src={images[0]} />
            )}
          </div>
          {discount && <span className="product-sale-label">Sale!</span>}
          <div className="product-rating">
            <a className="show-info" href="#">
              {" "}
              Mas Informacion{" "}
            </a>
          </div>
        </div>
        <div className="product-content">
          <h3 className="title">{name}</h3>
          <div className="price">
            {discount && <span>${price}</span>}${priceWithDiscount}
          </div>
        </div>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  images: PropTypes.object,
  discount: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default CardProduct;
