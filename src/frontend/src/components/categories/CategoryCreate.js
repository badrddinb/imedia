import { useState, useEffect } from "react";
import axios from "axios";

function CategoryCreate() {
  const [categories, setCategories] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
    desc: "",
    parent: "",
    icon: "",
  });
  const [createStatus, setCreateStatus] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/categories/all")
      .then((res) => res.data)
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => setError(error));
  }, []);

  const handleChange = async (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const newState = { ...formValue };
    newState[name] = value;

    setFormValue(newState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/categories/create", formValue)
      .then((response) => {
        response.status === 201 ? setCreateStatus(2) : setCreateStatus(1)
      })
      .catch((_error) => setCreateStatus(1));
  };

  return (
    <div className="category_create">
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
          <label htmlFor="parent">Parent Category </label>
          <select
            id="parent"
            name="parent"
            value={formValue.parent}
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
          <label htmlFor="icon">Icon URL </label>
          <input
            type="text"
            id="icon"
            value={formValue.icon}
            name="icon"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create category</button>
      </form>
      {createStatus === 2 ? (
        <p>Success: New category has been created!</p>
      ) : createStatus === 1 ? (
        <p>Failure: Unable to create new category!</p>
      ) : null}
      {error ? <p>{error}</p> : null}
    </div>
  );
}

export default CategoryCreate;
