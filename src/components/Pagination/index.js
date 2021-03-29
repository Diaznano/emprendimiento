import Pagination from "react-bootstrap/Pagination";
import PropTypes from "prop-types";

const Paginations = ({ quantityPages, active, changeNumber }) => {
  let items = [];
  for (let number = 1; number <= quantityPages; number++) {
    items.push(
      <Pagination.Item
        onClick={() => changeNumber(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div style={{ justifyContent: "center", display: "flex", marginTop: 30 }}>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
};

Paginations.propTypes = {
  quantityPages: PropTypes.object,
  active: PropTypes.number,
  changeNumber: PropTypes.func,
};

export default Paginations;
