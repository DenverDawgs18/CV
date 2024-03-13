import General from "./General";
import Education from "./Education";
import Practical from "./Practical";
import EducationResume from "./EducationResume"
import PracticalResume from "./PracticalResume";
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
    let idCount = 0;
    const [educationalExperiences, setEducation] = useState([{id: idCount, school: "Harvard", degree: "Applied Math",
               startingDate: "03/24/2024", endingDate: "05/20/2027"}]);
    
    function handleSchoolChange(id, e){
        setEducation(educationalExperiences.map(el =>{
            if(el.id === id){
                return {...el, school: e.target.value}
            }
            else{
                return {...el}
            }
        }))

       
    }
    function handleDegreeChange(id, e){
        setEducation(educationalExperiences.map(el =>{
            if(el.id === id){
                return {...el, degree: e.target.value}
            }
            else{
                return {...el}
            }
        }))

       
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
                <Education 
                exp={educationalExperiences.find((el) => el.id === 0)}
                handleSchoolChange={handleSchoolChange}
                handleDegreeChange={handleDegreeChange}
                />
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
                <EducationResume 
                school = {educationalExperiences[0].school}
                degree = {educationalExperiences[0].degree}
                />
                <PracticalResume />
                

            </div>
        </div>
    )
}