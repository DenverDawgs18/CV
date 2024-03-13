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
    const [educationalExperiences, setEducation] = useState([{id: idCount, school: "", degree: "",
               startingDate: "", endingDate: ""}]);
    
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
    function handleStartingDateChangeEdu(id, e){
        setEducation(educationalExperiences.map(el =>{
            if(el.id === id){
                return {...el, startingDate: e.target.value}
            }
            else{
                return {...el}
            }
        }))
    }
    function handleEndingDateChangeEdu(id, e){
        setEducation(educationalExperiences.map(el =>{
            if(el.id === id){
                return {...el, endingDate: e.target.value}
            }
            else{
                return {...el}
            }
        }))
    }
    let pracIdCount = 0;
    const [practicalExperiences, setPracticalExperiences] = useState([{id: pracIdCount, company: '', 
position: '', mainResponsibilities: '', startingDate: '', endingDate: '',}])
        function handleCompany(id, e){
            setPracticalExperiences(practicalExperiences.map(el =>{
                if(el.id === id){
                    return {...el, company: e.target.value}
                }
                else{
                    return {...el}
                }
            }))   
        }
        function handlePosition(id, e){
            setPracticalExperiences(practicalExperiences.map(el =>{
                if(el.id === id){
                    return {...el, position: e.target.value}
                }
                else{
                    return {...el}
                }
            }))   
        }
        function handleResponsibilities(id, e){
            setPracticalExperiences(practicalExperiences.map(el =>{
                if(el.id === id){
                    return {...el, mainResponsibilities: e.target.value}
                }
                else{
                    return {...el}
                }
            }))   
        }
        function handleStartingDateChangePrac(id, e){
            setPracticalExperiences(practicalExperiences.map(el =>{
                if(el.id === id){
                    return {...el, startingDate: e.target.value}
                }
                else{
                    return {...el}
                }
            }))   
        }
        function handleEndingDateChangePrac(id, e){
            setPracticalExperiences(practicalExperiences.map(el =>{
                if(el.id === id){
                    return {...el, endingDate: e.target.value}
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
                handleStartingDateChangeEdu={handleStartingDateChangeEdu}
                handleEndingDateChangeEdu={handleEndingDateChangeEdu}
                />
                <Practical
                 exp={practicalExperiences.find((el) => el.id === 0)}
                 handleCompany={handleCompany}
                 handlePosition={handlePosition} 
                 handleResponsibilities={handleResponsibilities}
                 handleStartingDateChangePrac={handleStartingDateChangePrac}
                 handleEndingDateChangePrac={handleEndingDateChangePrac}
                 />
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
                startingDate = {educationalExperiences[0].startingDate}
                endingDate = {educationalExperiences[0].endingDate}
                />
                <PracticalResume 
                company = {practicalExperiences[0].company}
                position = {practicalExperiences[0].position}
                responsibilities={practicalExperiences[0].mainResponsibilities}
                startingDate = {practicalExperiences[0].startingDate}
                endingDate = {practicalExperiences[0].endingDate}
                />
                

            </div>
        </div>
    )
}