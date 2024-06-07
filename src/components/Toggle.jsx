import { useState } from 'react';
import ToggleItem from './ToggleItem';

const Toggle = ({data}) => {
 
 
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
 