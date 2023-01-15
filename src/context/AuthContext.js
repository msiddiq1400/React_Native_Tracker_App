import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../navigation/navigationRef';

const authReducer = (state, actions) => {
    switch(actions.type) {
        case 'add_error': 
            return {...state, errorMessage: actions.payload};
        case 'signup':
        case 'signin':
            return {...state, token: actions.payload, errorMessage: ''};
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        case 'signout':
            return {...state, token: ''}
        default:
            return state;
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
}

const signup = (dispatch) => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signup ',{email, password});
        await AsyncStorage.setItem('@token', response.data.token);
        dispatch({type: 'signup', payload: response.data.token})
        RootNavigation.navigate('BottomTabNavigator');
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with the sign up'})
    }
}


const signin = (dispatch) => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signin ',{email, password});
        await AsyncStorage.setItem('@token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token})
        RootNavigation.navigate('BottomTabNavigator');
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with the sign in'})
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('@token');
    if(token) {
        dispatch({type: 'signin', payload: token})
        RootNavigation.navigate('BottomTabNavigator');
    } else {
        RootNavigation.navigate('Signin');
    }
}


const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('@token');
    dispatch({type: 'signout'})
    RootNavigation.navigate('Signin');
}


export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignin},
    {
        token: null, 
        errorMessage: ''
    }
)
