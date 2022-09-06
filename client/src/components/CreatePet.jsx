

import  React,{ useState } from "react";
import axios from "axios"
import { useHistory , Link } from "react-router-dom";
import PetForm from "./PetForm";
import "../App.css"


const CreatePet = (props) => {

    const history = useHistory();
    const [errors , setErrors] = useState([]);
    const Pet = {name:"" , type:"" , desc:"" , skills:{skill1:"" , skill2:"" , skill3:""}}
    

    const createPet= (name , type , desc , skills) => {
        axios.post('http://localhost:8000/api/pets/new', { name , type , desc , skills })
             .then(res => history.push("/"))
             .catch(err =>
                {
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
            <h3>know a pet needing a home ? </h3>
           
           
            {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
            <PetForm onSubmit={createPet} Pet={Pet} btnName="Add Pet" />
            </div>
        </>
    );
};

export default CreatePet;