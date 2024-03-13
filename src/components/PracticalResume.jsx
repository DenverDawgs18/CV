export default function PracticalResume({company, position, responsibilities, startingDate, endingDate}){
    return(
        <div className="practicalResume">
                    <h3>Practical Experience</h3>
                    <p>Company name: {company} </p>
                    <p>Position title: {position}</p>
                    <p>Main responsibilities: {responsibilities} </p>
                    <p>From {startingDate ? startingDate : 'A'} to {endingDate ? endingDate : 'B'}</p>
        </div>
    )
}