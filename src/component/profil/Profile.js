import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'; 

function Profile({fullName,bio,profession,handleName,children}) {
    return (
       <div className='prof'>
        <div className='name' id='home'>
        <h2 style={{color : "white"}}>Full Name</h2>
        {children}
        <h3>{fullName}</h3> 
        </div>
        <div className='bio' id='bio'>
        <h2 style={{color : "white"}}>Bio</h2>
        <h6>{bio}</h6>   
        </div>
        <div className='profession' id='profession'>
        <h2 style={{color : "white"}}>Profession</h2>
        <h3>{profession}</h3>   
        <Button variant="info" onClick={()=>handleName(fullName)}>Full Name</Button> 
        
        </div>
       </div>
    )
}
export default Profile;
Profile.defaultProps = {
    fullName:"",
    bio:"",
    profession:""
}


Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName:PropTypes.func
        
    }