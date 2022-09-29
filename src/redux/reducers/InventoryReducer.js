import {
  LOAD_INVENTARY,
  SEARCH_INVENTORY,
  MY_INVENTORY,
  RUNNING_LOW,
  SET_CURRENT_PAGE,
  ADD_INVENTORIES,
  DECREMENT_INVENTORIES,
  SAVE_AND_CLEAN_MY_ORDERED_INVENTORY,
  INCREMENT_RUNN_LOW,
  DECREMENT_RUNN_LOW,
  ADD_SEARCH_FILTER_MY_INVENTORY,
  INCREMENT_INVENTORY_PAGE,
  DECREMENT_INVENTORY_PAGE,
} from '../types';

const initialState = {
  inventories: [],
  myInventories: [],
  filterMyInventories: [],
  runningLow: [],
  totalRunLow: 1,

  totalInventories: 50,
  currPage: 1,
  orderInventories: [],
  orderRunnLow: [],
};

export const InventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INVENTARY: {
      const { count, rows } = action.payload;
      return {
        ...state,
        inventories: rows,
        totalInventories: count,
      };
    }
    case SEARCH_INVENTORY: {
      const { count, rows } = action.search;
      return {
        ...state,
        inventories: rows,
        totalInventories: count,
      };
    }
    case MY_INVENTORY: {
      return {
        ...state,
        myInventories: action.addInventory,
        filterMyInventories: action.addInventory,
      };
    }
    case RUNNING_LOW: {
      return {
        ...state,
        runningLow: action.runLow,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currPage: action.page,
      };
    }

    case INCREMENT_INVENTORY_PAGE: {
      return {
        ...state,
        currPage: currPage + 1,
      };
    }
    case DECREMENT_INVENTORY_PAGE: {
      return {
        ...state,
        currPage: currPage - 1,
      };
    }

    case ADD_INVENTORIES: {
      const { orderInventories } = state;
      const { name, price, inventory } = action;
      const index = orderInventories.findIndex(item => item.id === inventory);
      if (index === -1) {
        const newAddInv = { id: inventory, quantity: 1, name, price };
        return {
          ...state,
          orderInventories: [...orderInventories, newAddInv],
        };
      } else {
        const newInventories = [...orderInventories];
        newInventories[index].quantity = newInventories[index].quantity + 1;
        return {
          ...state,
          orderInventories: newInventories,
        };
      }
    }

    case DECREMENT_INVENTORIES: {
      const { orderInventories } = state;
      const { name, price, inventory } = action;
      const index = orderInventories.findIndex(
        item => item.id === action.decInventory,
      );
      if (index === -1) {
        return {
          ...state,
        };
      } else if (orderInventories[index].quantity > 1) {
        const newInventories = [...orderInventories];
        newInventories[index].quantity = newInventories[index].quantity - 1;
        return {
          ...state,
          orderInventories: newInventories,
        };
      } else {
        const newInventories = orderInventories.filter(
          item => item.id !== action.decInventory,
        );
        return {
          ...state,
          orderInventories: newInventories,
        };
      }
    }

    case SAVE_AND_CLEAN_MY_ORDERED_INVENTORY: {
      if (!action.flag) {
        return {
          ...state,
          orderInventories: [],
        };
      } else {
        return {
          ...state,
          orderRunnLow: [],
        };
      }
    }
    case INCREMENT_RUNN_LOW: {
      const { orderRunnLow } = state;
      const { name, price, runLowIncID } = action;
      const index = orderRunnLow.findIndex(item => item.id === runLowIncID);
      if (index === -1) {
        const newAddRunLow = { id: runLowIncID, quantity: 1, name, price };
        return {
          ...state,
          orderRunnLow: [...orderRunnLow, newAddRunLow],
        };
      } else {
        const newAddRuLow = [...orderRunnLow];
        newAddRuLow[index].quantity = newAddRuLow[index].quantity + 1;
        return {
          ...state,
          orderRunnLow: newAddRuLow,
        };
      }
    }

    case DECREMENT_RUNN_LOW: {
      const { orderRunnLow } = state;
      const { runLowDecID } = action;
      const index = orderRunnLow.findIndex(item => item.id === runLowDecID);
      if (index === -1) {
        return {
          ...state,
        };
      } else if (orderRunnLow[index].quantity > 1) {
        const newDecRunLow = [...orderRunnLow];
        newDecRunLow[index].quantity = newDecRunLow[index].quantity - 1;
        return {
          ...state,
          orderRunnLow: newDecRunLow,
        };
      } else {
        const newOrderRunnLow = orderRunnLow.filter(
          item => item.id !== runLowDecID,
        );
        return {
          ...state,
          orderRunnLow: newOrderRunnLow,
        };
      }
    }

    case ADD_SEARCH_FILTER_MY_INVENTORY: {
      return {
        ...state,
        filterMyInventories: action.searchFilterInv,
      };
    }

    default:
      return state;
  }
};
