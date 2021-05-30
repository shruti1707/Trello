import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      
      <div className="AppContent">
        <div className="nav">
           <AmplifySignOut/>
        </div>
        <div className="home">
            <Home/>

        </div>
        
        
       




      </div>
      
      
    </div>
  );
}









export default withAuthenticator(App);





