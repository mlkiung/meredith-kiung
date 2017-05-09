import { combineReducers } from 'redux'

// import allProducts from './allProducts';
// import allReviews from './allReviews';
// import selectedProduct from './selectedProductReducer';
// import productsInCategory from './selectedCategory';
// import cart from './cart';
import newPostReducer from './newPostReducer'

const rootReducer = combineReducers({
  // auth: require('./auth').default,
  // selectedProduct,
  // allProducts,
  // cart,
  // allReviews,
  // productsInCategory
  newPostReducer
})

export default rootReducer
