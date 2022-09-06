
import { useHistory , useParams , Link} from "react-router-dom";
import  React,{ useState , useEffect } from "react";
import Button from 'react-bootstrap/Button';
import "../App.css"
import axios from 'axios';

const PetDetails = props => {

    const history= useHistory();
    const { id } = useParams();
    const [loaded , setLoaded] = useState(false);
    const [pet , setPet]=useState([]);
   

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
    });

    const handeldelete = (id) =>{
        axios.delete(`http://localhost:8000/api/pets/${id}/delete`)
        .then(res => history.push("/"))
        .catch(err=>console.log(err))
    
        }


        const like= (likes) => {
            axios.put(`http://localhost:8000/api/pets/${id}/edit`, { likes })
                 .then(res => console.log(res))
                 .catch(err => console.log(err) )
                }


    return (
        <>
        <div className="top">
            <h1>Pet Shelter</h1>
            <Link to="/">back to home</Link>
        </div>
        <div className="top">
        <h3>Details about : {pet.name} </h3>
        <Button  variant="danger" onClick={e => handeldelete(id)}> Adopt {pet.name}</Button> 
        </div>
        
        <div className="container">
       {loaded && 
        <div>
        <h4>Pet Type : {pet.type}</h4>
        <h4>Description : {pet.desc}</h4>
        <h4>Skills : {Object.values(pet.skills).map((skill, index) => { return (<span key={index}>{skill} &nbsp;</span>)})}</h4>
        
        </div> 
        }
        <div className="like">{loaded ? <Button  variant="success" onClick={e => like(pet.likes +1)}> Like {pet.name}</Button> : <Button  variant="success" disabled >Like {pet.name}</Button>  }  {pet.likes} like (s)</div>
        </div>
        </>
    )
}

export default PetDetails;