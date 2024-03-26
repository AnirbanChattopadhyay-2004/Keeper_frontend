import "./css/notes.css";

import { CssBaseline,Grid,Button,Card,CardActions ,CardContent ,CardMedia  ,Typography } from "@mui/material"


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
            image={"/"+props.image}
          
            
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
                <Button size="small" onClick={()=>{props.unarchieve(props.id)}}>Unarchieve</Button>
                
      </CardActions>
    </Card>
        </Grid>
        
        </>
    )
}