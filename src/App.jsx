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
  useEffect(()=>{
    const getUsers = async () => {
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/users`);
        const data = await res.json();
        setUsers(data.slice(0,friendsData.length));
      } catch (error) {
        console.error(`Error en users fetch`);
      }
    }
    getUsers();
  },[]);

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