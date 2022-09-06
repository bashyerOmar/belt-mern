
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import CreatePet from './components/CreatePet';
import UpdatePet from './components/UpdatePet';
import PetDetails from './components/PetDetails';


function App() {
  return (
    
    <BrowserRouter>
        <div className="App">

          <Route exact path="/">
              <MainPage /> 
            </Route>

            <Route exact path="/pets/:id/details">
               <PetDetails />
            </Route>

            <Route exact path="/pets/new">
               <CreatePet />
            </Route>

            <Route exact path="/pets/:id/edit">
               <UpdatePet />
            </Route>

            
         </div>
    </BrowserRouter>
   
    
  );
}

export default App;
