import React from 'react';
import {addPostActionCreator} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



 let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
 }

 let mapDispatchTooProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
 }


const MyPostsContainer = connect(mapStateToProps, mapDispatchTooProps) (MyPosts);

export default MyPostsContainer;