
import './App.css';
import Login from './Login';
import {Switch,Route ,Redirect} from 'react-router-dom';
import Scape_room1 from './Scape_room1';
import Scape_room2 from './Scape_room2';
import Result from './Result';
function App() {
  return (
   <>
     
  
  <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path= "/login" component={Login}/>
            <Route exact path= "/scaperoom1" component={Scape_room1}/>
            <Route exact path= "/scaperoom2" component={Scape_room2}/>
            <Route exact path= "/result" component={Result}/>
            <Redirect to=""/>
  </Switch>
  </>
  );
}

export default App;
