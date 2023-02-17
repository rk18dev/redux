import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [{
    id:123,
    name:"ramakrishna",
    Depart:"IT"
  }],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};




  