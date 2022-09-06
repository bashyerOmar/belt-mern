
import { useState } from "react";
import "../App.css"
import Button from 'react-bootstrap/Button';


const PetForm = ({onSubmit , Pet , btnName}) => {

   
    const [name , setName] = useState(Pet.name);
    const [type , setType] = useState(Pet.type);
    const [desc , setDesc] = useState(Pet.desc);
    
    const [skills , setSkills] = useState({
            skill1 : Pet.skills.skill1,
            skill2:Pet.skills.skill2,
            skill3:Pet.skills.skill3
        });
    

    const handelOnSubmit = e => {
        e.preventDefault();
        onSubmit(name , type , desc , skills);
    }

    return (
        <div >
        <form onSubmit={handelOnSubmit} style={{marginBottom:"44px" , marginTop:"50px"}}>
            <div className="formF">
            <div>
            <p >
                <label>Pet Name</label> &nbsp;&nbsp;&nbsp;
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            </p>  
            <p >
                <label>Pet Type</label> &nbsp;&nbsp;&nbsp;
                <input type="text" value={type} onChange={(e)=> setType(e.target.value)} />
            </p> 
            <p >
                <label>Pet Description</label> &nbsp;&nbsp;&nbsp;
                <input type="text" value={desc} onChange={(e)=> setDesc(e.target.value)} />
            </p> 
            </div>

            <div>
                <p>Skills (optional)</p>
            <p >
                <label>Skill 1</label> &nbsp;&nbsp;&nbsp;
                <input type="text" value={skills.skill1} onChange={(e) => setSkills({...skills , skill1:e.target.value })} />
            </p>  
            <p >
                <label>Skill 2</label> &nbsp;&nbsp;&nbsp;
                <input type="text" value={skills.skill2} onChange={(e)=> setSkills({...skills ,  skill2:e.target.value})} />
            </p> 
            <p >
                <label>Skill 3</label> &nbsp;&nbsp;&nbsp;
                <input type="text" value={skills.skill3} onChange={(e)=> setSkills({...skills , skill3:e.target.value})} />
            </p> 
            </div>
            </div>
           
            <Button  type="submit" variant="primary">{btnName}</Button>  
        </form>
        </div>
    )
}

export default PetForm;