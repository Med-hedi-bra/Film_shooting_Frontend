import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { useState } from "react";
import { Alert } from "@mui/material";
import Services from "./Services";


export default function Signup() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [errorMsg, setErrorMsg] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      let res = await auth.signup({
        email: data.get("email"),
        password: data.get("password"),
        nom: data.get("nom"),
        fonction: data.get("fonction"),
        societe: data.get("societe"),
        interlocuteur: data.get("interlocuteur"),
        tel: data.get("tel"),
        fax: data.get("fax"),
      });
      const dataJson = await res.json();

      if (dataJson.token) {
        auth.setUser(dataJson);
        localStorage.setItem("user", JSON.stringify(dataJson));
        // to create a user in the chat engine api
        Services.getOrCreateUserandChat(dataJson.email)

        navigate("/dashbored");
      }
    } catch (error) {
      setErrorMsg("Erreur au niveau de serveur");
    }
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
          Sign up
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="nom"
            label="Nom"
            name="nom"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="prenom"
            label="Prénom"
            name="prenom"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="fonction"
            label="Fontion / Qualité"
            name="fonction"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="societe"
            label="Société, association, institution publique"
            name="societe"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="interlocuteur"
            label="Interlocuteur"
            name="interlocuteur"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="tel"
            label="Téléphone"
            name="tel"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="fax"
            label="Fax"
            name="fax"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <br />
          {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Do you have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
