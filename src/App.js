import logo from './logo.svg';
import './App.css';
import { profilePicture, fullName, fullAdresse, bio } from './Data';
import Name from './Profile/Component/FullName';
import Adresse from './Profile/Component/FullAdresse';
import Photo from './Profile/Component/ProfilePicture';
import Bioagraphie from './Profile/Component/Bio';


function App() {
  return (
    <div className='App'>
      <div className='div1'>
        <Photo profilePicture={profilePicture} />
        <Name fullName={fullName} />
      </div>
      <br />
      <div className='div2'>
        <Bioagraphie bio={bio} />
        <div className='btn'><button>Créer une story</button>  <button>Modifier le Profil</button></div>
      </div>
    </div>
  );
}

export default App;
