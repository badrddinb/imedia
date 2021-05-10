import { Route, Switch } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import {
  makeStyles,
  Container,
  Grid,
  TextField,
  Button,
  Link
} from "@material-ui/core";

import Categories from "./Admin/Categories";
import Products from "./Admin/Products";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

export default function Admin({ match }) {
  const classes = useStyles();

  return (
    <Switch>
      <Route path={`${match.path}/categories`} component={Categories} />
      <Route path={`${match.path}/products`} component={Products} />
      <Route path={`${match.path}/`}>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link active href="/admin">Admin</Nav.Link>
          <Nav.Link href="/admin/products">Products</Nav.Link>
          <Nav.Link href="/admin/categories">Categories</Nav.Link>
          <Nav.Link href="/">Home (Back)</Nav.Link>
        </Nav>
      </Navbar>
        <Container className={classes.container} maxWidth="xs">
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      size="small"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Log in
                </Button>
              </Grid>
            </Grid>
          </form>
          <p style={{marginTop: "10px", textAlign: "center"}}>This is only a demo form - Follow those links to make CRUD operations!</p>
          <Link href="/admin/products"><Button fullWidth color="secondary">Product CRUD</Button></Link>
          <Link href="/admin/categories"><Button fullWidth color="secondary">Category CRUD</Button></Link>
        </Container>
      </Route>
    </Switch>
  );
}
