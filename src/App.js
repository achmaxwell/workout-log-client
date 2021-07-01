import React, { useState, useEffect } from 'react';
import Sidebar from './home/Navbar';
import Auth from './auth/Auth';
import WorkoutIndex from './workouts/WorkoutIndex';

function App() {
const [sessionToken, setSessionToken] = useState(''); //1

useEffect(() => { //2
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'))
  }
  document.title = "Workout Log Client"
}, [])

const updateToken = (newToken) => { //3
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}

const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
  : <Auth updateToken={updateToken}/>)
}

  return (
    <div>
      <Sidebar clickLogout={clearToken} />
      {protectedViews()}
    </div>
  );
}

export default App;
