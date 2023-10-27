import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
function Admin() {
    const handleDelete = ()=>{
        console.log("delete")
      }
  return (
    <>
      <div style={{ marginLeft: "50px" }}>
        <h2>Liste de Tous les Demandes</h2>
      </div>

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
          <Card
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
                Demande numero 12
              </Typography>
              <br />
              <Typography variant="h5" component="div">
                Type de Tournage:
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Film LM
              </Typography>
              <Divider></Divider>
              <br />
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Date: De 12:00 12/04/2023 à 15:00 15/04/2023
                </Typography>
              <Typography variant="h5" component="div">
                Occupation du domaine public:
              </Typography>
              <br />
             
            </CardContent>
            <CardActions>
              <Button size="small" ><Link to={`/demand/12`} style={{textDecoration:"none" , color:"inherit"}}>Voir plus le details</Link></Button>
            </CardActions>
          </Card>
        </Box>
        <br />
        
      </List>
    </>
  )
}

export default Admin