import axios from "axios";
import { useEffect } from "react";
import { React, useState } from "react";

const Products = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://seemly-business-production.up.railway.app/api/v1/category")
      .then((res) => setCategory(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button className="button btn-primary"></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
