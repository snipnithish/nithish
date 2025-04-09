import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './Profilecard'
import GridView from './GridView'
import Todo from './Todo'
import store from './store'
import { Provider } from 'react-redux'
import Navbar from './NavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
const profilelist={
  name:"nithish",
  Department:"AIDS",
  Year:2,
  mobile:9363499217,
  adress:"485,chinnakondam,tiruvannamalai"
};
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
      
        <Route path="/profilecard" element={<ProfileCard profilelist={profilelist}/>} />
        <Route path="/gridview" element={<GridView />} />
        {/* <Route path="/todo" element={<Todo />} /> */}
        <Route
        path="/reduxTodo"
        element={
          <Provider store={store}>
            <Todo/>
          </Provider>
        }
        />
       </Routes>

      </BrowserRouter>

      
      {/* <ProfileCard profilelist={profilelist}/>
      <GridView/>
      <Todo/>
       */}
      
    
    </div>
  )
}

export default App
