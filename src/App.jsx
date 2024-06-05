import Toggle from './components/Toggle'; //// App
 
const App = () => {
  const items = [
    {id:1, heading: 'Heading 1', des: 'This is the description for heading 1.' },
    { id:2, heading: 'Heading 2', des: 'This is the description for heading 2.' },
  ];

  return (
    <div>
      <h1 style={{ textAlign:"center"}}>Toggle Task</h1>
    <Toggle  data={items} />
    </div>
  );
};

export default App;
 
