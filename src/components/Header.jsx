import "./css/header.css";  
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/joy/Avatar';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CssBaseline,InputBase } from '@mui/material';
import { styled } from '@mui/system';
import {useNavigate} from "react-router-dom"
import DescriptionIcon from '@mui/icons-material/Description';
const Toolbarcomp=styled(Box)(({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"0.45rem"
}))
const Searchcomp=styled("div")(({
    height:"2.85rem",
    display:"flex",
    alignItems:"center",
    width:"40%",
    padding:"0 0.5rem",
   
    borderRadius:"0.5rem"
}))
const Icons=styled(Box)((({theme})=>({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:"1rem"
})))
export default function Header({filter})
{
    const [bgColor,setBgcolor]=useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate=useNavigate()
    let name=localStorage.getItem("name")
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  function handlenavigate()
  {
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    navigate("/signlog")
  }
    const element= 
    <>
    <CssBaseline/>
    
    <AppBar position="sticky" sx={{top:"0"}}>
        <Toolbarcomp>
        <Typography variant="h5" paddingX={3} sx={{display:{xs:"none" ,sm:"block"}}}>Keeper</Typography>
        <DescriptionIcon sx={{height:"2rem",width:"2rem",display:{xs:"block",sm:"none"}}}/>
        <Searchcomp  onChange={(e)=>filter(e.target.value)}   sx={{bgcolor:bgColor?'white':'lightblue'}}><InputBase fullWidth placeholder='Search...' onFocus={()=>{setBgcolor(true)}} onBlur={()=>{setBgcolor(false)}} /></Searchcomp>
        <Icons>
        <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
            <Avatar sx={{ bgcolor:"pink"}} >{(name.charAt(0)).toUpperCase()}</Avatar>
            </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        <MenuItem onClick={handlenavigate}>Logout</MenuItem>
      </Menu>
    </div>
            <Typography variant='h6' paddingX={3} sx={{display:{xs:"none",sm:"block"}}}> {name.charAt(0).toUpperCase()+name.substring(1)}</Typography>
        </Icons>
        
        </Toolbarcomp>
    </AppBar>
   
    </>
    return (element);
}