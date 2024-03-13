export default function Education({exp, handleSchoolChange, handleDegreeChange,
handleStartingDateChangeEdu, handleEndingDateChangeEdu}){
    return (
        <div className="education">
            <h1 className="educationH header">Education</h1>
            <input type="text" placeholder="School name:" 
            onChange={(e) => handleSchoolChange(exp.id, e)} value={exp.school}
            />
            <input type="text" placeholder="Degree (or diploma) obtained: "
            onChange={(e) => handleDegreeChange(exp.id, e)} value={exp.degree}/>
            <input type="date" placeholder="Date started: "
            onChange={(e) => handleStartingDateChangeEdu(exp.id, e)} value={exp.startingDate}/>
            <input type="date" placeholder="Date ended: "
            onChange={(e) => handleEndingDateChangeEdu(exp.id, e)} value={exp.endingDate}/>
        </div>
            
    )   
}