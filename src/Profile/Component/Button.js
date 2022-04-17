import { Button } from "react-bootstrap";



function ButtonCard({ handleName, fullName }) {


    return (

        <div>
            <Button variant="primary" onClick={() => handleName(fullName.nom)}>Go somewhere</Button>


        </div>

    )
};



export default ButtonCard;