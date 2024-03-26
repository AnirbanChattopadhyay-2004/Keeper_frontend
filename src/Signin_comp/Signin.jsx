import { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {  CssBaseline ,Grid,Link,Box,Typography,Button,TextField,FormControl,InputLabel,IconButton,InputAdornment,OutlinedInput} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Signin()
{
    const [name,setName]=useState("");
    const [pwd,setPwd]=useState("");
    const url=import.meta.env.VITE_url
    const navigate=useNavigate()
    const[colorU,setColorU]=useState("primary");
    const[colorP,setColorP]=useState("primary");   
    const[p,setP]=useState("");
    async function handleClick(){
        try{
        const res=await axios.post(url+"/api/auth/login",{username:name,password:pwd});
        localStorage.setItem("token",res.data.token);
        const fname=name.substring(0,name.indexOf("@"))
        localStorage.setItem("name",fname)
        setColorP("primary")
        setColorU("primary")
        
        navigate("/keeper");
        }
        catch(err){
          setColorP("error")
          setColorU("error")
          setP("Invalid Username or Password")
        }
    }
    const [showPassword, setShowPassword] = useState(false);
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    return (

        <>
        <Grid container sx={{backgroundImage:"url('/images3.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
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
                type="email"
                id="outlined-required"
                label="Email"
                sx={{width:"100%"}}
                color={colorU}
                onChange={(e)=>{setName(e.target.value)}} value={name}/>
                <Typography variant={"body1"} color={"error"}>{p}</Typography>
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
            <Typography variant={"body1"} color={"error"}>{p}</Typography>
            </Grid>
            <Grid item>
            <Button variant="contained" onClick={handleClick}  sx={{width:"100%",height:"3.25rem",borderRadius:"0.25rem",fontWeight:"750",fontSize:"1.2rem"}}>Welcome Back  </Button>
            <Typography variant={"subtitle1"} textAlign={"center"} fontSize={"1.2rem"} sx={{marginTop:"2rem"}}>Don't have an account? <Link sx={{cursor:"pointer"}} onClick={()=>{navigate("/Signup")}}>Sign up</Link></Typography>
            </Grid>
            
        </Grid>
        </Box>
        </Box>
        </Grid>
        </Grid>
        </>
    )
}