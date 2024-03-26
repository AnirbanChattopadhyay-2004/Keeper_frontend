import Header from "../components/Header.jsx";
import Notes from "../components/Notes.jsx";
import {  CssBaseline ,Grid} from "@mui/material";
import "../components/css/app.css"
import Verticalbar from "../components/Verticalbar.jsx";
import { useState } from "react";
import Delete from "../components/Delete.jsx"
import {Routes,Route} from "react-router-dom";
import Archieve from "../components/Archieve.jsx"
import axios from "axios"
export default function Keeper()
{
 
  const [notess,setNotes]=useState([]);
  async function filter(searchval)
  {
    if(searchval){
      console.log(searchval)
      const res=await axios.get(`http://localhost:3000/api/search?q=${searchval}`,
      
      { headers: {'token': localStorage.getItem('token')}})
      // console.log(res.data.notes)
     setNotes(res.data.notes)}
     else
     {
      const res=await axios.get('http://localhost:3000/api/notes', { headers: {'token': localStorage.getItem('token')}})
      setNotes(res.data.notes)
     }
     
  }

  return (
  <>
   <CssBaseline/>
      <Header filter={filter}/>
      
    <Grid container  columnSpacing={2} >
    
    <Grid item  xs={2}>
    <Verticalbar />
    </Grid>
    <Grid item xs={10}>
        <Routes>
    <Route exact path="/home" element={<Notes xs={8} notessearch={notess}/>}></Route> 
    <Route exact path="/bin"  element={<Delete  xs={8} />}></Route>  
    <Route exact path="/archieve"  element={<Archieve  xs={8} />}></Route>  
         </Routes>
    </Grid>
    </Grid>
  
   
    </>
  )
}