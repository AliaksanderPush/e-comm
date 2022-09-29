import { ADD_IN_SELLING, CLEAR_SELLING_LIST, REMOVE_SELING } from '../types';

const initialState = {
  sellingInv: [],
};

export const SellingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IN_SELLING: {
      return {
        ...state,
        sellingInv: [...state.sellingInv, action.sellings],
      };
    }
    case REMOVE_SELING: {
      const { invId } = action;
      const newListInv = state.sellingInv.filter(
        item => item.inventoryId !== invId,
      );
      return {
        ...state,
        sellingInv: newListInv,
      };
    }

    case CLEAR_SELLING_LIST: {
      return {
        ...state,
        sellingInv: [],
      };
    }

    default:
      return state;
  }
};
