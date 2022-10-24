import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css'




function App() {


    const [details, setDetails] = useState({})

    const fetchDetails = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");

    const nameObject = data.results[0].name;

    
    const fullName = `${nameObject.title} ${nameObject.first} ${nameObject.last}`;
    
    console.log(fullName);

    const details = data.results[0] // details -> local scope
    setDetails(details) // updating details(useState) with values of details(lcoals scope which we got from API response)

  };

//   fetchDetails();

  useEffect(() => {
    fetchDetails()
  }, [])

  // above array in useEffect is called 'DEPENDENCY ARRAY'. If we have any element in the array and if any changes is made in that element, the call back function will run
  // array will always look for a change in the variables


  return (
    <>
      <h2>Welcome to API handling!!</h2>

        <Card myDetails={details}/>

      <button className='btn' onClick={fetchDetails}>Get Random User</button>

    </>
  );
}

export default App;