import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../navigation/navigationRef';

const authReducer = (state, actions) => {
    switch(actions.type) {
        case 'add_error': 
            return {...state, errorMessage: actions.payload};
        case 'signup':
            return {...state, token: actions.payload, errorMessage: ''};
        default:
            return state;
    }
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


const signin = (dispatch) => ({email, password}) => {
        
}


const signout = (dispatch) => () => {
        
}


export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout},
    {
        token: null, 
        errorMessage: ''
    }
)
