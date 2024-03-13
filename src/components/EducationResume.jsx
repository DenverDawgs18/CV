export default function EducationResume({school, degree}){
    return(
        <div className="educationResume">
            <h3>Education</h3>
            <p>School name: {school}</p>
            <p>Degree obtained: {degree} </p>
            <p>From XXX to XXX</p>       
        </div>
    )
}