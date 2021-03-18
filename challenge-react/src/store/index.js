import { createStore } from 'redux';

const initialState = {
  notifications: null,
};

const Reducer = (state = initialState, action = {}) => {
  const { type, value } = action;

  switch (type) {
    case 'SET_NOTIFICATION': {
      return {
        ...state,
        notifications: value,
      };
    }

    case 'CLEAR_NOTIFICATION': {
      return {
        ...state,
        notifications: initialState.notifications,
      };
    }

    default: {
      return state;
    }
  }
};

const Store = createStore(Reducer);

export default Store;
