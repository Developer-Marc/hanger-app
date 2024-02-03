import { useAuth0 } from "@auth0/auth0-react";
import './styles/UserProfile.css'

const UserProfile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <h1 className="activity-person  amiri-bold-italic user-welcome">
        Hi {isAuthenticated ?
                <>{user.name}!</>
                :
                <>Guest!</>}
        </h1>
    )
};

export default UserProfile;