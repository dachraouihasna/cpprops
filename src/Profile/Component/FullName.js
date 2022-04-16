function Name({ fullName }) {
    return (
        <div>
        <div style={{ fontFamily:"serif", fontSize:"35px", marginTop:"85px", marginLeft:"35px"}}>
            {fullName.nom}  {fullName.prenom}
        </div>
        <div style={{marginTop:"10px", marginLeft:"35px"}}>946 Amis</div>
        </div>
    )
}

export default Name;