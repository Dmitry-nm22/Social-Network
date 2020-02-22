import React from 'react';
import styles from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () =>{
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input type="text" value={this.props.status} onBlur={this.deactivateEditMode} autoFocus={true}/>
                    </div>
                }

            </>
        )
    }
}

export default ProfileStatus;