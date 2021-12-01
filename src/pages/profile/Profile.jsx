import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

export default function Profile() {
    return (
        <>    
        <Topbar />
        <div className="profile">
             <Sidebar />
             <div className="profileRight">
                 <div className="profileRightTop">
                     <div className="profileCover">
                         <img 
                         src="assets/posts/images.jpeg" 
                         alt="" 
                         className="profileCoverImg" 
                         />
                         <img 
                         src="assets/persons/217405950_1375603462835889_1412933283236624093_n.jpg" 
                         alt="" 
                         className="profileUserImg" 
                         />
                     </div>
                     <div className="profileInfo">
                         <h4 className="profileInfoName">Anees Ani</h4>
                         <span className="profileInfoDesc">hello my friends !</span>
                     </div>
                 </div>
                 <div className="profileRightBottom">
                   <Feed />
                   <Rightbar profile/>
                 </div>
             </div>
         </div> 
     </>
    );
}
