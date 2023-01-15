import { useContext, useEffect } from 'react'
import {Context as AuthContext} from '../context/AuthContext'

const LoadingScreen = () => {
  const {clearErrorMessage, tryLocalSignin} = useContext(AuthContext);
 
  useEffect(() => {
    clearErrorMessage();
    tryLocalSignin();
  }, [])

  return null;
}

export default LoadingScreen