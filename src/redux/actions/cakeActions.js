export const ORDER_CAKE = 'ORDER_CAKE';
export const RESTOCK_CAKE = 'RESTOCK_CAKE';

export const orderCake = num => {
  return {
    type: ORDER_CAKE,
    payload: num,
  };
};

export const restockCake = () => {
  return {
    type: RESTOCK_CAKE,
  };
};
