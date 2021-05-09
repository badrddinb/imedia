import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CategoryEdit() {
  const { categoryId } = useParams();
  const [currentCategory, setCurrentCategory] = useState({});
  const [currentParent, setCurrentParent] = useState("");

  const [categories, setCategories] = useState([]);
  const [formValue, setFormValue] = useState({
    id: 0,
    name: "",
    desc: "",
    parent: "",
    icon: "",
  });
  const [editedStatus, setEditedStatus] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/categories/all")
      .then((res) => res.data)
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => setError(error));
    axios
      .get(`http://localhost:8080/api/categories/${categoryId}`)
      .then((res) => res.data)
      .then((data) => {
        setCurrentCategory(data);
        axios
          .get(`http://localhost:8080/api/categories/${data.parent}`)
          .then((res) => res.data)
          .then((data) => {
            setCurrentParent(data.name);
          });
      });
  }, [categoryId, currentCategory]);

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

    const updatedCategory = formValue
    updatedCategory.id = categoryId

    axios
      .put(`http://localhost:8080/api/categories/`, updatedCategory)
      .then((response) => {
        response.status === 200 ? setEditedStatus(2) : setEditedStatus(1)
      })
      .catch((_error) => setEditedStatus(1));
  };

  return (
    <div className="category_edit">
      <div>
        <h1>Current Category</h1>
        <p>{currentCategory.id}</p>
        <p>{currentCategory.name}</p>
        <p>{currentCategory.desc}</p>
        <p>{currentParent}</p>
        <p>{currentCategory.icon}</p>
      </div>
      <div>
        <h1>Edit Category {currentCategory.id}</h1>
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
                    return  (
                      category.id !== categoryId ?
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option> : null
                    )
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
          <button type="submit">Update category</button>
        </form>
        {editedStatus === 2 ? (
          <p>Success: Current category has been updated!</p>
        ) : editedStatus === 1 ? (
          <p>Failure: Unable to update current category!</p>
        ) : null}
        {error ? <p>{error}</p> : null}
      </div>
    </div>
  );
}

export default CategoryEdit;
