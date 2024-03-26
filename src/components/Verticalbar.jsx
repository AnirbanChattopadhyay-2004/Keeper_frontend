
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box'
import NotesIcon from '@mui/icons-material/Notes';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom"
export default function Verticalbar() {
  const navigate=useNavigate()
    return (
     
        <Box maxHeight='100%' position='fixed' >
        <List    sx={{bgcolor:"white",height:'100vh'}}>
        <ListItemButton onClick={()=>{navigate("/keeper/home")}}  sx={{m:1} } >
        <ListItemIcon>
        <NotesIcon/>
        </ListItemIcon>
        <ListItemText primary="Notes" sx={{display:{xs:'none',sm:'none',md:'block'}}}/>
      </ListItemButton>
        {/* <ListItemButton component="a" href='#' sx={{m:1}}>
        <ListItemIcon>
          <NotificationsNoneIcon/>
        </ListItemIcon>
        <ListItemText primary="Remainder" sx={{display:{xs:'none',sm:'none',md:'block'}}}/>
      </ListItemButton>
         */}
        <ListItemButton component="a" href='#' sx={{m:1}} onClick={()=>{navigate("/keeper/archieve")}}>
        <ListItemIcon>
          <ArchiveIcon/>
        </ListItemIcon>
        <ListItemText primary="Archive" sx={{display:{xs:'none',sm:'none',md:'block'}}} />
      </ListItemButton>


        <ListItemButton onClick={()=>{navigate("/keeper/bin")}}  sx={{m:1}}>
        <ListItemIcon>
          <DeleteIcon/>
        </ListItemIcon>
        <ListItemText primary="Bin" sx={{display:{xs:'none',sm:'none',md:'block'}}}/>
      </ListItemButton>
      </List>
      </Box>
   
    );
  }