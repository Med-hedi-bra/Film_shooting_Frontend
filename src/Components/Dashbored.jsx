import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { Divider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Services from "./Services";
import { useState } from "react";
import { useAuth } from "./Auth";
function Dashbored() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [demands, setDemands] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    if (auth.user?.idUser) {
      if (auth.user?.role === "100") {
        Services.getAllDemandsByUser(auth.user?.idUser)

          .then((res) => {
            res.json().then((res1) => {
              setDemands(res1?.reverse());
              setIsLoading(false);
            });
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(true);
          });
      } else if (auth.user?.role === "101") {
        Services.getAllDemands()

          .then((res) => {
            res.json().then((res1) => {
              // setDemands(res1);
              setDemands(res1?.reverse());
              setIsLoading(false);
            });
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(true);
          });
      }
    }
  }, [auth.user]); // we had to set the dependency to auth.user because when we refresh the page the component is render before the auth initilization which cause a problem

  const handleNewDemand = () => {
    navigate("/add");
  };
  return (
    
    
    <div>
      <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div style={{ textAlign:"center" }}>
            {auth.user?.role === "101" && <h2>Liste de Tous Les Demandes</h2>}
            {auth.user?.role === "100" && <h2>Liste de vos Demandes</h2>}
          </div>
          <div style={{textAlign:"center" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: "green" }}
              onClick={handleNewDemand}
            >
              Ajouter une Nouvelle Demande
            </Button>
          </div>
          <br />
          <br />

          <List
            sx={{
              width: "100%",
              maxWidth: 900,
              bgcolor: "#CEE6F3",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Box>
              {/************  here to map demands *****************/}
              {demands?.length === 0 ? (
                <h2 style={{ marginLeft: "20px" }}>
                  Aucune demande disponible
                </h2>
              ) : (
                demands?.map((item, index) => (
                  <Card
                    key={item.idDemand}
                    sx={{
                      minWidth: 275,
                      marginLeft: "20px",
                      marginRight: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <CardContent style={{ marginLeft: "20px" }}>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Demande numéro : {item.idDemand}
                      </Typography>
                      <br />
                      <Typography variant="h5" component="div">
                        Type de Tournage: {item.selectedTournageType}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {item.tournageType}
                      </Typography>
                      <Divider></Divider>
                      <br />
                      <Typography variant="h5" component="div">
                        Date de création de demande:
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {item.dateCreation?.split("T")[0]}
                      </Typography>

                      <br />
                    </CardContent>
                    <CardActions>
                      <Button size="small">
                        <Link
                          to={`/demand/${item.idDemand}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          Voir plus les details
                        </Link>
                      </Button>
                    </CardActions>
                  </Card>
                ))
              )}
            </Box>
            <br />
          </List>
        </>
      )}
    </div>
    </div> 
  );
}

export default Dashbored;
