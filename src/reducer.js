import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  let tempBasket;

  switch (action.type) {
    case "TOGGLE_BASKET":
      return { ...state, isShoppingBasketOpen: !state.isShoppingBasketOpen };
    case "ADD_ITEM":
      //Check of the item is already in the basket.
      if (
        state.shoppingBasket.some(
          (basketItem) => basketItem.itemName === action.payload.itemName
        )
      ) {
        tempBasket = state.shoppingBasket.map((item) => {
          if (item.itemName === action.payload.itemName) {
            let newQuantity = item.qty + 1;
            let newSubtotal = parseFloat((item.price * newQuantity).toFixed(2));
            return { ...item, qty: newQuantity, subtotal: newSubtotal };
          }
          return item;
        });
        return { ...state, shoppingBasket: tempBasket };
      } else {
        //If it is not already on the basket, add it
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
        };
      }
    case "REMOVE_ITEM":
      tempBasket = state.shoppingBasket.filter(
        (item) => item.itemName !== action.payload
      );
      return { ...state, shoppingBasket: tempBasket };
    case "INCREMENT":
      tempBasket = state.shoppingBasket.map((item) => {
        if (item.itemName === action.payload) {
          let newQuantity = item.qty + 1;
          let newSubtotal = parseFloat((item.price * newQuantity).toFixed(2));
          return { ...item, qty: newQuantity, subtotal: newSubtotal };
        }
        return item;
      });
      return { ...state, shoppingBasket: tempBasket };
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
      return { ...state, shoppingBasket: tempBasket };
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
