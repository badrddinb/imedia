import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CategoryRemove() {
  const { categoryId } = useParams();
  const [deleteStatus, setDeleteStatus] = useState(0);

  useEffect(() => {
      axios
      .delete(`http://localhost:8080/api/categories/${categoryId}/`)
      .then((response) => {
        response.status === 204 ? setDeleteStatus(2) : setDeleteStatus(1)
      })
      .catch((_error) => setDeleteStatus(1));
  }, [categoryId]);

  return (
    <div className="category">
      {deleteStatus === 2 ? (
          <p>Success: Current category has been deleted!</p>
        ) : deleteStatus === 1 ? (
          <p>Failure: Unable to delete category!</p>
        ) : null}
    </div>
  );
}

export default CategoryRemove;
