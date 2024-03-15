import General from "./General";
import Education from "./Education";
import Practical from "./Practical";
import EducationResume from "./EducationResume"
import PracticalResume from "./PracticalResume";
import { useState } from "react";
import { useEffect } from "react";
import { ssrExportAllKey } from "vite/runtime";


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
    const [idCount, setIdCount] = useState(0)
    const [educationalExperiences, setEducation] = useState([{id: idCount, school: "", degree: "",
               startingDate: "", endingDate: ""}]);
    
    function handleSchoolChange(id, e){
        
        const updatedEducationalExperiences = educationalExperiences.map((el) => {
            if (el.id === id) {
               
              return { ...el, school: e.target.value };
            } else {
            return el;
            }
          });
        
          setEducation(updatedEducationalExperiences);
       
          };
        
  
    
    function handleDegreeChange(id, e){
        const updatedEducationalExperiences = educationalExperiences.map((el) => {
            if (el.id === id) {
              return { ...el, degree: e.target.value };
            } else {
              return el;
            }
          });
        
          setEducation(updatedEducationalExperiences);
         
    }
    function handleStartingDateChangeEdu(id, e){
        const updatedEducationalExperiences = educationalExperiences.map((el) => {
            if (el.id === id) {
              return { ...el, startingDate: e.target.value };
            } else {
              return el;
            }
          });
        
          setEducation(updatedEducationalExperiences);

    }
    function handleEndingDateChangeEdu(id, e){
        const updatedEducationalExperiences = educationalExperiences.map((el) => {
            if (el.id === id) {
              return { ...el, endingDate: e.target.value };
            } else {
              return el;
            }
          });
        
          setEducation(updatedEducationalExperiences);
    
        
    }
    const [pracIdCount, setPracIdCount] = useState(0)
    const [practicalExperiences, setPracticalExperiences] = useState([{id: pracIdCount, company: '', 
position: '', mainResponsibilities: '', startingDate: '', endingDate: '',}])
        function handleCompany(id, e){
            const updatedPracExps = practicalExperiences.map((el) => {
                if (el.id === id) {
                  return { ...el, company: e.target.value };
                } else {
                  return el;
                }
              });
            
              setPracticalExperiences(updatedPracExps);
        }
        function handlePosition(id, e){
            const updatedPracExps = practicalExperiences.map((el) => {
                if (el.id === id) {
                  return { ...el, position: e.target.value };
                } else {
                  return el;
                }
              });
            
              setPracticalExperiences(updatedPracExps); 
        }
        function handleResponsibilities(id, e){
            const updatedPracExps = practicalExperiences.map((el) => {
                if (el.id === id) {
                  return { ...el, mainResponsibilities: e.target.value };
                } else {
                  return el;
                }
              });
            
              setPracticalExperiences(updatedPracExps);
        }
        function handleStartingDateChangePrac(id, e){
            const updatedPracExps = practicalExperiences.map((el) => {
                if (el.id === id) {
                  return { ...el, startingDate: e.target.value };
                } else {
                  return el;
                }
              });
            
              setPracticalExperiences(updatedPracExps);
        }
        function handleEndingDateChangePrac(id, e){
            const updatedPracExps = practicalExperiences.map((el) => {
                if (el.id === id) {
                  return { ...el, endingDate: e.target.value };
                } else {
                  return el;
                }
              });
            
              setPracticalExperiences(updatedPracExps);
        }
    function handleAddEducation(){
        const newId= idCount + 1;
    
        setIdCount(newId)

        const newEducationalExp = {id: newId, school: '', degree: '', startingDate: '', endingDate: ''}
        setEducation(prevEducationalExperiences => [
            ...prevEducationalExperiences,
            newEducationalExp
        ])
    }
        
  const newEduInputs = educationalExperiences.map(exp => (
    <Education
        key={exp.id}
        exp={exp}
        handleSchoolChange={handleSchoolChange}
        handleDegreeChange={handleDegreeChange}
        handleStartingDateChangeEdu={handleStartingDateChangeEdu}
        handleEndingDateChangeEdu={handleEndingDateChangeEdu}
    />
));
const newEduOutputs = educationalExperiences.map(exp => (
  <EducationResume 
  key = {exp.id}
  exp = {exp} />
));
function handleAddPrac(){
  const newId = pracIdCount + 1;
  setPracIdCount(newId)

  const newPracExperience = {id: newId, company: '', position: '', mainResponsibilities: '', startingDate: '', endingDate: ''}
  setPracticalExperiences(prevPracticalExperiences => [
    ...prevPracticalExperiences, 
    newPracExperience
  ])

  
}
const newPracInputs = practicalExperiences.map(exp => (
  <Practical 
        key={exp.id}
        exp={exp}
        handleCompany={handleCompany}
        handlePosition={handlePosition}
        handleResponsibilities={handleResponsibilities}
        handleStartingDateChangePrac={handleStartingDateChangePrac}
        handleEndingDateChangePrac={handleEndingDateChangePrac}
  />
))
const newPracOutputs = practicalExperiences.map(exp => (
    <PracticalResume
    key={exp.id}
    exp={exp}
    />

))
        
    
    function handleForm(e){
        e.preventDefault()
    }
    
    return(
        <div className="wrapper">
        
        
        
            <form className="main" onSubmit={(e) => handleForm(e)}>
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
                <h1>Education</h1>
                {newEduInputs}
                <button onClick={() => handleAddEducation()}>Add Education: </button>
                <h3>Practical Experiences</h3>
                {newPracInputs}
                <button onClick={() => handleAddPrac()}>Add Practical Experience:</button>
            </form>
            <div className="resume">
                <div className="generalResume">
                    <h3>General</h3>
                    <p>First name: {firstName} </p>
                    <p>Last name: {lastName} </p>
                    <p>Email: {email} </p>
                    <p>Phone number: {phoneNumber} </p>
                </div>
                <h3>Education</h3>
                {newEduOutputs}
                <h3>Practical Experience:</h3>
                {newPracOutputs}
                

            </div>
        </div>
    )
}