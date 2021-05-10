import { v4 as uuidv4 } from "uuid";
import Cakes from "./data";

const reducer = (state, action) => {
  let tempBasket;
  let tempCakes;

  switch (action.type) {
    case "GET_CAKES":
      tempCakes = Cakes.map((cake) => {
        return { ...cake, qty: 0 };
      });
      return { ...state, cakes: tempCakes };
    case "TOGGLE_BASKET":
      return { ...state, isShoppingBasketOpen: !state.isShoppingBasketOpen };
    case "ADD_ITEM":
      tempCakes = state.cakes.map((cake) => {
        if (cake.name === action.payload.itemName) {
          let newQuantity = cake.qty + 1;
          return { ...cake, qty: newQuantity };
        }
        return cake;
      });
      return {
        ...state,
        shoppingBasket: [
          ...state.shoppingBasket,
          {
            itemId: uuidv4(),
            itemName: action.payload.itemName,
            price: action.payload.itemPrice,
            qty: 1,
            subtotal: action.payload.itemPrice,
          },
        ],
        cakes: tempCakes,
      };
    case "REMOVE_ITEM":
      tempBasket = state.shoppingBasket.filter(
        (item) => item.itemName !== action.payload
      );
      tempCakes = state.cakes.map((cake) => {
        if (cake.name === action.payload) {
          return { ...cake, qty: 0 };
        }
        return cake;
      });
      return { ...state, shoppingBasket: tempBasket, cakes: tempCakes };
    case "INCREMENT":
      tempBasket = state.shoppingBasket.map((item) => {
        if (item.itemName === action.payload) {
          let newQuantity = item.qty + 1;
          let newSubtotal = parseFloat((item.price * newQuantity).toFixed(2));
          return { ...item, qty: newQuantity, subtotal: newSubtotal };
        }
        return item;
      });
      tempCakes = state.cakes.map((cake) => {
        if (cake.name === action.payload) {
          let newCakeQty = cake.qty + 1;
          return { ...cake, qty: newCakeQty };
        }
        return cake;
      });
      return { ...state, shoppingBasket: tempBasket, cakes: tempCakes };
    case "DECREMENT":
      tempBasket = state.shoppingBasket
        .map((item) => {
          if (item.itemName === action.payload) {
            let newQuantity = item.qty - 1;
            let newSubtotal = parseFloat((item.price * newQuantity).toFixed(2));
            return { ...item, qty: newQuantity, subtotal: newSubtotal };
          }
          return item;
        })
        .filter((item) => item.qty > 0);
      tempCakes = state.cakes.map((cake) => {
        if (cake.name === action.payload) {
          let newCakeQty = cake.qty > 0 ? cake.qty - 1 : 0;
          return { ...cake, qty: newCakeQty };
        }
        return cake;
      });
      return { ...state, shoppingBasket: tempBasket, cakes: tempCakes };
    case "UPDATE_TOTALS":
      let newQuantity,
        newTotal = 0;
      if (state.shoppingBasket) {
        newQuantity = state.shoppingBasket.reduce((currentQuantity, item) => {
          return item.qty + currentQuantity;
        }, 0);
        newTotal = state.shoppingBasket.reduce((currentTotal, item) => {
          return item.subtotal + currentTotal;
        }, 0);
      }
      return {
        ...state,
        numberOfItems: newQuantity,
        total: newTotal,
      };
    default: {
      throw new Error("Action Type Not Found");
    }
  }
};

export default reducer;
