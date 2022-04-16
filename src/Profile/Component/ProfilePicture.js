import '../../App.css';

function Photo({ profilePicture }) {
    return (
        <div className="Photo">
            <img src={profilePicture} />
        </div>
    );
}

export default Photo; 