import React, { useState, useEffect } from "react";
function Data() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return <div>{data.message}</div>;
}
export default Data;
