import { Link , useHistory } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";
import "../App.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import io from 'socket.io-client';

const MainPage = props => {

    const history= useHistory();
    const [pets , setPets] = useState([]);
    const [socket] = useState(() => io(':8000'));


    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=> setPets(res.data))
            .catch(err => console.error(err));

        socket.on("welcome", (data) => { console.log(data);});  //data contain welcome msg from the server
    },[pets]);

    

    return (
        <div>
            <div className="top">
            <h1>Pet Shelter</h1>
            <Link to="/pets/new">Add a pet to shelter</Link>
            </div>
            <h3>These Pets looking for a good home </h3>
           
           <div >
            
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                       
                     {pets.map((pet) => 
                      <tr key={pet._id}>
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td><Button  onClick={e => history.push(`/pets/${pet._id}/details`)} variant="primary">Details</Button> 
                           &nbsp;&nbsp; <Button  onClick={e => history.push(`/pets/${pet._id}/edit`)} variant="primary">Edit</Button> </td></tr>) }
                        {/* <Link to={`/pets/${pet._id}`}>Details</Link> */}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default MainPage;