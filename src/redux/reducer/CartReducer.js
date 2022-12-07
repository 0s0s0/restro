const initialState = {
  products: [],
  cartCount: 0,
  whishListCount: 1,
  totalAmount: 0,
  cartProducts: [],
  favoriteProducts: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS":
      return {
        ...state,
        products: [...action.products],
      };
    case "ADD_ITEMS": {
      let updateProduct = state.products.map((i) => {
        if (i.id === action.data.id) {
          return { ...i, itemCount: i.itemCount + 1 };
        } else return i;
      });
      let cartUpdate = updateProduct.filter((i) => i.id === action.data.id);
      return {
        ...state,
        cartCount: state.cartCount + 1,
        totalAmount: action.data + state.totalAmount,
        products: [...updateProduct],
        cartProducts: [...state.cartProducts, ...cartUpdate],
      };
    }
    case "INC": {
      let updateProduct = state.products.map((i) => {
        if (i.id === action.data.id) {
          return { ...i, itemCount: i.itemCount + 1 };
        } else return i;
      });
      let cartUpdate = state.cartProducts.map((i) => {
        if (i.id === action.data.id) {
          return { ...i, itemCount: i.itemCount + 1 };
        } else return i;
      });
      return {
        ...state,
        cartCount: state.cartCount + 1,
        totalAmount: action.data + state.totalAmount,
        products: [...updateProduct],
        cartProducts: [...cartUpdate],
      };
    }

    case "DEC": {
      let updateProduct = state.products.map((i) => {
        if (i.id === action.data.id) {
          return { ...i, itemCount: i.itemCount - 1 };
        } else return i;
      });
      let cartUpdate = state.cartProducts.map((i) => {
        if (i.id === action.data.id) {
          return { ...i, itemCount: i.itemCount - 1 };
        } else return i;
      });
      return {
        ...state,
        cartCount: state.cartCount - 1,
        totalAmount: action.data + state.totalAmount,
        products: [...updateProduct],
        cartProducts: [...cartUpdate],
      };

      // let updateProduct = state.products.map((i) => {
      //   if (i.id === action.data.id) {
      //     return { ...i, itemCount: i.itemCount - 1 };
      //   } else return i;
      // });
      // let cartUpdate = state.cartProducts.filter((i) => {
      //   if (i.id === action.data.id) {
      //     if (action.data.itemCount === 1) {
      //       return;
      //     }
      //     return { ...i, itemCount: i.itemCount - 1 };
      //   } else return i;
      // });

      // return {
      //   ...state,
      //   cartCount: state.cartCount - 1,
      //   totalAmount: action.data + state.totalAmount,
      //   products: [...updateProduct],
      //   cartProducts: [...cartUpdate],
      //   // cartProducts: state.cartProducts.filter((i) => i.id !== action.data.id),
      // };
    }

    case "REMOVE": {
      let updateProductsItem = state.products.map((i) => {
        if (i.id === action.data.id) {
          return { ...i, itemCount: 0 };
        } else return i;
      });
      return {
        ...state,
        cartProducts: state.cartProducts.filter((i) => i.id !== action.data.id),
        cartCount: state.cartCount - 1,
        products: updateProductsItem,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
