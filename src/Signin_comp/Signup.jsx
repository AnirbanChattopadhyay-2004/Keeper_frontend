import { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {  CssBaseline ,Box,Grid,Typography,Link,Button,TextField,FormControl,InputLabel,IconButton,InputAdornment,OutlinedInput} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup()
{
  const url=import.meta.env.VITE_url
    const [name,setName]=useState("");
    const [pwd,setPwd]=useState("");
    const[colorU,setColorU]=useState("primary");
    const[colorP,setColorP]=useState("primary");
    const navigate=useNavigate()
    
    const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    async function handleClick(){
      
      const newurl = `${url}/api/auth/signup`;
        try{
        const res=await axios.post(newurl,{username:name,password:pwd});
        console.log(res)
        setName("");
        setPwd("");
       setColorU("primary")
       setColorP("primary")
       const data=res.data.msg
       if(data.charAt(0)=='e'){
       toast.error(data.substring(2), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setColorU("error");
    }
         else if(data.charAt(0)=='p'){
        toast.error(data.substring(2), {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          
          });
        setColorP("error")
        }
          else
          {
             alert("New user created")
            navigate("/signin");
          }
     
        }
        catch(err){
            console.log(err)
            setColorU("error")
            setColorP("error")
            toast.error('User already present', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              
              });
              
            
            
        }
    }
    
    return (

        <>          
                    <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"/>

        <Grid container sx={{backgroundImage:"url('../../public/images3.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
        <Grid item xs={0} md={7} display={{xs:"none",sm:"none",md:"block"}}>
            <Box sx={{height:"100vh",width:"100%"}} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Typography variant="h2" color="primary" sx={{textShadow:"1px 2px 10px lightblue"}} fontSize={"6rem"} fontWeight={820}>Keeper  </Typography>
                <Typography variant="h4" color="white" sx={{textShadow:"1px 1px 10px black"}} fontWeight={750}>&nbsp;&nbsp;A notes keeping app...</Typography>
                
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={5} >
        <Box sx={{height:"100vh",width:"100%"}} display={"flex"} alignItems={"center"} justifyContent={"center"} >
            <Box sx={{height:"50vh",width:"70%",bgcolor:"white",borderRadius:"0.85rem",boxShadow:"1px 1px 10px black ,-1px -1px 10px white"}} display={"flex"}  justifyContent={"center"} alignItems={"center"}>
        <Grid container direction={"column"} sx={{width:"90%"}} spacing={3}>
        <CssBaseline/>
        <Grid item >     
            <TextField
                required
                id="outlined-required"
                label="Email"
                sx={{width:"100%"}}
                color={colorU}
                onChange={(e)=>{setName(e.target.value)}} value={name}/>
        </Grid>
        <Grid item>
           <FormControl sx={{  width: '100%' }} variant="outlined" color={colorP} onChange={(e)=>setPwd(e.target.value)} value={pwd}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
            </Grid>
            <Grid item>
            <Button variant="contained" onClick={handleClick} sx={{width:"100%",height:"3.25rem",borderRadius:"0.25rem",fontWeight:"750",fontSize:"1.2rem"}}>Create User</Button>
            <Typography variant={"subtitle1"} textAlign={"center"} fontSize={"1.2rem"} sx={{marginTop:"2rem"}}>Already have an account? <Link sx={{cursor:"pointer"}} onClick={()=>{navigate("/Signin")}}>Sign in</Link></Typography>
            </Grid>
            
        </Grid>
        </Box>
        </Box>
        </Grid>
        </Grid>
        </>
    )
}