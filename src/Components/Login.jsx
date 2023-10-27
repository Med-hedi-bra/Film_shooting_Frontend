import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert } from "@mui/material";
import { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
   try {
    let res = await auth
      .login({
        email: data.get("email"),
        password: data.get("password"),
      })
      const dataJson = await res.json();

      if (dataJson.token) {
        auth.setUser(dataJson);
        localStorage.setItem("user", JSON.stringify(dataJson));
        navigate("/dashbored")
      }
      else if(dataJson.error){
        console.log(false)
        setErrorMsg("Email ou Mot de passe incorrect")
      }
     
   } catch (error) {
    setErrorMsg("Erreur au niveau de serveur")
   }

 
      // .then(() => {
      //   console.log(auth.user?.token)
      //   if (auth.user?.token) {
      //     navigate("/dashbored");
      //   } else {
      //     setErrorMsg("Email ou mot de passe incorrect");
      //   }
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
  };
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <br />
        {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
