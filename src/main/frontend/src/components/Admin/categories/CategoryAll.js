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
  Link,
} from "@material-ui/core";

const useStyles = makeStyles()

function CategoryAll() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/categories/all")
      .then((res) => res.data)
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="categories_crud">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">desc</TableCell>
              <TableCell align="right">parent</TableCell>
              <TableCell align="right">icon</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell component="th" scope="row">
                  {category.id}
                </TableCell>
                <TableCell align="right">{category.name}</TableCell>
                <TableCell align="right">{category.desc}</TableCell>
                <TableCell align="right">{category.parent}</TableCell>
                <TableCell align="right">{category.icon}</TableCell>
                <TableCell align="right"><Link href={`/admin/categories/${category.id}/edit`}>Edit</Link></TableCell>
                <TableCell align="right"><Link href={`/admin/categories/${category.id}/remove`}>Remove</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {error ? <p>{error}</p> : null}
    </div>
  );
}

export default CategoryAll;
