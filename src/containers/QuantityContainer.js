import { connect } from "react-redux";
import Quantity from "../components/Quantity";

const mapStateToProps = (state) => {
  return {
    quantity: state.quantity
  };
};

const QuantityContainer = connect(mapStateToProps)(Quantity);

export default QuantityContainer;