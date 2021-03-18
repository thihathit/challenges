import { useState } from 'react';

import http from 'isomorphic-fetch';

const API_ENDPOINT = 'http://localhost:3001';

// Response Resolver
const httpResolver = (res) => {
  if (!res.ok) throw new Error(res.statusText);

  return res.json();
};

export const useCharities = () => {
  const initialState = {
    loading: false,
    data: [],
    error: null,
  };

  const [state, setState] = useState(initialState);

  const get = async () => {
    // On Request state
    setState((old) => ({
      ...old,
      loading: true,
      error: initialState.error,
    }));

    // Api get
    await http(`${API_ENDPOINT}/charities`)
      .then(httpResolver)
      // Success
      .then((data) => {
        setState((old) => ({
          ...old,
          data,
        }));
      })
      // Error
      .catch((err) => {
        setState((old) => ({
          ...old,
          error: err.message,
        }));
      });

    // After Request state
    setState((old) => ({
      ...old,
      loading: false,
    }));
  };

  return {
    state,
    get,
  };
};

export const usePayments = () => {
  const initialState = {
    loading: false,
    data: [],
    error: null,
  };

  const [state, setState] = useState(initialState);

  const get = async () => {
    // On Request state
    setState((old) => ({
      ...old,
      loading: true,
      error: initialState.error,
    }));

    // Api get
    await http(`${API_ENDPOINT}/payments`)
      .then(httpResolver)
      // Success
      .then((data) => {
        setState((old) => ({
          ...old,
          data,
        }));
      })
      // Error
      .catch((err) => {
        setState((old) => ({
          ...old,
          error: err.message,
        }));
      });

    // After Request state
    setState((old) => ({
      ...old,
      loading: false,
    }));
  };

  return {
    state,
    get,
  };
};

export const useDonations = () => {
  const initialState = {
    get: {
      loading: false,
      data: [],
      error: null,
    },
    post: {
      loading: false,
      data: null,
      error: null,
    },
  };

  const [state, setState] = useState(initialState);

  const get = async () => {
    // On Request state
    setState((old) => ({
      ...old,
      get: {
        ...old.get,
        loading: true,
        error: initialState.error,
      },
    }));

    // Api get
    await http(`${API_ENDPOINT}/donations`)
      .then(httpResolver)
      // Success
      .then((data) => {
        setState((old) => ({
          ...old,
          get: {
            ...old.get,
            data,
          },
        }));
      })
      // Error
      .catch((err) => {
        setState((old) => ({
          ...old,
          get: {
            ...old.get,
            error: err.message,
          },
        }));
      });

    // After Request state
    setState((old) => ({
      ...old,
      get: {
        ...old.get,
        loading: false,
      },
    }));
  };

  const post = async ({ charityId, paymentId, currency, amount }) => {
    const payload = { charityId, paymentId, currency, amount };

    // On Request state
    setState((old) => ({
      ...old,
      post: {
        ...old.post,
        loading: true,
        error: initialState.error,
      },
    }));

    // Api post
    await http(`${API_ENDPOINT}/donations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(httpResolver)
      // Success
      .then((data = null) => {
        setState((old) => ({
          ...old,
          post: {
            ...old.post,
            data,
          },
        }));
      })
      // Error
      .catch((err) => {
        setState((old) => ({
          ...old,
          post: {
            ...old.post,
            error: err.message,
          },
        }));
      });

    // After Request state
    setState((old) => ({
      ...old,
      post: {
        ...old.post,
        loading: false,
      },
    }));
  };

  return {
    state,
    get,
    post,
  };
};
