import {Box,Grid,Card,Stack,Typography} from "@mui/material"
import {Outlet} from "react-router"
import { useTrialContext } from "./context"
import { useEffect } from "react"
export const TrialLayout = () => {
  const {title,changeTitle,leftBarVisible,rightBarVisible,changeLeftbarVisiblity,changeRightbarVisiblity} = useTrialContext()

  useEffect(() => {
    changeTitle("Title2")
   
  },[])

  useEffect(() => {

    const timeout = setTimeout(() => {
      changeLeftbarVisiblity(true)
      changeRightbarVisiblity(true)
    },2000)

    return () => clearTimeout(timeout)
    
  },[])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
      <Grid item xs={12} >
          <Card sx={{minHeight: 200}}>
            <Stack p={1} py={2} >
              <Typography>{title}</Typography>
            </Stack>
            
          </Card>
        </Grid>
        <Grid item xs={1}>
          {leftBarVisible && <Card sx={{height:"100%"}}>xs</Card>}
        </Grid>
        <Grid item  justifyContent="center" alignItems="center" xs={10}>
          <Outlet />
        </Grid>
        <Grid item  xs={1}>
          {rightBarVisible && <Card sx={{height:"100%"}}>xs</Card>}
        </Grid>
      </Grid>
    </Box>
  )
}
