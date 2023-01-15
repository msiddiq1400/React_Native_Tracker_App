import { Text, Button } from '@rneui/themed';
import React from 'react'
import { useContext } from 'react'
import {Context as AuthContext} from '../context/AuthContext'
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const {signout} = useContext(AuthContext);

  return (
    <>
      <Text>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout}/>
      </Spacer>
    </>
  )
}

export default AccountScreen