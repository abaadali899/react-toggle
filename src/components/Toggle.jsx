import { useState } from 'react';
import ToggleItem from './ToggleItem';

const Toggle = ({data}) => {
<<<<<<< HEAD
  console.log("again ganged")
=======
>>>>>>> 49482dfc77c774b15ddc76d8b270445034dbd5ea
  const [active, setActive] = useState(null);

  const handleClick = (id) => {
    setActive(id == active ? null : id);
     
  };

  return (
    <div>
      {data.map((item) => (
        <ToggleItem
          key={item.id}
          heading={item.heading}
          des={item.des}
          isActive={item.id === active}
          onClick={() => handleClick(item.id)}  
          
        />
      ))}
    </div>
  );
};

export default Toggle;
 