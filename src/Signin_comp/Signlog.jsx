// import { useState } from "react"
import {useNavigate} from "react-router-dom"
import {  CssBaseline ,Grid,Box,Typography,Button} from "@mui/material";
import {ReactTyped} from "react-typed";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Signlog()
{
    const navigate=useNavigate()
    return (
    <>
    <CssBaseline/>
    <Grid container>
      <Grid item  xs={0} sm={7} sx={{display:{xs:"none",sm:"block"}}}>
        <Box sx={{height:"100vh",backgroundColor:"#0F1111"}}>
          <Typography variant={"h5"} align={"left"} sx={{color:"rgb(210, 146, 255)",position:"relative",top:"2vh",left:"1vw",padding:"0.85rem",fontWeight:"860"}}>keePer <FiberManualRecordIcon fontSize="small" /></Typography>
              <Typography variant={"h3"} align={"center"} sx={{color:"rgb(210, 146, 255)",position:"relative",top:"30vh",padding:"0.85rem",fontWeight:"750"}}><ReactTyped strings={["Welcome to our notes keeping app..  The Keeper","An app that facilates easy maintainance of notes"]} typeSpeed={50} loop backSpeed={10} showCursor={true} cursorChar="." /></Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={5} sx={{position:"relative"}} >   
        <Box  sx={{height:"100vh",width:"100%",overflow:"hidden", backgroundImage:"url('/notesbackground.webp')",backgroundPosition:"center",backgroundSize:"cover"}}>
            
            <Typography variant={"h5"} align={"left"} sx={{color:"white",display:{xs:"block",sm:"none"},position:"relative",top:"2vh",left:"1vw",padding:"0.85rem",fontWeight:"860"}}>keePer <FiberManualRecordIcon fontSize="small" /></Typography>
            <Box sx={{position:"relative",top:"40%",left:"1vw"}}>
            <Typography variant={"h4"} align={"center"} sx={{color:"aliceblue",position:"relative",padding:"0.85rem",fontWeight:"750"}}>Ge<span style={{color:"antiquewhite"}}>tti</span>ng <span style={{color:"black"}}><span style={{color:"gray"}}>Star</span>ted...</span> </Typography>

            <Grid container xs={11} sx={{position:"absolute",left:"1vw"}}>
              <Grid item sm={11} md={5} xs={11} sx={{m:2}}>
                  <Button variant="contained" sx={{width:"100%",p:1,m:1,fontSize:"1.2rem"}}  onClick={()=>{navigate("/Signin")}}>Log In</Button>
              </Grid>    
              <Grid item sm={11} md={5} xs={11} sx={{m:2}}>        
                   <Button variant="contained" sx={{width:"100%",p:1,m:1,fontSize:"1.2rem"}} onClick={()=>{navigate("/Signup")}}>Sign Up</Button>
               </Grid>
            </Grid>
          </Box>
       </Box>
    
      </Grid>
    </Grid>
    </>
    )
}