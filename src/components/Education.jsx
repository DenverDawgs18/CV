export default function Education({exp, handleSchoolChange}){
    return (
        <div className="education">
            <h1 className="educationH header">Education</h1>
            <input type="text" placeholder="School name:" 
            onChange={(e) => handleSchoolChange(exp.id, e)} value={exp.school}
            />
            <input type="text" placeholder="Degree (or diploma) obtained: "/>
            <input type="date" placeholder="Date started: "/>
            <input type="date" placeholder="Date ended: "/>
        </div>
            
    )   
}