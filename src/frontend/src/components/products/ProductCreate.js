import { useState, useEffect } from "react";
import axios from "axios";

function ProductCreate() {
  const [categories, setCategories] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
    desc: "",
    prices: ["0", "0", "0"],
    categoryId: "",
    image: "",
  });
  const [createStatus, setCreateStatus] = useState(0);
  const [error, setError] = useState("");
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/categories/all")
      .then((res) => res.data)
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => setError(error));
    axios
      .get("http://data.fixer.io/api/latest?access_key=323303fa22c84148b2a8ab1bd48d107d&symbols=USD,GBP&format=1")
      .then((res) => res.data)
      .then((data) => {
        setExchangeRates(data.rates);
      })
      .catch((error) => setError(error));
  }, []);

  const handleChange = async (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const newState = { ...formValue };

    if (name === "prices") {
        let usd = exchangeRates["USD"] * Number(value)
        let gpb = exchangeRates["GBP"] * Number(value)
        newState.prices = [value.toString(), usd.toString(), gpb.toString()]
    } else {
        newState[name] = value;
    }

    setFormValue(newState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/products/create", formValue)
      .then((response) => {
        response.status === 201 ? setCreateStatus(2) : setCreateStatus(1);
      })
      .catch((_error) => setCreateStatus(1));
  };

  return (
    <div className="product_create">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValue.name}
            min="0"
            max="50"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="desc">Description </label>
          <input
            type="text"
            id="desc"
            name="desc"
            value={formValue.desc}
            onChange={handleChange}
            min="0"
            max="1000"
            required
          />
        </div>
        <div>
          <label htmlFor="prices">Price (EUR &euro;) </label>
          <input
            type="number"
            id="prices"
            name="prices"
            value={formValue.prices[0]}
            onChange={handleChange}
            min="0"
            required
          />
          <label htmlFor="prices"> - Price (USD &#36;) </label>
          <input
            type="number"
            value={formValue.prices[1]}
            onChange={handleChange}
            min="0"
            disabled
            required
          />
          <label htmlFor="prices"> - Price (GBP &pound;) </label>
          <input
            type="number"
            value={formValue.prices[2]}
            onChange={handleChange}
            min="0"
            disabled
            required
          />
        </div>
        <div>
          <label htmlFor="categoryId">Category </label>
          <select
            id="categoryId"
            name="categoryId"
            value={formValue.categoryId}
            onChange={handleChange}
          >
            <option key="0" value="">
              No parent
            </option>
            {categories.length > 0
              ? categories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })
              : null}
          </select>
        </div>
        <div>
          <label htmlFor="image">Image URL </label>
          <input
            type="text"
            id="image"
            value={formValue.image}
            name="image"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create product</button>
      </form>
      {createStatus === 2 ? (
        <p>Success: New product has been created!</p>
      ) : createStatus === 1 ? (
        <p>Failure: Unable to create new product!</p>
      ) : null}
      {error ? <p>{error}</p> : null}
    </div>
  );
}

export default ProductCreate;
