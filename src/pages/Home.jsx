import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoggedState } from "../state/slices/manageUser";
import { useGetRandomActivity } from "../hooks/useGetRandomActivity";
import { useGetRandomPerson } from "../hooks/useGetRandomPerson";
import { useLocalStorage } from "../hooks/useLocalStorage";

import UserProfile from "../components/UserProfile";
import PersonDetails from "../details/PersonDetails";
import ActivityDetails from "../details/ActivityDetails";

import HangerContactInfo from '../assets/HangerContactInfo.png';
import './styles/Home.css'


const Home = () => {

    const dispatch = useDispatch()
    const [contactPressed, setContactPressed] = useState(false);
    const [savedPeople, setSavedPeople] = useState(1)
    const { loadPeopleTotal, savePersonDetails, savePeopleTotal } = useLocalStorage('');

    const { data: randomPerson, isLoading, isFetching: isFetchingPerson, refetch: refetchPerson } = useGetRandomPerson()
    const { data: randomActivity, isFetching: isFetchingActivity, refetch: refetchActivity } = useGetRandomActivity()

    useEffect(() => {
        dispatch(setLoggedState(true))
        setSavedPeople(loadPeopleTotal())
    }, [])

    const buttonSaveDetails = () => {
        setContactPressed(false)
        setSavedPeople(prev => prev + 1);
        savePeopleTotal(savedPeople)
        savePersonDetails(savedPeople, randomPerson)
    }

    const buttonNewPerson = () => {
        setContactPressed(false)
        refetchPerson()
        refetchActivity()
    }

    return (
        <div className="home-page">
            <UserProfile />
            <div className="person-search">

                {isFetchingActivity || isFetchingPerson || isLoading ?
                    <h3>. . .<br />Finding you a person<br />to hangout with<br />. . .</h3>
                    :
                    <div>

                        <ActivityDetails data={randomActivity} person={randomPerson} />

                        <div className="person-info" onClick={() => { setContactPressed(!contactPressed) }}>
                            
                            <img className="img-hanger-contact-info" src={HangerContactInfo} alt="logo" />

                            <p className="font-changa">Connect with Him/Her: </p>

                            <PersonDetails data={randomPerson} contactPressed={contactPressed} />

                            {contactPressed ? <div className="contact-info-container">
                                <button className="button-save-details" onClick={() => {
                                    buttonSaveDetails()
                                }}>Save Details</button>
                            </div> : ''}
                        </div>

                        <button onClick={() => {
                            buttonNewPerson()
                        }}>Find me a new person<br />to hangout with
                        </button>

                    </div>
                }
            </div>
        </div>
    )
}


export default Home;