
const ToggleItem = ({ id,heading, des, isActive, onClick }) => {//// Toggle Items

    return (
      <div style={{cursor:"pointer", textAlign:"center"}} >
        {id}
        <h2 onClick={onClick}>{heading}</h2>
        {isActive && <p style={{backgroundColor:"whitesmoke"}}>{des}</p> }
      </div>
    );
  };
  
  export default ToggleItem;
 
