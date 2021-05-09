import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductRemove() {
  const { productId } = useParams();
  const [deleteStatus, setDeleteStatus] = useState(0);

  useEffect(() => {
      axios
      .delete(`http://localhost:8080/api/products/${productId}/`)
      .then((response) => {
        response.status === 204 ? setDeleteStatus(2) : setDeleteStatus(1)
      })
      .catch((_error) => setDeleteStatus(1));
  }, [productId]);

  return (
    <div className="product">
      {deleteStatus === 2 ? (
          <p>Success: Current product has been deleted!</p>
        ) : deleteStatus === 1 ? (
          <p>Failure: Unable to delete product!</p>
        ) : null}
    </div>
  );
}

export default ProductRemove;
