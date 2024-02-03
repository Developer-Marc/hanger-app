import { useAuth0 } from "@auth0/auth0-react";

const AuthLogin = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated &&
        <button className="link-button" onClick={() => loginWithRedirect()}>Log In</button>
    )
};

export default AuthLogin;