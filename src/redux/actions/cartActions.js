export const addToCart = (data) => {
  console.log("add to cart", data);
  return {
    type: "ADD_ITEMS",
    data: data,
  };
};

export const increment = (data) => {
  console.log("increment", data);
  return {
    type: "INC",
    data: data,
  };
};

export const decrement = (data) => {
  console.log("decrement", data);
  return {
    type: "DEC",
    data: data,
  };
};

export const removeCartProduct = (data) => {
  console.log();
  return {
    type: "REMOVE",
    data: data,
  };
};
