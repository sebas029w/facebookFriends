import { useEffect, useState } from 'react';
import './App.css';
import { FacebookFollowCard } from './FacebookCard';

const friendsData = [
  {  commonFriends: "17 amigos en común" },
  {  commonFriends: "3 amigos en común" },
  {  commonFriends: "13 amigos en común" },
  {  commonFriends: "28 amigos en común" }
];
export function App() {
  const [users, setUsers]=useState([]);
  const [isLoading, setLoading]=useState(true);
  const [error, setError]=useState(null); 
  useEffect(()=>{
    const getUsers = async () => {
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/users`);
        if (!res.ok){
          throw new Error(`Error de network`);
        }
        const data = await res.json();
        setUsers(data.slice(0,friendsData.length));
      } catch (error) {
        setError(error);
        console.error(`Error en users fetch`);
      }finally{
        setLoading(false);
      }
    };
    getUsers();
  },[]);

  if (isLoading) {
    return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/800px-2023_Facebook_icon.svg.png" 
    alt="logoLoading" 
    className='loading-image'
    />;
  }
  if (error){
    return <p>Network Error</p>
  }
  return(
    <div className='app-container'>
      {users.map((user, index)=>(
        <FacebookFollowCard
        key={user.id}
        userName={user.name}
        commonFriends={friendsData[index].commonFriends}
        />
      ))}
    </div>
  )
}

export default App;