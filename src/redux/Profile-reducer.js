import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {

    posts: [
        {id: 1, message: 'hi, how are you', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 11},
        {id: 2, message: 'blablabla', likesCount: 13},
        {id: 2, message: 'hey yo', likesCount: 11}
    ],
    profile: null,
    status: ''
}

  const profileReducer = (state = initialState, action) =>{
      switch (action.type) {
          case ADD_POST:
              let newPost = {
                  id: 5,
                  message: action.newPostText,
                  likesCount: 0
              };
              return  {
                  ...state,
                  posts: [...state.posts, newPost ],
                  newPostText: ''
              }
          case SET_USER_PROFILE:
              return  {
                  ...state,
                  profile: action.profile
              }
          case SET_STATUS:
              return  {
                  ...state,
                  status: action.status
              }
          default:
              return  state;
      }
}

//action creator
export const addPostActionCreator = (newPostText) =>( {type: ADD_POST, newPostText} );
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

//thunk creator
export const getUserProfile = (userId) =>
    (dispatch) =>{
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
}
export const getStatus = (userId) =>
    (dispatch) =>{
        profileAPI.getStatus(userId)
            .then(response => {
            dispatch(setStatus(response.data));
        })
}
export const updateStatus = (status) =>
    (dispatch) =>{
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setStatus(status));
                }
        })
}


export default profileReducer;