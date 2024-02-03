import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setGuestState } from "../state/slices/manageUser";
import AuthLogin from "../components/AuthLogin";

import HangerLogo from '../assets/HangerIcon.png';
import worldIcon from '../assets/worldIcon.png';
import './styles/LandingPage.css'




const LandingPage = () => {

    const { isLoading, error, isAuthenticated } = useAuth0();
    const { loggedIn } = useSelector((state) => state.user);
    const { isGuest } = useSelector((state) => state.user);
    const navigateTo = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuthenticated && !loggedIn) {
            navigateTo('/home')
        }
    }, [isAuthenticated])

    return (
        <div className="landing-container">

            <img className="logo" src={HangerLogo} alt="logo" />

            <h1 className="brand-name font-brand">Hanger</h1>
            <p className="intro-text font-changa">Welcome to the Hanger App.
                This app helps you connect and hangout with other people.
                You can login with your account or continue as guest.</p>

            <div className="user-state-actions">
                {error && <div> There was a problem with logging in: {error.message}</div>}
                {isLoading && <div> User Logging In . . .</div>}

                {!isLoading && !error && !isAuthenticated &&
                    <>
                        <AuthLogin />
                        <Link className="link-button" to="/home" onClick={() => {
                            dispatch(setGuestState(true))
                            console.log(isGuest)
                        }}>Guest</Link>
                    </>
                }

                {isAuthenticated && loggedIn &&
                    <Link className="link-button" to="/home">Resume Session</Link>
                }


            </div>

        </div>
    )
}

export default LandingPage;