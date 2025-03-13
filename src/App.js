//import './App.css';
// import Profile from  './components/Profile.js'
import Gallery from './components/Gallery.js'
import Bio from './components/Bio.js'
import Avatar from './components/Avatar.js'
import PackingList from './components/PackingList.js';

function App() {
  const props = {
    languages: 'JavaScript, React',
    tools: 'VS Code, Git'
  };

  return (
    <div>
      <Bio {...props}/>
     <Gallery/>
    
      <Avatar person = {{name:'First Air Bender',age:21}}
            size={500}/>
      
      <PackingList/>
      
    </div>
  );
}

export default App;
