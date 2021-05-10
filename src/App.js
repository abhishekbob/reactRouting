import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Mounting from './component/Mounting';
import Unmounting from './component/Unmounting';
import Updating from './component/Updating';

function App() {
  return (
    <div className="App">
     
     <Router>
      <Header/>
      <Route exact path='/Mounting' component={Mounting}/>
      <Route exact path='/Updating' component={Updating}/>
      <Route exact path='/Unmounting' component={Unmounting}/>
        
     </Router>
     
    </div>
  );
}

export default App;
