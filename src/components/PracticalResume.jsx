export default function PracticalResume({exp}){
    return(
        <div className="practicalResume">
                    
                    <p>Company name: {exp.company} </p>
                    <p>Position title: {exp.position}</p>
                    <p>Main responsibilities: {exp.mainResponsibilities} </p>
                    <p>From {exp.startingDate ? exp.startingDate : 'A'} to {exp.endingDate ? exp.endingDate : 'B'}</p>
        </div>
    )
}