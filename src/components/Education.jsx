export default function Education({exp, handleSchoolChange, handleDegreeChange,
handleStartingDateChangeEdu, handleEndingDateChangeEdu}){
    return (
        <div className="education">
            <input type="text" placeholder="School name:" 
            onChange={(e) => handleSchoolChange(exp.id, e)}
            />
            <input type="text" placeholder="Degree (or diploma) obtained: "
            onChange={(e) => handleDegreeChange(exp.id, e)}/>
            <input type="date" placeholder="Date started: "
            onChange={(e) => handleStartingDateChangeEdu(exp.id, e)} />
            <input type="date" placeholder="Date ended: "
            onChange={(e) => handleEndingDateChangeEdu(exp.id, e)}/>
        </div>
          
            
    )   
}