import {
  Card,
  CardContent,
  TextField,
  FormGroup,
  FormControlLabel,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  Grid,
  FormLabel,
  Radio,
  FormControl,
  RadioGroup,
  Alert,
} from "@mui/material";
import { Formik, Form } from "formik";
import { useState, React, Children, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "../styles/Multi.css";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import dayjs from "dayjs";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import Services from "./Services";

function sleep(time) {
  return new Promise((acc) => {
    setTimeout(acc, time);
  });
}
export default function Multi() {
  const auth = useAuth();
  const [data, setData] = useState("");

  useEffect(() => {
    // console.log("hyy")
    if (auth.user?.idUser) {
      const getPreDemand = async () => {
        const preDemand = await (
          await Services.getPreDemand(auth.user.idUser)
        ).json();
        setData(preDemand[0]);
      };
      getPreDemand();
    }
  }, []);
  // For Tournage type
  const dateNow = dayjs();
  const now = dateNow.format("YYYY-MM-DD HH:MM");

  const [selectedTournageType, setSelectedTournageType] = useState("");

  const [autreType, setAutreType] = useState("");
  const handleRadioChange = (event) => {
    setSelectedTournageType(event.target.value);
  };
  const handleChangeAutreType = (e) => {
    setAutreType(e.target.value);
  };

  //************** */

  //For lieux MaritimeT
  const [lieuxMaritimeT, setLieuxMaritimeT] = useState("");
  // For oui or non MaritimeT
  const [selectedMaritimeT, setSelectedMaritimeT] = useState("");
  const [dateMaritimeTStart, setDateMaritimeTStart] = useState(now);
  const [dateMaritimeTFinish, setDateMaritimeTFinish] = useState(now);
  const handleRadioChangeMaritimeT = (event) => {
    setSelectedMaritimeT(event.target.value);
  };
  const handleChangeLieuxMaritimeT = (event) => {
    setLieuxMaritimeT(event.target.value);
  };
  const onChangeDateMaritimeTStart = (date) => {
    setDateMaritimeTStart(date.format("YYYY-MM-DD HH:MM"));
  };
  const onChangeDateMaritimeTFinish = (date) => {
    setDateMaritimeTFinish(date.format("YYYY-MM-DD HH:MM"));
  };

  //******************** */
  const [selectedRoutier, setSelectedRoutier] = useState("");
  const [lieuxRoutier, setLieuxRoutier] = useState("");
  const [dateRoutierStart, setDateRoutierStart] = useState(now);
  const [dateRoutierFinish, setDateRoutierFinish] = useState(now);
  const handleRadioChangeRoutier = (event) => {
    setSelectedRoutier(event.target.value);
  };
  const handleChangeLieuxRoutier = (event) => {
    setLieuxRoutier(event.target.value);
  };
  const onChangeDateRoutierStart = (date) => {
    setDateRoutierStart(date.format("YYYY-MM-DD HH:MM"));
  };
  const onChangeDateRoutierFinish = (date) => {
    setDateRoutierFinish(date.format("YYYY-MM-DD HH:MM"));
  };
  /********************** */
  const [selectedMaritime, setSelectedMaritime] = useState("");
  const [lieuxMaritime, setLieuxMaritime] = useState("");
  const [dateMaritimeStart, setDateMaritimeStart] = useState(now);
  const [dateMaritimeFinish, setDateMaritimeFinish] = useState(now);
  const handleRadioChangeMaritime = (event) => {
    setSelectedMaritime(event.target.value);
  };
  const handleChangeLieuxMaritime = (event) => {
    setLieuxMaritime(event.target.value);
  };
  const onChangeDateMaritimeStart = (date) => {
    setDateMaritimeStart(date.format("YYYY-MM-DD HH:MM"));
  };
  const onChangeDateMaritimeFinish = (date) => {
    setDateMaritimeFinish(date.format("YYYY-MM-DD HH:MM"));
  };
  //*************** */

  const [selectedAerien, setSelectedAerien] = useState("");
  const [lieuxAerien, setLieuxAerien] = useState("");
  const [dateAerienStart, setDateAerienStart] = useState(now);
  const [dateAerienFinish, setDateAerienFinish] = useState(now);
  const handleRadioChangeAerien = (event) => {
    setSelectedAerien(event.target.value);
    console.log(selectedAerien);
  };
  const handleChangeLieuxAerien = (event) => {
    setLieuxAerien(event.target.value);
  };
  const onChangeDateAerienStart = (date) => {
    setDateAerienStart(date.format("YYYY-MM-DD HH:MM"));
  };
  const onChangeDateAerienFinish = (date) => {
    setDateAerienFinish(date.format("YYYY-MM-DD HH:MM"));
  };
  /************** */
// const [variabel, setVar] = useState("")
// mon nom est {{variabel}}
// setVar(sd)
  const [selectedHistorique, setSelectedHistorique] = useState("");
  const [lieuxHistorique, setLieuxHistorique] = useState("");
  const [dateHistoriqueStart, setDateHistoriqueStart] = useState(now);
  const [dateHistoriqueFinish, setDateHistoriqueFinish] = useState(now);
  const handleRadioChangeHistorique = (event) => {
    setSelectedHistorique(event.target.value);
    console.log(selectedHistorique);
  };
  const handleChangeLieuxHistorique = (event) => {
    setLieuxHistorique(event.target.value);
  };
  const onChangeDateHistoriqueStart = (date) => {
    setDateHistoriqueStart(date.format("YYYY-MM-DD HH:MM"));
  };
  const onChangeDateHistoriqueFinish = (date) => {
    setDateHistoriqueFinish(date.format("YYYY-MM-DD HH:MM"));
  };

  /********************* */

  const [selectedBatiment, setSelectedBatiment] = useState("");
  const [lieuxBatiment, setLieuxBatiment] = useState("");
  const [dateBatimentStart, setDateBatimentStart] = useState(now);
  const [dateBatimentFinish, setDateBatimentFinish] = useState(now);
  const handleRadioChangeBatiment = (event) => {
    setSelectedBatiment(event.target.value);
  };
  const handleChangeLieuxBatiment = (event) => {
    setLieuxBatiment(event.target.value);
  };
  const onChangeDateBatimentStart = (date) => {
    setDateBatimentStart(date.format("YYYY-MM-DD HH:MM"));
  };
  const onChangeDateBatimentFinish = (date) => {
    setDateBatimentFinish(date.format("YYYY-MM-DD HH:MM"));
  };
  /************************** */
  const [selectedPolice, setSelectedPolice] = useState("");
  const [lieuxPolice, setLieuxPolice] = useState("");
  const [datePoliceStart, setDatePoliceStart] = useState(now);
  const [datePoliceFinish, setDatePoliceFinish] = useState(now);
  const [nbrPolice, setNbrPolice] = useState(0);
  const [prestationPolice, setPrestationPolice] = useState("");
  const handleRadioChangePolice = (event) => {
    setSelectedPolice(event.target.value);
  };
  const handleChangeLieuxPolice = (event) => {
    setLieuxPolice(event.target.value);
  };
  const onChangeDatePoliceStart = (date) => {
    setDatePoliceStart(date.format("YYYY-MM-DD HH:MM"));
  };
  const onChangeDatePoliceFinish = (date) => {
    setDatePoliceFinish(date.format("YYYY-MM-DD HH:MM"));
  };
  const handleChangePrestationPolice = (event) => {
    setPrestationPolice(event.target.value);
  };
  const handleChangeNbrPolice = (event) => {
    setNbrPolice(event.target.value);
  };
  /***************** */
  const [selectedProtection, setSelectedProtection] = useState("");
  const [lieuxProtection, setLieuxProtection] = useState("");
  const [dateProtectionStart, setDateProtectionStart] = useState(now);
  const [dateProtectionFinish, setDateProtectionFinish] = useState(now);
  const [nbrProtection, setNbrProtection] = useState(0);
  const [prestationProtection, setPrestationProtection] = useState("");
  const handleRadioChangeProtection = (event) => {
    setSelectedProtection(event.target.value);
    console.log(selectedProtection);
  };
  const handleChangeLieuxProtection = (event) => {
    setLieuxProtection(event.target.value);
  };
  const onChangeDateProtectionStart = (date) => {
    setDateProtectionStart(date.format("YYYY-MM-DD HH:MM"));
  };
  const onChangeDateProtectionFinish = (date) => {
    setDateProtectionFinish(date.format("YYYY-MM-DD HH:MM"));
  };
  const handleChangePrestationProtection = (event) => {
    setPrestationProtection(event.target.value);
  };
  const handleChangeNbrProtection = (event) => {
    setNbrProtection(event.target.value);
  };

  /********************* */

  const [selectedArmee, setSelectedArmee] = useState("");
  const [lieuxArmee, setLieuxArmee] = useState("");
  const [dateArmeeStart, setDateArmeeStart] = useState(now);
  const [dateArmeeFinish, setDateArmeeFinish] = useState(now);
  const [nbrArmee, setNbrArmee] = useState(0);
  const [prestationArmee, setPrestationArmee] = useState("");
  const handleRadioChangeArmee = (event) => {
    setSelectedArmee(event.target.value);
    console.log(selectedArmee);
  };
  const handleChangeLieuxArmee = (event) => {
    setLieuxArmee(event.target.value);
  };
  const onChangeDateArmeeStart = (date) => {
    setDateArmeeStart(date.format("YYYY-MM-DD HH:MM"));
  };
  const onChangeDateArmeeFinish = (date) => {
    setDateArmeeFinish(date.format("YYYY-MM-DD HH:MM"));
  };
  const handleChangePrestationArmee = (event) => {
    setPrestationArmee(event.target.value);
  };
  const handleChangeNbrArmee = (event) => {
    setNbrArmee(event.target.value);
  };

  /****************** */
  const [nomEtrangere, setNomEtrangere] = useState("");
  const [prenomEtrangere, setPrenomEtrangere] = useState("");
  const [nationaliteEtrangere, setNationaliteEtrangere] = useState("");
  const [fonctionEtrangere, setFonctionEtrangere] = useState("");
  const handleChangeNomEtrangere = (event) => {
    setNomEtrangere(event.target.value);
  };
  const handleChangePrenomEtrangere = (event) => {
    setPrenomEtrangere(event.target.value);
  };
  const handleChangeNationaliteEtrangere = (event) => {
    setNationaliteEtrangere(event.target.value);
  };
  const handleChangeFonctionEtrangere = (event) => {
    setFonctionEtrangere(event.target.value);
  };

  /****************** */
  const [autrePrestation, setAutrePrestation] = useState("");
  const handleChangeAutrePrestation = (e) => {
    setAutrePrestation(e.target.value);
  };

  const [budget, setBudget] = useState(0);
  const handleChangeBudget = (e) => {
    setBudget(e.target.value);
  };
  /************ */

  const [scenarioFile, setScenarioFile] = useState("");
  const [decoupageTechniqueFile, setDecoupageTechniqueFile] = useState("");
  const [synopsisFile, setSynopsisFile] = useState("");
  const [contratTravailFile, setContratTravailFile] = useState([]);
  const [droitDauteurFile, setDroitDauteurFile] = useState("");
  const [contratCoproductionFile, setContratCoproductionFile] = useState("");
  const [assuranceFile, setAssuranceFile] = useState("");
  const [budgetPreFile, setBudgetPreFile] = useState("");
  const [listeTechFile, setListeTechFile] = useState("");
  const [calendrierFile, setCalendrierFile] = useState("");
  const handleScenarioFile = (event) => {
    setScenarioFile(event.target.files[0]);
  };
  const handleDecoupageFile = (e) => {
    setDecoupageTechniqueFile(e.target.files[0]);
  };
  const handleSynopsisFile = (e) => {
    setSynopsisFile(e.target.files[0]);
  };
  const handleContratTravailFile = (e) => {
    setContratTravailFile(e.target.files);
    
  };
  const handleDroitDauteurFile = (e) => {
    setDroitDauteurFile(e.target.files[0]);
  };
  const handleContratCoprodFile = (e) => {
    setContratCoproductionFile(e.target.files[0]);
  };
  const handleAssuranceFile = (e) => {
    setAssuranceFile(e.target.files[0]);
  };
  const handleBudgetPrevFile = (e) => {
    setBudgetPreFile(e.target.files[0]);
  };
  const handleListeTechniqueFile = (e) => {
    setListeTechFile(e.target.files[0]);
  };
  const handleCalendrierFile = (e) => {
    setCalendrierFile(e.target.files[0]);
  };

  //****** */
  const handleSuivant = async () => {
    let form = {
      fonctionEtrangere: fonctionEtrangere,
      nationaliteEtrangere: nationaliteEtrangere,
      prenomEtrangere: prenomEtrangere,
      nomEtrangere: nomEtrangere,

      prestationArmee: prestationArmee,
      nbrArmee: nbrArmee,
      dateArmeeFinish: dateArmeeFinish,
      dateArmeeStart: dateArmeeStart,
      lieuxArmee: lieuxArmee,
      selectedArmee: selectedArmee,

      prestationProtection: prestationProtection,
      nbrProtection: nbrProtection,
      dateProtectionFinish: dateProtectionFinish,
      dateProtectionStart: dateProtectionStart,
      lieuxProtection: lieuxProtection,
      selectedProtection: selectedProtection,

      prestationPolice: prestationPolice,
      nbrPolice: nbrPolice,
      datePoliceFinish: datePoliceFinish,
      datePoliceStart: datePoliceStart,
      lieuxPolice: lieuxPolice,
      selectedPolice: selectedPolice,

      dateBatimentFinish: dateBatimentFinish,
      dateBatimentStart: dateBatimentStart,
      lieuxBatiment: lieuxBatiment,
      selectedBatiment: selectedBatiment,

      dateHistoriqueFinish: dateHistoriqueFinish,
      dateHistoriqueStart: dateHistoriqueStart,
      lieuxHistorique: lieuxHistorique,
      selectedHistorique: selectedHistorique,

      dateAerienFinish: dateAerienFinish,
      dateAerienStart: dateAerienStart,
      selectedAerien: selectedAerien,
      lieuxAerien: lieuxAerien,

      dateMaritimeFinish: dateMaritimeFinish,
      dateMaritimeStart: dateMaritimeStart,
      selectedMaritime: selectedMaritime,
      lieuxMaritime: lieuxMaritime,

      dateRoutierFinish: dateRoutierFinish,
      dateRoutierStart: dateRoutierStart,
      selectedRoutier: selectedRoutier,
      lieuxRoutier: lieuxRoutier,
      
      dateMaritimeTFinish: dateMaritimeTFinish,
      dateMaritimeTStart: dateMaritimeTStart,
      lieuxMaritimeT: lieuxMaritimeT,
      selectedMaritimeT: selectedMaritimeT,

      budget: budget,
      autrePrestation: autrePrestation,
      selectedTournageType: selectedTournageType,
      autreType: autreType,

      scenarioFile: scenarioFile,
      decoupageTechniqueFile: decoupageTechniqueFile,
      synopsisFile: synopsisFile,
      contratTravailFile: contratTravailFile,
      droitDauteurFile: droitDauteurFile,
      contratCoproductionFile: contratCoproductionFile,
      assuranceFile: assuranceFile,
      budgetPreFile: budgetPreFile,
      listeTechFile: listeTechFile,
      calendrierFile: calendrierFile,
    };

    // Preparing the request body
    const formData = new FormData();
    for (const key in form) {
      if (form[`${key}`] !== "" && key!=="contratTravailFile") formData.append(key, form[`${key}`]);
    }
    const files = Array.from(form.contratTravailFile)
   files.forEach(file=>{
    formData.append(`contratTravailFile`, file);
   })

    let res = await Services.addPreDemand(formData, auth.user.idUser);
    if (res.ok) {
      console.log("pre succes");
    } else {
      console.log("pre erreur");
    }
  };
  /************* */

  /******* */
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigateToDash = async () => {
    await sleep(2000);
    navigate("/dashbored");
  };

  const handleSubmit = async (event) => {
    await sleep(3000);

    let form = {
      fonctionEtrangere: fonctionEtrangere,
      nationaliteEtrangere: nationaliteEtrangere,
      prenomEtrangere: prenomEtrangere,
      nomEtrangere: nomEtrangere,
      prestationArmee: prestationArmee,
      nbrArmee: nbrArmee,
      dateArmeeFinish: dateArmeeFinish,
      dateArmeeStart: dateArmeeStart,
      lieuxArmee: lieuxArmee,
      selectedArmee: selectedArmee,
      prestationProtection: prestationProtection,
      nbrProtection: nbrProtection,
      dateProtectionFinish: dateProtectionFinish,
      dateProtectionStart: dateProtectionStart,
      lieuxProtection: lieuxProtection,
      selectedProtection: selectedProtection,
      prestationPolice: prestationPolice,
      nbrPolice: nbrPolice,
      datePoliceFinish: datePoliceFinish,
      datePoliceStart: datePoliceStart,
      lieuxPolice: lieuxPolice,
      selectedPolice: selectedPolice,
      dateBatimentFinish: dateBatimentFinish,
      dateBatimentStart: dateBatimentStart,
      lieuxBatiment: lieuxBatiment,
      selectedBatiment: selectedBatiment,
      dateHistoriqueFinish: dateHistoriqueFinish,
      dateHistoriqueStart: dateHistoriqueStart,
      lieuxHistorique: lieuxHistorique,
      selectedHistorique: selectedHistorique,
      dateAerienFinish: dateAerienFinish,
      dateAerienStart: dateAerienStart,
      selectedAerien: selectedAerien,
      lieuxAerien: lieuxAerien,
      dateMaritimeFinish: dateMaritimeFinish,
      dateMaritimeStart: dateMaritimeStart,
      selectedMaritime: selectedMaritime,
      lieuxMaritime: lieuxMaritime,
      dateRoutierFinish: dateRoutierFinish,
      dateRoutierStart: dateRoutierStart,
      selectedRoutier: selectedRoutier,
      lieuxRoutier: lieuxRoutier,
      dateMaritimeTFinish: dateMaritimeTFinish,
      dateMaritimeTStart: dateMaritimeTStart,
      lieuxMaritimeT: lieuxMaritimeT,
      selectedMaritimeT: selectedMaritimeT,
      budget: budget,
      autrePrestation: autrePrestation,
      selectedTournageType: selectedTournageType,

      scenarioFile: scenarioFile,
      decoupageTechniqueFile: decoupageTechniqueFile,
      synopsisFile: synopsisFile,
      contratTravailFile: contratTravailFile,
      droitDauteurFile: droitDauteurFile,
      contratCoproductionFile: contratCoproductionFile,
      assuranceFile: assuranceFile,
      budgetPreFile: budgetPreFile,
      listeTechFile: listeTechFile,
      calendrierFile: calendrierFile,
      autreType: autreType,
    };
    const formData = new FormData();
    for (const key in form) {
      if(form[`${key}`]!=="contratTravailFile")
      formData.append(key, form[`${key}`]);
    }
    formData.append("idUser", auth.user.idUser);
   const files = Array.from(form.contratTravailFile)
   files.forEach(file=>{
    formData.append(`contratTravailFile`, file);
   })
 
    let res = await Services.addDemand(formData);
    if (res.ok) {
      setSuccessMessage("Demande ajoutée avec Succès");
      navigateToDash();
    } else {
      setErrorMessage("Erreur lors de l'ajout de votre demande");
    }

    // console.log(fonctionEtrangere)
    // console.log(nationaliteEtrangere)
    // console.log(prenomEtrangere)
    // console.log(nomEtrangere)
    // console.log(prestationArmee)
    // console.log(nbrArmee)
    // console.log(dateArmeeFinish)
    // console.log(dateArmeeStart)
    // console.log(lieuxArmee)
    // console.log(selectedArmee)
    // console.log(prestationProtection)
    // console.log(nbrProtection)
    // console.log(dateProtectionFinish)
    // console.log(dateProtectionStart)
    // console.log(lieuxProtection)
    // console.log(selectedProtection)
    // console.log(prestationPolice)
    // console.log(nbrPolice)
    // console.log(datePoliceFinish)
    // console.log(datePoliceStart)
    // console.log(lieuxPolice)
    // console.log(selectedPolice)
    // console.log(dateBatimentFinish)
    // console.log(dateBatimentStart)
    // console.log(lieuxBatiment)
    // console.log(selectedBatiment)
    // console.log(dateHistoriqueFinish)
    // console.log(dateHistoriqueStart)
    // console.log(lieuxHistorique)
    // console.log(selectedHistorique)
    // console.log(dateAerienFinish)
    // console.log(dateAerienStart)
    // console.log(selectedAerien)
    // console.log(lieuxAerien)
    // console.log(dateMaritimeFinish)
    // console.log(dateMaritimeStart)
    // console.log(selectedMaritime)
    // console.log(lieuxMaritime)
    // console.log(dateRoutierFinish)
    // console.log(dateRoutierStart)
    // console.log(selectedRoutier)
    // console.log(lieuxRoutier)
    // console.log(dateMaritimeTFinish)
    // console.log(dateMaritimeTStart)
    // console.log(lieuxMaritimeT)
    // console.log(selectedMaritimeT)
    // console.log(autrePrestation);
    // console.log(scenarioFile);
    // console.log(
    //   decoupageTechniqueFile,
    //   synopsisFile,
    //   contratTravailFile,
    //   droitDauteurFile,
    //   contratCoproductionFile,
    //   assuranceFile,
    //   budgetPreFile,
    //   listeTech,
    //   calendrier
    // );
  };
  const initForm = () => {
    setErrorMessage(null);
    setSuccessMessage(null);
  };
  /*************** */
  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={{ TournageType: "" }}
          onSubmit={handleSubmit}
          handleSuivant={handleSuivant}
          initForm={initForm}
        >
          <div
            label="Type de Tournage"
            className="borderGrid"
            style={{ marginLeft: "30px" }}
          >
            <FormControl>
              <FormLabel>
                La Sociéte soussignée sollicite la persmission de tourner:
              </FormLabel>
              <RadioGroup onChange={handleRadioChange}>
                <FormControlLabel
                  value="FilmLM"
                  control={<Radio />}
                  label="Film LM"
                />

                <FormControlLabel
                  value="FilmCM"
                  control={<Radio />}
                  label="Film CM"
                />
                <FormControlLabel
                  value="FilmDocumentaire"
                  control={<Radio />}
                  label="Film Documentaire"
                />
                <FormControlLabel
                  value="SpotPublicitaire"
                  control={<Radio />}
                  label="Spot Publicitaire"
                />
                <FormControlLabel
                  value="SérieTV"
                  control={<Radio />}
                  label="Série TV"
                />
                <FormControlLabel
                  value="ClipVideo"
                  control={<Radio />}
                  label="Clip Vidéo"
                />
                <FormControlLabel
                  value="Autre"
                  control={<Radio />}
                  label="Autre"
                />
              </RadioGroup>
              <FormLabel>Autre</FormLabel>
              <TextField
                type="text"
                placeholder="Décriver ici votre idée"
                onChange={handleChangeAutreType}
              ></TextField>
            </FormControl>
          </div>

          <div
            label="Document Fournis"
            style={{ marginLeft: "30px" }}
            className="borderGrid"
          >
            <h2> Document fournis:</h2>
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box>
                    <FormLabel>Scénario</FormLabel>
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      type="file"
                      inputProps={{
                        accept: '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      }}
                      onChange={handleScenarioFile}
                    ></TextField>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box>
                    <FormLabel>Découpage Technique</FormLabel>
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      type="file"
                      onChange={handleDecoupageFile}
                      inputProps={{
                        accept: '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      }}
                    ></TextField>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box>
                    <FormLabel>Synopsis</FormLabel>
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      type="file"
                      onChange={handleSynopsisFile}
                      inputProps={{
                        accept: '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      }}
                    ></TextField>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box>
                    <FormLabel>
                      Contrats de travail des techniciens tunisiens employé
                    </FormLabel>
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      type="file"
                      inputProps={{
                        multiple:true,
                        accept: '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      }}
                      onChange={handleContratTravailFile}
                    ></TextField>
                    
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box>
                    <FormLabel>Contrat de coproduction</FormLabel>
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      type="file"
                      onChange={handleContratCoprodFile}
                      inputProps={{
                        accept: '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      }}
                    ></TextField>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box>
                    <FormLabel>Obtenetion des droit d'auteur</FormLabel>
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      type="file"
                      onChange={handleDroitDauteurFile}
                      inputProps={{
                        accept: '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      }}
                    ></TextField>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box>
                    <FormLabel>
                      Attestation d'assurance couvrant la responsabilité civile
                    </FormLabel>
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      type="file"
                      onChange={handleAssuranceFile}
                      inputProps={{
                        accept: '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      }}
                    ></TextField>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box>
                    <FormLabel>Budget prévisionnel</FormLabel>
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      type="file"
                      onChange={handleBudgetPrevFile}
                      inputProps={{
                        accept: '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      }}
                    ></TextField>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box>
                    <FormLabel>
                      Liste des principaux techniciens(mention obligatoire du n'
                      de carte professionnlle)
                    </FormLabel>
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      type="file"
                      onChange={handleListeTechniqueFile}
                      inputProps={{
                        accept: '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      }}
                    ></TextField>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box>
                    <FormLabel>
                      Calendrier de tournage (définitivement arrété)
                    </FormLabel>
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      type="file"
                      onChange={handleCalendrierFile}
                      inputProps={{
                        accept: '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      }}
                    ></TextField>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box>
                    <FormLabel>Montant du Budget investi en Tunisie</FormLabel>
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      type="number"
                      onChange={handleChangeBudget}
                      inputProps={{
                        accept: '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      }}
                    ></TextField>
                  </Box>
                </Grid>
              </Grid>
            </FormGroup>
          </div>
          <div
            label="Occupation du domaine public"
            style={{ marginLeft: "30px" }}
          >
            <h2>Occupation du domaine public:</h2>
            <br />
            <FormGroup>
              <Grid container spacing={2}>
                <Grid
                  className="borderGrid"
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Box>
                    <FormLabel>
                      Prévoyez-vous d'occuper temporairement le domaine Public
                      non maritime?
                    </FormLabel>
                  </Box>
                  <Box>
                    <RadioGroup onChange={handleRadioChangeMaritimeT}>
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </RadioGroup>

                    {selectedMaritimeT === "Oui" && (
                      <>
                        <FormLabel>
                          Si Oui, indiquer les dates, les lieux et heures:
                        </FormLabel>
                        <br />
                        <Box>
                          <TextField
                            fullWidth
                            name="lieux"
                            placeholder="Lieux"
                            onChange={handleChangeLieuxMaritimeT}
                          ></TextField>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                              components={["MobileDateTimePicker"]}
                            >
                              <DemoItem label="DE">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateMaritimeTStart}
                                />
                              </DemoItem>
                              <DemoItem label="à">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateMaritimeTFinish}
                                />
                              </DemoItem>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                      </>
                    )}
                  </Box>
                </Grid>
              </Grid>
              <br />
              <br />
              <br />

              <Grid container spacing={2}>
                <Grid
                  className="borderGrid"
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Box>
                    <FormLabel>
                      Prévoyez-vous d'occuper le domaine Public routier?
                    </FormLabel>
                  </Box>
                  <Box>
                    <RadioGroup onChange={handleRadioChangeRoutier}>
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </RadioGroup>

                    {selectedRoutier === "Oui" && (
                      <>
                        <FormLabel>
                          Si Oui, indiquer les dates, les lieux et heures:
                        </FormLabel>
                        <br />
                        <Box>
                          <TextField
                            fullWidth
                            name="lieux"
                            placeholder="Lieux"
                            onChange={handleChangeLieuxRoutier}
                          ></TextField>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                              components={["MobileDateTimePicker"]}
                            >
                              <DemoItem label="DE">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateRoutierStart}
                                />
                              </DemoItem>
                              <DemoItem label="à">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateRoutierFinish}
                                />
                              </DemoItem>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                      </>
                    )}
                  </Box>
                </Grid>
              </Grid>
              <br />
              <br />
              <br />
              <Grid container spacing={2}>
                <Grid
                  className="borderGrid"
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Box>
                    <FormLabel>
                      Prévoyez-vous d'occuper le domaine Public Maritime?
                    </FormLabel>
                  </Box>
                  <Box>
                    <RadioGroup onChange={handleRadioChangeMaritime}>
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </RadioGroup>
                    {selectedMaritime === "Oui" && (
                      <>
                        <FormLabel>
                          Si Oui, indiquer les dates, les lieux et heures:
                        </FormLabel>
                        <br />
                        <Box>
                          <TextField
                            fullWidth
                            name="lieux"
                            placeholder="Lieux"
                            onChange={handleChangeLieuxMaritime}
                          ></TextField>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                              components={["MobileDateTimePicker"]}
                            >
                              <DemoItem label="DE">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateMaritimeStart}
                                />
                              </DemoItem>
                              <DemoItem label="à">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateMaritimeFinish}
                                />
                              </DemoItem>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                      </>
                    )}
                  </Box>
                </Grid>
              </Grid>
              <br />
              <br />
              <br />

              <Grid container spacing={2}>
                <Grid
                  className="borderGrid"
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Box>
                    <FormLabel>
                      Prévoyez-vous d'occuper le domaine Public Aérien?
                    </FormLabel>
                  </Box>
                  <Box>
                    <RadioGroup onChange={handleRadioChangeAerien}>
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </RadioGroup>
                    {selectedAerien === "Oui" && (
                      <>
                        <FormLabel>
                          Si Oui, indiquer les dates, les lieux et heures:
                        </FormLabel>
                        <br />
                        <Box>
                          <TextField
                            fullWidth
                            name="lieux"
                            placeholder="Lieux"
                            onChange={handleChangeLieuxAerien}
                          ></TextField>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                              components={["MobileDateTimePicker"]}
                            >
                              <DemoItem label="DE">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateAerienStart}
                                />
                              </DemoItem>
                              <DemoItem label="DE">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateAerienFinish}
                                />
                              </DemoItem>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                      </>
                    )}
                  </Box>
                </Grid>
              </Grid>
              <br />
              <br />
              <br />

              <Grid container spacing={2}>
                <Grid
                  className="borderGrid"
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Box>
                    <FormLabel>
                      Prévoyez-vous de tourner dans des sites archéologique et
                      historique?
                    </FormLabel>
                  </Box>
                  <Box>
                    <RadioGroup onChange={handleRadioChangeHistorique}>
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </RadioGroup>
                    {selectedHistorique === "Oui" && (
                      <>
                        <FormLabel>
                          Si Oui, indiquer les dates, les lieux et heures:
                        </FormLabel>
                        <br />
                        <Box>
                          <TextField
                            fullWidth
                            name="lieux"
                            placeholder="Lieux"
                            onChange={handleChangeLieuxHistorique}
                          ></TextField>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                              components={["MobileDateTimePicker"]}
                            >
                              <DemoItem label="DE">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateHistoriqueStart}
                                />
                              </DemoItem>
                              <DemoItem label="à">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateHistoriqueFinish}
                                />
                              </DemoItem>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                      </>
                    )}
                  </Box>
                </Grid>
              </Grid>
              <br />
              <br />
              <br />
              <Grid container spacing={2}>
                <Grid
                  className="borderGrid"
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Box>
                    <FormLabel>
                      Prévoyez-vous de tourner dans d'autres places ou bâtiments
                      publics?
                    </FormLabel>
                  </Box>
                  <Box>
                    <RadioGroup onChange={handleRadioChangeBatiment}>
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </RadioGroup>
                    {selectedBatiment === "Oui" && (
                      <>
                        <FormLabel>
                          Si Oui, indiquer les dates, les lieux et heures:
                        </FormLabel>
                        <br />
                        <Box>
                          <TextField
                            fullWidth
                            name="lieux"
                            placeholder="Lieux"
                            onChange={handleChangeLieuxBatiment}
                          ></TextField>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                              components={["MobileDateTimePicker"]}
                            >
                              <DemoItem label="DE">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateBatimentStart}
                                />
                              </DemoItem>
                              <DemoItem label="à">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateBatimentFinish}
                                />
                              </DemoItem>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                      </>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </FormGroup>
          </div>
          <div
            label="Recours à des prestation spécifique"
            style={{ marginLeft: "30px" }}
          >
            <h2>Recours à des prestations spécifique:</h2>
            <FormGroup>
              <FormLabel>
                Prévoyez-vous de recourir aux préstations des autorités suivant?
              </FormLabel>
              <br />
              <br />
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="borderGrid"
                >
                  <Box>
                    <FormLabel>
                      <strong>Police Nationale:</strong>
                    </FormLabel>
                  </Box>
                  <Box>
                    <RadioGroup onChange={handleRadioChangePolice}>
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </RadioGroup>
                    {selectedPolice === "Oui" && (
                      <>
                        <FormLabel>
                          Si Oui, indiquer les dates, les lieux , heures et
                          nombre d'agents:
                        </FormLabel>
                        <br />
                        <Box>
                          <TextField
                            fullWidth
                            name="lieux"
                            placeholder="Lieux"
                            onChange={handleChangeLieuxPolice}
                          ></TextField>

                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                              components={["MobileDateTimePicker"]}
                            >
                              <DemoItem label="DE">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDatePoliceStart}
                                />
                              </DemoItem>
                              <DemoItem label="à">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDatePoliceFinish}
                                />
                              </DemoItem>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                        <Box>
                          <FormLabel>Nombre d'agents</FormLabel>
                        </Box>
                        <Box>
                          <TextField
                            fullWidth
                            type="number"
                            placeholder="Nombre d'agents"
                            onChange={handleChangeNbrPolice}
                          />
                        </Box>

                        <br />
                        <Box>
                          <FormLabel>Préstation Demandée</FormLabel>
                        </Box>
                        <Box>
                          <TextField
                            fullWidth
                            multiline
                            rows={8}
                            placeholder="Ecrire ici votre prestation"
                            onChange={handleChangePrestationPolice}
                          />
                        </Box>
                      </>
                    )}
                  </Box>
                  <br />
                </Grid>
              </Grid>

              <br />
              <br />
              <br />
              <br />
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="borderGrid"
                >
                  <Box>
                    <FormLabel>
                      <strong>Office National de Protection Civile:</strong>
                    </FormLabel>
                  </Box>
                  <Box>
                    <RadioGroup onChange={handleRadioChangeProtection}>
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </RadioGroup>
                    {selectedProtection === "Oui" && (
                      <>
                        <FormLabel>
                          Si Oui, indiquer les dates, les lieux , heures et
                          nombre d'agents:
                        </FormLabel>
                        <br />
                        <Box>
                          <TextField
                            fullWidth
                            name="lieux"
                            placeholder="Lieux"
                            onChange={handleChangeLieuxProtection}
                          ></TextField>

                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                              components={["MobileDateTimePicker"]}
                            >
                              <DemoItem label="DE">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateProtectionStart}
                                />
                              </DemoItem>
                              <DemoItem label="à">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateProtectionFinish}
                                />
                              </DemoItem>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>

                        <br />
                        <Box>
                          <FormLabel>Nombre d'agents</FormLabel>
                        </Box>
                        <Box>
                          <TextField
                            fullWidth
                            type="number"
                            placeholder="Nombre d'agents"
                            onChange={handleChangeNbrProtection}
                          />
                        </Box>
                        <br />
                        <Box>
                          <FormLabel>Préstation Demandée</FormLabel>
                        </Box>
                        <Box>
                          <TextField
                            fullWidth
                            multiline
                            rows={8}
                            placeholder="Ecrire ici votre préstation"
                            onChange={handleChangePrestationProtection}
                          />
                        </Box>
                      </>
                    )}
                  </Box>
                </Grid>
              </Grid>
              <br />
              <br />
              <br />
              <br />
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="borderGrid"
                >
                  <Box>
                    <FormLabel>
                      <strong>Armée Nationale:</strong>
                    </FormLabel>
                  </Box>
                  <Box>
                    <RadioGroup onChange={handleRadioChangeArmee}>
                      <FormControlLabel
                        value="Oui"
                        control={<Radio />}
                        label="Oui"
                      />

                      <FormControlLabel
                        value="Non"
                        control={<Radio />}
                        label="Non"
                      />
                    </RadioGroup>
                    {selectedArmee === "Oui" && (
                      <>
                        <FormLabel>
                          Si Oui, indiquer les dates, les lieux , heures et
                          nombre d'agents:
                        </FormLabel>
                        <br />
                        <Box>
                          <TextField
                            fullWidth
                            name="lieux"
                            placeholder="Lieux"
                            onChange={handleChangeLieuxArmee}
                          ></TextField>

                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                              components={["MobileDateTimePicker"]}
                            >
                              <DemoItem label="DE">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateArmeeStart}
                                />
                              </DemoItem>
                              <DemoItem label="à">
                                <MobileDateTimePicker
                                  defaultValue={dayjs()}
                                  onChange={onChangeDateArmeeFinish}
                                />
                              </DemoItem>
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>

                        <br />
                        <Box>
                          <FormLabel>Nombre d'agents</FormLabel>
                        </Box>
                        <Box>
                          <TextField
                            fullWidth
                            type="number"
                            placeholder="Nombre d'agents"
                            onChange={handleChangeNbrArmee}
                          />
                        </Box>
                        <br />
                        <Box>
                          <FormLabel>Préstation Demandée</FormLabel>
                        </Box>
                        <Box>
                          <TextField
                            fullWidth
                            multiline
                            rows={8}
                            placeholder="Ecrire ici votre prestation"
                            onChange={handleChangePrestationArmee}
                          />
                        </Box>
                      </>
                    )}
                  </Box>
                </Grid>
              </Grid>
              <br />
              <br />
              <br />

              <br />
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="borderGrid"
                >
                  <Box>
                    <FormLabel>
                      <strong> Main-d'œuvre étrangère:</strong>
                    </FormLabel>
                  </Box>
                  <Box>
                    <br />
                    <Box>
                      <TextField
                        fullWidth
                        label="Nom"
                        variant="outlined"
                        onChange={handleChangeNomEtrangere}
                      />
                    </Box>
                    <br />

                    <Box>
                      <TextField
                        fullWidth
                        label="Prénom"
                        variant="outlined"
                        onChange={handleChangePrenomEtrangere}
                      />
                    </Box>
                    <br />
                    <Box>
                      <TextField
                        fullWidth
                        label="Nationalité"
                        variant="outlined"
                        onChange={handleChangeNationaliteEtrangere}
                      />
                    </Box>
                    <br />
                    <Box>
                      <TextField
                        fullWidth
                        label="Fonction"
                        variant="outlined"
                        onChange={handleChangeFonctionEtrangere}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </FormGroup>
          </div>

          <div label="Autres prestation">
            {successMessage && (
              <Alert severity="success">Demande ajouté avec succes</Alert>
            )}
            {errorMessage && (
              <Alert severity="error">Erreur lors de l'ajout de demande</Alert>
            )}
            <h2>Autres prestations</h2>
            <div className="borderGrid">
              <TextField
                fullWidth
                multiline
                rows={10}
                placeholder="Ecrire ici votre prestation"
                onChange={handleChangeAutrePrestation}
              />
            </div>
          </div>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}

export function FormikStepper({ children, ...props }) {
  const childrenArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  function isFirstStep() {
    return step === 0;
  }
  return (
    <>
      <Stepper activeStep={step} alternativeLabel>
        {childrenArray.map((child) => (
          <Step key={child.props.label}>
            <StepLabel>{child.props.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <br />
      <br />
      <br />

      <Formik
        {...props}
        onSubmit={async (values, helpers) => {
          await props.onSubmit(values, helpers);
        }}
      >
        {({ isSubmitting }) => (
          <Form encType="multipart/form-data">
            {currentChild}
            <br />
            <Grid container spacing={2}>
              <Grid item>
                {!isFirstStep() ? (
                  <Button
                    disabled={isSubmitting}
                    variant="contained"
                    onClick={() => {
                      setStep(step - 1);
                      props.initForm();
                    }}
                  >
                    Récent
                  </Button>
                ) : null}
              </Grid>
              <Grid item>
                {isLastStep() ? (
                  <Button
                    startIcon={
                      isSubmitting ? <CircularProgress size="1rem" /> : null
                    }
                    disabled={isSubmitting}
                    variant="contained"
                    type="submit"
                  >
                    Soumettre
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      setStep(step + 1);
                      props.handleSuivant();

                      props.initForm();

                      e.preventDefault(); // to prevent this button to react as a submit button
                    }}
                  >
                    Suivant
                  </Button>
                )}
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
}
