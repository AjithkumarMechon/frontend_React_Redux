import {
  deleteProduct,
  fetchData,
  fetchSelectedData,
  sendPostProduct,
} from "../Redux/action";
import Product from "./Product";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { getProducts } from "../Redux/product.selector";
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { fetchData, fetchSelectedData, deleteProduct, sendPostProduct },
    dispatch
  ),
});
const mapStateToProps = createStructuredSelector({
  productsData: getProducts,
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
