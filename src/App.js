//import './App.css';
import Profile from  './components/Profile.js'
import Gallery from './components/Gallery.js'
import Bio from './components/Bio.js'
import Avatar from './components/Avatar.js'

function App() {
  return (
    <div>
      <Bio languages={{name:'React Js'}} tools="Visual Studio"/>
     <Gallery/>
    
      <Avatar person = {{name:'First Air Bender',age:21}}
            size={500}/>
      
      
    </div>
  );
}

export default App;
