import { createStore } from 'redux';

const initialState = {
  total_donations: 0,
};

const Reducer = (state = initialState, action = {}) => {
  const { type, value } = action;

  switch (type) {
    case 'UPDATE_TOTAL_DONATIONS': {
      return {
        ...state,
        total_donations: value,
      };
    }

    default: {
      return state;
    }
  }
};

const Store = createStore(Reducer);

export default Store;
