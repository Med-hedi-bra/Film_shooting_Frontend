import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { Divider } from "@mui/material";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Services from "./Services";
import { useAuth } from "./Auth";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function DemandDetails() {
  const params = useParams();
  const [demand, setDemand] = useState();
  const [succesMsg, setSuccesMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [acceptMsg, setacceptMsg] = useState(false);
  const [rejectMsg, setrejectMsg] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  // get method to get the demand data

  const [isAdmin, setAdmin] = useState(null);
  const [userDetails, setuserDetails] = useState(null);

  useEffect(() => {
    //retrive data
    let localStorageUser = localStorage.getItem("user");
    if (localStorageUser) {
      auth.setUser(JSON.parse(localStorageUser));
      if (JSON.parse(localStorageUser).role === "101") {
        setAdmin(true);
      } else {
        setAdmin(false);
      }
    }

    Services.getDemandById(params.idDemand)
      .then((res) => {
        res.json().then((res1) => {
          setDemand(res1[0]);
          Services.getUserById(res1[0].idUser).then((res) => {
            res.json().then((res1) => {
              setuserDetails(res1);
            });
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const goDashbored = () => {
    navigate("/dashbored");
  };
  const handleClose = () => {
    setErrorMsg(false);
  };
  const handleDelete = async () => {
    // let res = await Services.deleteDemand(params.idDemand);
    // setSuccesMsg(true);
    const confirmDelete = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cette demande ?"
    );

    if (confirmDelete) {
      try {
        let res = await Services.deleteDemand(params.idDemand);
        setSuccesMsg(true);
      } catch (error) {
        setErrorMsg(true);
        console.error("Error deleting demand:", error);
      }
    }
  };

  const handleUpdate = () => {
    navigate("/update", { state: { demand: demand } });
  };
  const handleAccept = async () => {
    let res = await Services.acceptDemand(params.idDemand);
    setacceptMsg(true);
  };
  const handleReject = async () => {
    let res = await Services.rejectDemand(params.idDemand);
    setrejectMsg(true);
  };
  const StatePlaque = ({ state }) => {
    let plaqueColor, plaqueText;

    switch (state) {
      case "Pending":
        plaqueColor = "grey";
        plaqueText = "Pending";
        break;
      case "Rejected":
        plaqueColor = "red";
        plaqueText = "Rejected";
        break;
      case "Accepted":
        plaqueColor = "green";
        plaqueText = "Accepted";
        break;
      default:
        plaqueColor = "gray";
        plaqueText = "Unknown";
    }

    return (
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: plaqueColor,
          color: "white",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        {plaqueText}
      </div>
    );
  };

  return (
    <>
      {
        <Dialog
          open={errorMsg || succesMsg || acceptMsg || rejectMsg}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {errorMsg && "Erreur lors de suppresion de votre demande !!"}
            {succesMsg && "Suppresion de votre demande avec succces !!"}
            {acceptMsg && "Demande acceptée avec succces !!"}
            {rejectMsg && "Demande rejetée avec succces !!"}
          </DialogTitle>

          <DialogActions>
            {errorMsg && <Button onClick={handleClose}>Retour</Button>}
            <Button onClick={goDashbored} autoFocus>
              Aller vers Dashbored
            </Button>
          </DialogActions>
        </Dialog>
      }
      {demand === undefined ? (
        <h2>Détails Demande numéro {params.idDemand} introuvable </h2>
      ) : (
        <div>
          <div style={{ marginLeft: "50px" }}>
            <h2>Détails Demande numéro {demand?.idDemand}</h2>
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
                <StatePlaque state={demand.state} />
                <CardContent style={{ marginLeft: "20px" }}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Demande numero : {demand?.idDemand}
                  </Typography>
                  <br />
                  <Typography variant="h5" component="div">
                    Type de Tournage:
                  </Typography>
                  <br />
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {demand?.selectedTournageType}
                  </Typography>
                  <Divider></Divider>
                  <br />
                  <Typography variant="h5" component="div">
                    Document Fournis
                  </Typography>
                  {demand.scenarioFile && (
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Scenario :{" "}
                      <Link to={demand.scenarioFile}>Voir le fichier</Link>
                    </Typography>
                  )}
                  {demand.decoupageTechniqueFile && (
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Découpage Technique :{" "}
                      <Link to={demand.decoupageTechniqueFile}>
                        Voir le fichier
                      </Link>
                    </Typography>
                  )}
                  {demand.synopsisFile && (
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Synopsis :{" "}
                      <Link to={demand.synopsisFile}>Voir le fichier</Link>
                    </Typography>
                  )}
                  {demand.droitDauteurFile && (
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Obtention des droit d'Auteur :{" "}
                      <Link to={demand.droitDauteurFile}>Voir le fichier</Link>
                    </Typography>
                  )}
                  {demand.contratTravailFile && (
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Contrats de travail des techniciens tunisiens empolyés :
                      <br></br>{" "}
                      {demand.contratTravailFile.map((url, index) => (
                        <>
                          <Link to={url}>Voir le fichier {index}</Link>{" "}
                          <br></br>
                        </>
                      ))}
                    </Typography>
                  )}
                  {demand.contratCoproductionFile && (
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Contrat de coproduction :{" "}
                      <Link to={demand.contratCoproductionFile}>
                        Voir le fichier
                      </Link>
                    </Typography>
                  )}
                  {demand.assuranceFile && (
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Attestation d'assurance :{" "}
                      <Link to={demand.assuranceFile}>Voir le fichier</Link>
                    </Typography>
                  )}
                  {demand.decoupageTechniqueFile && (
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Découpage Technique :{" "}
                      <Link to={demand.decoupageTechniqueFile}>
                        Voir le fichier
                      </Link>
                    </Typography>
                  )}
                  {demand.budgetPreFile && (
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Budget Prévisionnel :{" "}
                      <Link to={demand.budgetPreFile}>Voir le fichier</Link>
                    </Typography>
                  )}
                  {demand.listeTechFile && (
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Liste de principaux techniciens :{" "}
                      <Link to={demand.listeTechFile}>Voir le fichier</Link>
                    </Typography>
                  )}
                  {demand.calendrierFile && (
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Calendrier de Tournage :{" "}
                      <Link to={demand.calendrierFile}>Voir le fichier</Link>
                    </Typography>
                  )}
                  <br />
                  <Divider></Divider>
                  <Typography variant="h5" component="div">
                    Occupation du domaine public:
                  </Typography>
                  <br />
                  <Box>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Occupation temporaire du domaine public non maritime :
                      {demand?.selectedMaritimeT}
                    </Typography>

                    {demand?.selectedMaritimeT === "Oui" && (
                      <>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Date: De {demand?.dateMaritimeTStart} à{" "}
                          {demand?.dateMaritimeTFinish}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Lieu: {demand?.lieuxMaritimeT}
                        </Typography>
                      </>
                    )}
                  </Box>
                  <Divider variant="inset" />
                  <br />
                  <Box>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Occupation du domaine public Routier :{" "}
                      {demand?.selectdRoutier}
                    </Typography>

                    {demand?.selectdRoutier === "Oui" && (
                      <>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Date: De {demand?.dateRoutierStart} à{" "}
                          {demand?.dateRoutierFinish}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Lieu:{demand?.lieuxMaritime}
                        </Typography>
                      </>
                    )}
                  </Box>
                  <Divider variant="inset" />
                  <br />
                  <Box>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Occupation du domaine public Maritime :{" "}
                      {demand?.selectedMaritime}
                    </Typography>

                    {demand?.selectedMaritime === "Oui" && (
                      <>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Date: De {demand?.dateMaritimeStart} à{" "}
                          {demand?.dateMaritimeFinish}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Lieu: {demand?.lieuxMaritime}
                        </Typography>
                      </>
                    )}
                  </Box>
                  <Divider variant="inset" />
                  <br />
                  <Box>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Utilisation de l'espace aérien : {demand?.selectedAerien}
                    </Typography>

                    {demand?.selectedAerien === "Oui" && (
                      <>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Date: De {demand?.dateAerienStart} à{" "}
                          {demand?.dateAerienFinish}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Lieu: {demand?.lieuxAerien}
                        </Typography>
                      </>
                    )}
                  </Box>
                  <Divider variant="inset" />
                  <br />

                  <Box>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Tournage dans des sites achéologique et historique :{" "}
                      {demand?.selectedHistorique}
                    </Typography>

                    {demand?.selectedHistorique === "Oui" && (
                      <>
                        {" "}
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Date: De {demand?.dateHistoriqueStart} à{" "}
                          {demand?.dateHistoriqueFinish}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Lieu: {demand?.lieuxHistorique}
                        </Typography>
                      </>
                    )}
                  </Box>

                  <Box>
                    <Divider variant="inset" />
                    <br />
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Tournage dans des autres places ou bàtiments publics :{" "}
                      {demand?.selectedBatiment}
                    </Typography>

                    {demand?.selectedBatiment === "Oui" && (
                      <>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Date: De {demand?.dateBatimentStart} à{" "}
                          {demand?.dateBatimentFinish}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Lieu: {demand?.lieuxBatiment}
                        </Typography>
                      </>
                    )}
                  </Box>
                  <Divider></Divider>
                  <br />
                  <Typography variant="h5" component="div">
                    Recours à des prestations spécifique:
                  </Typography>
                  <br />
                  <Box>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Police Nationale : {demand?.selectedPolice}
                    </Typography>

                    {demand?.selectedPolice === "Oui" && (
                      <>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Date: De {demand?.datePoliceStart} à{" "}
                          {demand?.datePoliceFinish}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Lieu: {demand?.lieuxPolice}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Nombre d'agents: {demand?.nbrPolice}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Prestations demandées:
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {demand?.prestationPolice}
                        </Typography>
                      </>
                    )}
                  </Box>
                  <Divider variant="inset"></Divider>
                  <br />
                  <Box>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Office National de Protection Civile :{" "}
                      {demand?.selectedProtection}
                    </Typography>

                    {demand?.selectedProtection === "Oui" && (
                      <>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Date: De {demand?.dateProtectionStart} à{" "}
                          {demand?.dateProtectionFinish}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Lieu: {demand?.lieuxProtection}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Nombre d'agents: {demand?.nbrProtection}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Prestations demandées:
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {demand?.prestationProtection}
                        </Typography>
                      </>
                    )}
                  </Box>
                  <Divider variant="inset"></Divider>
                  <br />
                  <Box>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Armée Nationale : {demand?.selectedArmee}
                    </Typography>

                    {demand?.selectedArmee === "Oui" && (
                      <>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Date: De {demand?.dateArmeeStart} à{" "}
                          {demand?.dateArmeeFinish}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Lieu: {demand?.lieuxArmee}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Nombre d'agents: {demand?.nbrArmee}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Prestations demandées:
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {demand?.prestationArmee}
                        </Typography>
                      </>
                    )}
                  </Box>
                  <Divider variant="inset" />
                  <br />
                  <Box>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Main-d'oeuvre étrangére
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Nom: {demand?.nomEtrangere}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Prénom: {demand?.prenomEtrangere}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Nationalité: {demand?.nationaliteEtrangere}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Fonction: {demand?.fonctionEtrangere}
                    </Typography>
                  </Box>
                  <Divider variant="inset"></Divider>
                  <br />
                  <Box>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Autres prestations
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {demand?.autrePrestation}
                    </Typography>
                  </Box>
                  <Divider></Divider>
                  <br></br>
                  <Box>
                    <Typography variant="h5" component="div">
                      Informations sur le demandeur:
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Email: {userDetails?.email}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Nom: {userDetails?.nom}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Fonction: {userDetails?.fonction}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Société: {userDetails?.societe}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Téléphone: {userDetails?.tel}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Fax: {userDetails?.fax}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  {isAdmin && (
                    <>
                      <Button
                        color="success"
                        variant="contained"
                        onClick={handleAccept}
                        style={{ marginLeft: "5px" }}
                      >
                        Accepter
                      </Button>
                      <Button
                        color="warning"
                        variant="contained"
                        onClick={handleReject}
                        style={{ marginLeft: "5px" }}
                      >
                        Rejeter
                      </Button>
                    </>
                  )}
                  <Button
                    size="medium"
                    variant="contained"
                    onClick={handleUpdate}
                  >
                    Modifier
                  </Button>

                  <Button
                    color="error"
                    startIcon={<DeleteIcon />}
                    variant="contained"
                    onClick={handleDelete}
                    style={{ marginLeft: "5px" }}
                  >
                    Supprimer
                  </Button>
                </CardActions>
              </Card>
            </Box>
            <br />
          </List>
        </div>
      )}
    </>
  );
}

export default DemandDetails;
