import userImg from '../assets/image-jeremy.png';

export default function UserInfo(){
    return(
        <div className="user--info flex align-center">
            <div className="profile-pic">
              <img src={userImg} alt="profile" className='userImg' />
            </div>
            <div className="report--owner">
              <p>Report for</p>
              <h1 className="name">Jeremy Robson</h1>
            </div>
        </div>
    )
}