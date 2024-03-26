import { useState } from "react";
import  axios  from "axios";
import useAsyncEffect from "use-async-effect"
import BinNote from "./BinNote"
import "./css/notes.css";
import { CssBaseline,Grid,Container} from "@mui/material"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Delete(){
    const url="http://localhost:3000/api/"
  
    const [notes,setNotes]=useState([]);
      
      


      useAsyncEffect(
          async ()=>{
              const res=await axios.get(url+"bin",{ headers: {'token': localStorage.getItem('token')}});
              setNotes(res.data.notes)
            },[] )
            
            
            async function handledelete(id)
            {
                const res=await axios.delete(url+"bin/permdelete/"+id,{ headers: {'token': localStorage.getItem('token')}})
                updatenote()
                toast.success(res.data.msg ,{
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                    
                    });
               
            }
              
            
    async function updatenote()
    {
        const res=await axios.get(url+"bin",{ headers: {'token': localStorage.getItem('token')}});
        setNotes(res.data.notes)
    }

    //handle click

    async function handlerestore(id)
    {
        console.log(localStorage.getItem('token'))
        const res=await axios.delete(url+"restore/"+id,{ headers: {'token': localStorage.getItem('token')}})
        updatenote()
        toast.success(res.data.msg ,{
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            
            });
          
    }

   

   
    return(
        <>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"

/>
        <CssBaseline/>
      
        <Container className="notescon">
        <Grid container  spacing={4} justifyContent='center' alignItems='center' marginBottom={2.5}>
           
        {
        notes.map((obj,index)=>{
            return <BinNote key={obj._id} image={obj.image} title={obj.title} id={index} content={obj.note} deleteclick={handledelete} restore={handlerestore}/>
        })
        }
        </Grid>
        </Container>
       
        </>
    )
}
