import React from "react";
import PropTypes from "prop-types";
import useJsonFetch from "../hooks/useJsonFetch";

function GetData(props) {
  const url = process.env.REACT_APP_DATA_URL + props.url;
  const opts = [];

  const [data, loading, error] = useJsonFetch(url, opts);

  return (
    <div>
      <h2>{props.header}</h2>
      {loading && <progress />}
      {error && <p>Code: {error}</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}

GetData.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GetData;
