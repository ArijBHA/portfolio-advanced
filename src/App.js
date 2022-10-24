
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './component/profil/Profile';

import Footer from './component/profil/Footer';
import NavBar from './component/profil/NavBar';
import FullName from './component/profil/FullName';

function App() {
 const handleName=(name)=>{alert(name)}
  var prof = {
     fullName :"BEL HAJ AMOR Arij",
     bio : "I am 25 Y.O years old, I like sleeping",
     profession: "student"
  }
  return (
   <div className='App'>
    <NavBar/>
    <FullName />
     <Profile fullName={prof.fullName} bio={prof.bio} profession={prof.profession} handleName={handleName} >
      <div>
        <img src='download.jpg' >
        </img>
         </div>
     </Profile>
     <Footer/>
   </div>
  );
} 


export default App;
