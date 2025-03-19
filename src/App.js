//import './App.css';
// import Profile from  './components/Profile.js'
import Gallery from './components/Gallery.js'
import Bio from './components/Bio.js'
import Avatar from './components/Avatar.js'
import PackingList from './components/PackingList.js';
import Button from './components/Button.js';
import IncrementState from './components/IncrementState.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import StateVariable from './components/StateVariable.js';

function App() {
  const props = {
    languages: 'JavaScript, React',
    tools: 'VS Code, Git'
  };

  return (
    <div>
      <Button/>
      <Bio {...props}/>
     <Gallery/>
    
      <Avatar person = {{name:'First Air Bender',age:21}}
            size={500}/>
      
      <PackingList/>
      <IncrementState/>

      <StateVariable/>
      
    </div>
  );
}

export default App;
