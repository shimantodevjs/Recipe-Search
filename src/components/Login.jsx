import { useState } from 'react';
import {Button} from '@mui/material'
import { useForm } from "react-hook-form";

const Login = () => {

const [showPassword, setShowPassword] = useState(false);

const handleTogglePassword = () => {
    setShowPassword(!showPassword);
}

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = (data) => {
    console.log(data);
  };

  return (
<div className='login__form'>
  <h1 className='title'>LOGIN</h1>    
    <form 
         onSubmit={handleSubmit(onSubmit)}
         style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          width:'300px',
         }}
         >
  <div style={{ margin: '10px 0px' }}>
  <label htmlFor="email" style={{ fontSize: '12px',marginBottom:'5px', display:'block' }}>
      Email
  </label>
  <input
    id="email"
    type="email"
    {...register('email', { required: true })}
    style={{
      border: 'none',
      outline: 'none',
      borderBottom: '1px solid #efefef',
      width: '300px',
      padding:'8px',
      touchAction: 'manipulation',
    }}
  />
  {errors.email && (
    <span style={{ fontSize: '12px', color: 'red' }}>
      This field is required
    </span>
  )}
  </div>
   
   <div style={{margin:'10px 0px'}}>
      <div
         style={{
             display:'flex',
             alignItems:'center',
             justifyContent:'space-between',
             marginBottom:'5px'
         }}
      >
      <label htmlFor='password' style={{fontSize:'12px'}}>
         Password
      </label>
      <label 
           htmlFor='password' 
           style={{fontSize:'12px',color:'blue',cursor:'pointer'}}
           onClick={handleTogglePassword}
           >
         {showPassword ? 'Hide Password' : 'Show Password'}
      </label>
      </div>
      <input
         id='password' 
         type={showPassword? 'text' :'password'}
         {...register ('password',{required:true})}
         style={{
             border: 'none',
             outline: 'none',
             borderBottom: '1px solid #efefef',
             width: '300px',
             padding:'8px',
             touchAction: 'manipulation',
          }}
         />
      {errors.password &&(
        <span style={{ fontSize: '12px', color: 'red' }}>
          This field is required
        </span>
      )}
   </div>     
      <Button
          type="submit"
          fullWidth
          variant="text"
          sx={{
            backgroundColor:'#1167b1',
            padding:'15px 0px',
            marginTop:'15px',
            color:'#fff',
            '&:hover': {
                 backgroundColor: '#1167b1',
             },
          }}
       >Login</Button>
    </form>
    </div>
  )
}

export default Login
