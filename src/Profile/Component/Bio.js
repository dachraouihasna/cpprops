function Bioagraphie({ bio }) {
    return (
        <div style={{ fontFamily: "monospace", fontSize: "15px" }}>
            {bio.bio1} <br/>
            {bio.bio2}
        </div>
    );
}

export default Bioagraphie;