import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function useJsonFetch(url, opts) {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    function checkResponseCode(response) {
      switch (response.status) {
        case 200:
        case 201:
          setState((oldState) => ({ ...oldState, error: null }));
          return response.json();
        case 400:
        case 500:
          setState((oldState) => ({ ...oldState, error: response.status }));
          break;
        default:
          setState((oldState) => ({ ...oldState, error: response.status }));
      }
    }

    setState((oldState) => ({ ...oldState, loading: true }));

    fetch(url)
      .then(checkResponseCode)
      .then((responseJson) => {
        setState((oldState) => ({ ...oldState, data: responseJson }));
      })
      .catch((error) => {
        setState((oldState) => ({ ...oldState, error: error }));
      })
      .finally(() => setState((oldState) => ({ ...oldState, loading: false })));
  }, [url]);

  return [state.data, state.loading, state.error];
}

useJsonFetch.propTypes = {
  url: PropTypes.string.isRequired,
  opts: PropTypes.object,
};
