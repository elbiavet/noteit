import DescriptionIcon from '@mui/icons-material/Description';
import { Grid, Typography } from "@mui/material"


export const NothingSelectedView = () => {
  return (
    <Grid  
      className="animate__animated animate__fadeIn animate__faster"
      container 
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight:'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
    >
      <Grid item xs={ 12 }>
        <DescriptionIcon sx={{ fontSize: 90, color: "white"}} />
      </Grid>

      <Grid item xs={ 12 }>
        <Typography color= "white" variant= "h5">Selecciona o crea una nota para comenzar</Typography>
      </Grid>

    </Grid>
  )
}
