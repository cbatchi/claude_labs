import React from "react"
import {
  CssBaseline,
  Container,
  AppBar,
  Grid,
  Typography,
  Grow,
} from "@mui/material"
import Form from './components/form/Form'
import Posts from './components/posts/Posts'
import Logo from "./assets/photo.png"
import useStyles from './styles';
const App = () => {
  const classes = useStyles();
  

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h2" align="center">
            The-memories
          </Typography>
          <img className={classes.image} src={Logo} alt="memories" height={60} />
        </AppBar>
        <Grow>
          <Container>
            <Grid
              container
              justify={"space-between"}
              alignItems={"stretch"}
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  )
}

export default App
