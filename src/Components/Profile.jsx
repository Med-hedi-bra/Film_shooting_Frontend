import React from 'react'
import { useAuth } from './Auth'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Profile() {
  const auth = useAuth()
  return (
    <div>
      <h2 style={{textAlign:"center" , }}>Profile</h2>
   <Card sx={{ minWidth: 275 , marginLeft:"20px" , marginRight:"20px" , marginTop:"40px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Identifiant : {auth.user?.idUser}
        </Typography>
        <Typography variant="h5" component="div">
        Nom : {auth.user?.nom}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Fonction : {auth.user?.fonction}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Societé : {auth.user?.societe}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Interlocuteur : {auth.user?.interlocuteur}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Téléphone : {auth.user?.tel}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Email : {auth.user?.email}
        </Typography>
       
      </CardContent>
      {/* <CardActions>
        <Button size="small">Modifier Profile</Button>
      </CardActions> */}
    </Card>
    </div>
  )
}

export default Profile