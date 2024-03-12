export default function General({FNvalue, handleFChange,
LNvalue, handleLChange, EValue, handleEChange, PNValue, handlePNChange}){
   
   return (
    <div className="general">
        <h1 className="generalH header"> General </h1>
        <input type="text" placeholder="First name:" 
        value={FNvalue} onChange={handleFChange} />
        <input type="text" placeholder="Last name: "
        value={LNvalue} onChange={handleLChange}/>
        <input type="text" placeholder="Email: " 
        value={EValue} onChange={handleEChange}/>
        <input type="tel" placeholder="Phone number: "
        value={PNValue} onChange={handlePNChange}/>
    </div>
   )
  
}