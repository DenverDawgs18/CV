export default function EducationResume({school, degree, startingDate, endingDate}){
    return(
        <div className="educationResume">
            <h3>Education</h3>
            <p>School name: {school}</p>
            <p>Degree obtained: {degree} </p>
            <p>From {startingDate ? startingDate : 'X'} to {endingDate ? endingDate : 'Y'}</p>       
        </div>
    )
}