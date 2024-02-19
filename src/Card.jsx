import profilePic from "./assets/unnamed.jpg"
function Card(props){
    return(
        <div className="card">
            <img src={profilePic} className="image" alt=""/>
            <h2 className="title">Nick Ogolev</h2>
            <p className="text">{props.name}</p>
        </div>
    )
}
export default Card