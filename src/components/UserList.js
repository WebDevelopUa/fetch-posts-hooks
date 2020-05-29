import React from "react";
import useResources from "./useResources";
import img from '../images/square-image.png';

const UserList = () => {
    const users = useResources('users')

    if (!users.length) {
        return (
            <div className="ui relaxed divided list">
                <div className="ui loading vertical segment">
                    <p>&nbsp;</p>
                </div>
            </div>
        )
    } else
        return (
            <div className="ui relaxed divided list middle aligned">
                {users.map(user => (
                    <div key={user.id} className="item">
                        <img className="ui avatar tiny image" src={img} alt="img" />
                        <div className="content">
                            <div className="ui small blue header">{user.name}</div>
                            <div className="description">{user.email}</div>
                            <div className="description">{user.phone}</div>
                            <a href={"http://" + user.website} target="_blank" rel="noopener noreferrer"
                               className="description">{user.website}</a>
                        </div>
                    </div>))
                }
            </div>
        )
}

export default UserList