import React from 'react';
import MainNavigationObject from './src/navigation';
import { Provider as AuthProvider } from './src/context/AuthContext';

const App = () => {
    return <AuthProvider>
        <MainNavigationObject/>
    </AuthProvider>
}

export default App;