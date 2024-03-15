export default function EducationResume({exp}){
    return(
        <div className="educationResume">
            <p>School name: {exp.school}</p>
            <p>Degree obtained: {exp.degree} </p>
            <p>From {exp.startingDate ? exp.startingDate : 'X'} to {exp.endingDate ? exp.endingDate : 'Y'}</p>       
        </div>
    )
}