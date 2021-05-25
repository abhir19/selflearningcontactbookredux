import logo from './logo.svg';
import './App.css';
import Navbar from './components/elements/Navbar';
import Contacts from './components/elements/contacts/Contacts';
import{Route,Switch} from 'react-router-dom';
import AddContact from './components/elements/contacts/AddContact';
import EditContact from './components/elements/contacts/EditContact';
function App() {
  return (
    <div className="App">
     
        
       <Navbar />
      
       
      <div className="container">
        <div className="py-3 mt-3">
        <Switch>
          <Route exact path='/' component={Contacts} />
          <Route exact path='/contacts/add' component={AddContact} />
          <Route exact path='/contacts/edit/:id' component={EditContact} />
        </Switch>
        
        </div>
      </div>
    </div>
  );
}

export default App;
