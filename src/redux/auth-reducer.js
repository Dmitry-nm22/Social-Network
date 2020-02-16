import {authAPI, usersAPI} from "../api/api";
import {toggleIsFollowingProgress, unfollowSuccess} from "./Users-reducer";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

  const authReducer = (state = initialState, action) =>{
      switch (action.type) {
          case SET_USER_DATA:
              return  {
                  ...state, ...action.data, isAuth: true

              }

          default:
              return  state;
      }
};

//action creators
export const setAuthUserData = (id, email, login) =>({type: SET_USER_DATA, data: {id: id, email: email, login: login} });

//thunk
export const getAuthUserData = () => (dispatch)=>{
        authAPI.me().then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }



export default authReducer;