import { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  makeStyles,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link
} from "@material-ui/core";

const useStyles = makeStyles();
// {
//   table: {
//     minWidth: 650,
//   },
// }

function ProductAll() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products/all")
      .then((res) => res.data)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="products_crud">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">desc</TableCell>
              <TableCell align="right">prices</TableCell>
              <TableCell align="right">categoryId</TableCell>
              <TableCell align="right">image</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="right">{product.name}</TableCell>
                <TableCell align="right">{product.desc}</TableCell>
                <TableCell align="right">
                  <Table>
                    <TableHead>
                    <TableCell>EURO</TableCell>
                    <TableCell align="right">USD</TableCell>
                    <TableCell align="right">GBP</TableCell>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                      {product.prices.map((price) => {
                          return <TableCell align="right">{price}</TableCell>
                      })}
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableCell>
                <TableCell align="right">{product.categoryId}</TableCell>
                <TableCell align="right">{product.image}</TableCell>
                <TableCell align="right"><Link href={`/admin/products/${product.id}/edit`}>Edit</Link></TableCell>
                <TableCell align="right"><Link href={`/admin/products/${product.id}/remove`}>Remove</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {error ? <p>{error}</p> : null}
    </div>
  );
}

export default ProductAll;
