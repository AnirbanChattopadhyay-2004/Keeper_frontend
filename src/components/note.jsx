import "./css/notes.css";

import { CssBaseline,Grid,Button,Card,CardActions ,CardContent ,CardMedia  ,Typography } from "@mui/material"

import DeleteIcon from '@mui/icons-material/Delete';
export default function Note(props)
{
    return (
        <>
        <CssBaseline/>
       
        <Grid item xs={8} sm={6} md={4} lg={4} xl={3}>
        <Card sx={{ maxWidth: 345,cursor:"pointer" }} className="notes">
      <CardMedia
            component="img"
            height={props.image?"auto":"0"}
            image={"../../public/"+props.image}
          
            
      />
      <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{wordWrap:"break-word"}}>
                        {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{wordWrap:"break-word"}}>
                       {props.content}
                </Typography>
      </CardContent>
      <CardActions>
                <Button size="small" onClick={()=>{props.deleteclick(props.id)}}>Delete</Button>
                <Button size="small" onClick={()=>props.archieve(props.id)}>Archieve</Button>
      </CardActions>
    </Card>
        </Grid>
        
        </>
    )
}