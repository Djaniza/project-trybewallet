import {
  DELETE_EXPENSE,
  GET_CURRENCY_SUCCESS,
  GET_EXPENSES,
} from '../actions';

const INICIAL_STATE = {
  expenses: [],
  id: 0,
  exchangeRates: [],
  currencies: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY_SUCCESS:
    return { ...state,
      currencies: Object.keys(action.data),
      exchangeRates: action.data,
    };

  case GET_EXPENSES:
    return { ...state,
      expenses: [...state.expenses,
        { id: state.expenses.length,
          ...action.expenses,
          exchangeRates: state.exchangeRates }],
    };

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== Number(action.id)),
    };

  default: return state;
  }
};

export default wallet;
