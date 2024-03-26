import { useState,useEffect } from "react";
import  axios  from "axios";
import useAsyncEffect from "use-async-effect"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./css/notes.css";
import { CssBaseline,Grid,Container,TextField,Box,Button,styled} from "@mui/material"
import  Note from "./note"
import DoneIcon from '@mui/icons-material/Done';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function Notes({notessearch})
{
    // const url="http://localhost:3000/api/"
    const url=import.meta.env.VITE_url+"/api/"
    const [title,setTitle]=useState("");
    const [note,setNote]=useState("");
    console.log(notessearch)
    const [notes,setNotes]=useState([]);
    const[image,setImage]=useState("");
    
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
      
      
      useEffect(()=>{
        setNotes(notessearch)
      },[notessearch])

      useAsyncEffect(
          async ()=>{
              const res=await axios.get(url+"notes",{ headers: {'token': localStorage.getItem('token')}});
              setNotes(res.data.notes)
            },[]
            )
            
             
              
            
    async function updatenote()
    {
        const res=await axios.get(url+"notes",{ headers: {'token': localStorage.getItem('token')}});
        setNotes(res.data.notes)
    }

    //hanlde click

    async function handleClick()
    {
       const formData=new FormData()
       
      formData.append("image",image)
      formData.append("title",title)
      formData.append("note",note)
      formData.append("id",notes.length)

      
    //    await axios.post(url+"notes",{note:obj,imagefile:formData},{headers: {'token': localStorage.getItem('token'),"Content-Type":"multipart/form-data"}})
      
    await axios.post(url+"notes",formData,{headers: {'token': localStorage.getItem('token'),"Content-Type":"multipart/form-data"}})
    
        
        updatenote()

        toast.success("New notes added...j",{
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            
            });
         setTitle("")
        setNote("")
        setImage("")
    }

    //file handle system

    function handleimage(e)
    {
        setImage(e.target.files[0])
        
    }


    async function handledelete(id)
    {
        const res=await axios.delete(url+"notes/"+id,{headers:{'token': localStorage.getItem('token')}})
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
        updatenote()
      
    }
    
    async function handlearchieve(id)
    {
        const res=await axios.delete(url+"archieve/"+id,{headers:{'token': localStorage.getItem('token')}})
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
        updatenote()
      
    }




    return(
        <>
        <CssBaseline/>
        <Container sx={{display:"flex",justifyContent:"center"}}  >
        <Box   sx={{width:3/4,marginTop:"2vh",border:"solid 0.1px gray", borderRadius:"0.5rem",position:'relative'}} >
            <Container>
        <TextField
        
        margin="dense"
        variant="standard"
        onChange={(e)=>{
            setTitle(e.target.value)
        }}
        value={title}
        InputProps={{ disableUnderline: true ,style:{color:"gray",letterSpacing:"0.1rem"}}}
        id="outlined-textarea"
        // label="Title"
        placeholder="Title..."
        multiline
        sx={{width:"95%"}}
        
        />
        <TextField
        maxRows={5}
        onChange={(e)=>{setNote(e.target.value)}}
        value={note}
        variant="standard"
        margin="dense"
        InputProps={{ disableUnderline: true ,style:{color:"gray",letterSpacing:"0.1rem"}}}
        InputLabelProps={{
            style:{ color:"gray"}}}
        id="outlined-textarea"
        //   label="Note"
        placeholder="Take a note..."
        multiline
        sx={{width:"95%"}}
        
        />
       
       
        <Button variant="text"  onClick={handleClick} sx={{position:'absolute',bottom:'0',right:'0',borderRadius:"50%"}}><DoneIcon/></Button>
        <Button component="label" variant="text" sx={{bottom:'0',left:'0',borderRadius:"50%"}} startIcon={<CloudUploadIcon sx={{height:"1.5rem"}}/>}>
            <VisuallyHiddenInput type="file" onChange={handleimage}/>
        </Button>
       
       
       <ToastContainer position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            theme="light"
            />
        </Container>
        </Box>
        </Container>
        <Container maxWidth="xl" className="notescon">
        <Grid container  spacing={4} justifyContent='center' alignItems='center' marginBottom={2.5}>
           
        {
        notes.map((obj,index)=>{
            return <Note key={obj._id} image={obj.image} title={obj.title} id={index} content={obj.note} archieve={handlearchieve} deleteclick={handledelete}/>
        })
        }
        </Grid>
        </Container>
       
        </>
    )
}