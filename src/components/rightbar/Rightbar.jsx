import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
    const HomeRightbar = () => {
        return (
            <>
                     <div className="birthdayContainer">
                        <img src="assets/gift.jpeg" alt="" className="birthdayImg" />
                        <span className="birthdayText">
                            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                        </span>
                    </div>
                    <img className="rightbarAd" src="assets/ad.jpeg" alt="" />
                    <h4 className="rightbarTitle">Online Friends</h4>
                    <ul className="rightbarFriendList">
                       {Users.map(u=>(
                           <Online key={u.id} user={u} />
                       ))}
                    </ul>
            </>
        );
    };

    const ProfileRightbar = () =>{
        return (
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">from:</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/persons/main-qimg-ecee7a0e8ed00e117f684254e928633a-lq.jpeg" alt="" />
                    <span className="rightbarFollowingName">John Abraham</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/persons/main-qimg-ecee7a0e8ed00e117f684254e928633a-lq.jpeg" alt="" />
                    <span className="rightbarFollowingName">John Abraham</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/persons/main-qimg-ecee7a0e8ed00e117f684254e928633a-lq.jpeg" alt="" />
                    <span className="rightbarFollowingName">John Abraham</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/persons/main-qimg-ecee7a0e8ed00e117f684254e928633a-lq.jpeg" alt="" />
                    <span className="rightbarFollowingName">John Abraham</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/persons/main-qimg-ecee7a0e8ed00e117f684254e928633a-lq.jpeg" alt="" />
                    <span className="rightbarFollowingName">John Abraham</span>
                </div><div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/persons/main-qimg-ecee7a0e8ed00e117f684254e928633a-lq.jpeg" alt="" />
                    <span className="rightbarFollowingName">John Abraham</span>
                </div>

            </div>
            </>
        )
    }
    return (
            <div className="rightbar">
                <div className="rightWrapper">
                    <ProfileRightbar />
                </div>
            </div>
        
    )
}
