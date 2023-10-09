import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux';
import { getUsers, userLoginGoogle } from '../../Redux/actions';



function LoginGoogle() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
   
    const handleCallbackResponse = (response)=>{ 
      const userObj = jwtDecode(response.credential);
      // axios({
      //   method: "POST",
      //   url: `${URL}/user/googlelogin`,
      //   data:{idToken: response.credential}
      // })
      // dispatch(getUsers())  //llama a los usuarios get user
      dispatch(userLoginGoogle({idToken:response.credential}))
      navigate('/')
    }
        
    useEffect(() => {
      // eslint-disable-next-line no-undef
      google.accounts.id.initialize({
      client_id:'324441378981-s67itgaoi955o768r0ahgjllr2ebjlpt.apps.googleusercontent.com',
      callback: handleCallbackResponse

    });
      // eslint-disable-next-line no-undef
      google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {theme:'outline', size:'large'}
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      
        <div id='signInDiv'></div>
    )
}
export default LoginGoogle;
