

import  React,{ useState , useEffect } from "react";
import axios from "axios"
import { useHistory , useParams , Link} from "react-router-dom";
import PetForm from "./PetForm";
import "../App.css"

const UpdatePet = (props) => {

    const history = useHistory();
    const [errors , setErrors] = useState([]);
    const { id } = useParams();
    const [loaded , setLoaded] = useState(false);
    const [pet , setPet] = useState({})
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
    });

    const updatePet= (name , type , desc , skills) => {
        axios.put(`http://localhost:8000/api/pets/${id}/edit`, { name , type , desc , skills })
             .then(res => history.push("/"))
             .catch(err => {
                    const errors = err.response.data.errors; 
                    const errorArr = []; 
                    for (let key in errors) { 
                        errorArr.push(errors[key].message)
                    }
                    // Set Errors
                    setErrors(errorArr);
                    
             })
        
    }

    return (
        <>
            <div>
            <div className="top">
            <h1>Pet Shelter</h1>
            <Link to="/">back to home</Link>
            </div>
            <h3>Edit {pet.name} </h3>
            {errors.map((err, index) => <p key={index}  style={{color:"red"}}>{err}</p>)}
            {loaded && <PetForm onSubmit={updatePet} Pet={pet} btnName="Edit Pet" />}
            </div>
        </>
    );
};

export default UpdatePet;