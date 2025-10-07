import './App.css';
import { FacebookFollowCard } from './FacebookCard';

const users = [
  { userName: "Katerin Martinez", commonFriends: "17 amigos en común" },
  { userName: "Sara Beltran", commonFriends: "3 amigos en común" },
  { userName: "Nanil Nanil", commonFriends: "13 amigos en común" },
  { userName: "Mateo Duarte Gonzalez", commonFriends: "28 amigos en común" }
];

export function App() {
  return (
    <div className="app-container">
      {users.map((user, index) => (
        <FacebookFollowCard
          key={index}
          userName={user.userName}
          commonFriends={user.commonFriends}
        />
      ))}
    </div>
  );
}

export default App;