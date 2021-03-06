import logo from './logo.svg';
import './App.css';
import { profilePicture, fullName, fullAdresse, bio, work } from './Data';
import Name from './Profile/Component/FullName';
import Adresse from './Profile/Component/FullAdresse';
import Photo from './Profile/Component/ProfilePicture';
import Bioagraphie from './Profile/Component/Bio';
import Profession from './Profile/Component/Profession';
import ButtonCard from './Profile/Component/Button';



function App() {
  const handleName=(name)=>
  {
   alert(name)
  }

  return (
    <div className='App'>
      <div className='div1'>
        <Photo profilePicture={profilePicture} />
        <Name fullName={fullName} />
      </div>
      <Bioagraphie bio={bio} />
      <br /> <br />
      <Profession work={work} />
      <ButtonCard handleName={handleName} fullName={fullName}/>
      <div className='btn'><button>Créer une story</button>  <button>Modifier le Profil</button></div>
      <br />
    </div>
  );
}

export default App;
