
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Profile/NavBar';
import FullName from './Profile/FullName';
import Bio from './Profile/Bio';
import Profession from './Profile/Profession';


function App() {
    const handleEvent = () => {
      alert(`${this.props.FullName}`);
    };
  return (
    <div className="App">
      <div id="home"><NavBar /></div>
      
      <FullName firstName="Arij" lastName="BEL HAJ AMOR"/>
      <br/> <br/> <br/>
      <div id="bio"><Bio FullName="BEL HAJ AMOR Arij" Age="25" Gender="Female" 
      Interests="Practice sports ,Taking care of animals, Watching Films" /></div>
      <br/> <br/> <br/>
      <div id="profession"><Profession/></div>
      <button onClick={handleEvent}>User</button>
      

    </div>
  );
}

export default App;
