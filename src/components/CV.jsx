import General from "./General";
import Education from "./Education";
import Practical from "./Practical";

export default function CV(){
    return(
        <>
        
            <form className="main">
                <General />
                <Education />
                <Practical />
            </form>
            <div className="resume">
                
            </div>
        </>
    )
}