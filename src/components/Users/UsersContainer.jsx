import React from 'react';
import {connect} from "react-redux";
import { follow, setCurrentPage, toggleIsFollowingProgress, getUsers, unFollow,} from "../../redux/Users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";




class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPagechanged = (pageNumber) =>{
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {


        return (
            <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPagechanged={this.onPagechanged}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
            </>

        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect (mapStateToProps, { follow,unFollow,setCurrentPage,toggleIsFollowingProgress,getUsers}),
    withAuthRedirect
)(UsersContainer)

