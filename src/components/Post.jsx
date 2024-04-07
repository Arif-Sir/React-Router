/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id,title,body}=post;
    const userStyle ={
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px',
        
    }
    return (
        <div style={userStyle}>
            <h2>Post of id : {id}</h2>
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
        </div>
    );
};

export default Post;