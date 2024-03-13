export default function Practical({exp, handleCompany, handlePosition, handleResponsibilities, handleStartingDateChangePrac,
handleEndingDateChangePrac}){
    return(
        <div className="practical">
            <h1 className="practicalH header">Practical Experience</h1>
            <input type="text" placeholder="Company name" 
            onChange={(e) => handleCompany(exp.id, e)} value={exp.company}/>
            <input type="text" placeholder="Position title: " 
            onChange={(e) => handlePosition(exp.id, e)} value={exp.position}/>
            <input type="text" placeholder="Main responsibilities" 
            onChange={(e) => handleResponsibilities(exp.id, e)} value={exp.mainResponsibilities}/>
            <input type="date" placeholder="Date Started: "
            onChange={(e) => handleStartingDateChangePrac(exp.id, e)} value={exp.startingDate}/>
            <input type="date" placeholder="Date Stopped Working There: " 
            onChange={(e) => handleEndingDateChangePrac(exp.id, e)} value={exp.endingDate}/>
        </div>
            
    )
}