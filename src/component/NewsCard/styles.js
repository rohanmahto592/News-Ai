import {makeStyles} from '@material-ui/core/styles';
import {borders} from '@material-ui/system';
export default makeStyles({
    media:{
        height:250,
    },
    border:{
        border:'solid',
        
    },
    fullHeightCard:{
        height:'100%',
    },
    card:{
        display:'flex',
        border:' 10px solid #d2c2f0',
        flexDirection:'column',
        borderRadius:10,
        borderRight:10,
        justifyContent:'space-between',
        borderBottom:'15px solid #43b4b4',    

    },
    activeCard:{
        borderBottom:'10px solid red',
        color:' SlateBlue',
        backgroundColor:'Gray',   
    },
    grid:{
        display:'flex',
    },
    details:{
        display:'flex',
        justifyContent:'space-between',
        margin:'20px',

    },
    title:{
        padding:'0 16px',
    },
    cardActions:{
        padding:'0 16px 8px 16px',
        display:'flex',
        justifyContent:'space-between',
        
    },

});

