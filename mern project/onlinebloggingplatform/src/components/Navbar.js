
import React from 'react'
import { NavLink ,Outlet } from 'react-router-dom'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import { useNavigate } from 'react-router-dom';


// const LinkStyles = ({isActive}) => {
//     return {
//         textDecoration : isActive ? 'none' : 'underline',
//         fontWeight : isActive? 'bold' : 'normal' ,
//         marginRight: '20px',
//     }
// }



const Logo1 = ()=> {
  return(
    <img src= "Pictures/blogimg.png" alt="Logo" style={{ height: '50px', marginRight: '20px' }} />
  );
};
const Logo2 = () => {
  return (
    <img src="Pictures/write.png" alt="Logo" style={{ height: '50px', marginRight: '20px' }} />
  );
};

const hStyle = {
  fontSize: '20px',
  marginRight: '40px'
}

export default function Navbar() {
  
const navigate = useNavigate();

  const [more, setMore] = React.useState('');

  const handleChange = (event) => {
    setMore(event.target.value);
  };

  return (
    <>
    <div>
      <nav className='primary-nav' style={{ display: 'flex', alignItems: 'center' }}>

        <Logo1/>

        <h1 style={hStyle}>Blog Flow</h1>

        <Button  variant="outlined" href="#outlined-buttons" onClick={() => navigate('h')} style={{marginRight: '50px'}} >Home</Button>
         <Button  variant="outlined" href="#outlined-buttons" onClick={() => navigate('m')} style={{marginRight: '50px'}} >Myfeed</Button>
         <Button  variant="outlined" href="#outlined-buttons" onClick={() => navigate('d')} style={{marginRight: '50px'}} >Discussion</Button>
         
        {/* <NavLink to="/d"  style={{LinkStyles ,  marginRight: '50px'}} >Discussion</NavLink>  */}
        
        <Box sx={{  display: 'flex', marginRight: '60px', width: '100px', padding: ' 0px', fontSize: '0.8rem'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">MORE</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="MORE"
          value={more}
          onChange={handleChange}
        >
          <MenuItem >Explore</MenuItem>
          <MenuItem >Download App</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <h2 style={{ fontSize: '20px', marginRight: '80px' }}  >START YOUR BLOGGING CARRIER</h2>

    <Box style={{ display: 'flex', alignItems: 'center', marginRight: '180px' }}>
            <Logo2 />
            <Button>WRITE</Button>
          </Box>

<Button variant="contained" sx={{ borderRadius: 50 , fontSize: '1rem', padding: '8px 20px'  }} onClick={() => navigate('/h/l')}>LOGIN</Button>
      </nav>
    </div>
    </>
  )
}
