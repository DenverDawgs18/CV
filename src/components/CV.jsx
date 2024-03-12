import General from "./General";
import Education from "./Education";
import Practical from "./Practical";
import { useState } from "react";

export default function CV(){
    const [firstName, setFirstName] = useState('');
    function handleFNChange(e){
        setFirstName(e.target.value);
    }
    const [lastName, setLastName] = useState('');
    function handleLChange(e){
        setLastName(e.target.value);
    }
    const [email, setEmail] = useState('');
    function handleEChange(e){
        setEmail(e.target.value);
    }
    const [phoneNumber, setPhoneNumber] = useState('');
    function handlePNChange(e){
        setPhoneNumber(e.target.value);
    }
    
    return(
        <div className="wrapper">

        
        
            <form className="main">
                <General 
                FNvalue={firstName}
                handleFChange={handleFNChange}
                LNvalue={lastName}
                handleLChange={handleLChange}
                EValue={email}
                handleEChange={handleEChange}
                PNValue={phoneNumber}
                handlePNChange={handlePNChange}
                />
                <Education />
                <Practical />
            </form>
            <div className="resume">
                <div className="generalResume">
                    <h3>General</h3>
                    <p>First name: {firstName} </p>
                    <p>Last name: {lastName} </p>
                    <p>Email: {email} </p>
                    <p>Phone number: {phoneNumber} </p>
                </div>
                <div className="educationResume">
                    <h3>Education</h3>
                    <p>School name: </p>
                    <p>Degree obtained: </p>
                    <p>From XXX to XXX</p>
                
                {/* Will probably need to factor this and practicalResume into own components to introduce
                the idea of multiple degrees or jobs */}
                 
                </div>
                <div className="practicalResume">
                    <h3>Practical Experience</h3>
                    <p>Company name: </p>
                    <p>Position title: </p>
                    <p>Main responsibilities: </p>
                    <p>From XXX to XXX</p>
                </div>

            </div>
        </div>
    )
}