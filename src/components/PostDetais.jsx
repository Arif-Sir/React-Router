import { useLoaderData } from "react-router-dom";


const PostDetais = () => {
    const post= useLoaderData();
    const {id,title,body}=post;
    return (
        <div>
                <h3>This is aboy post :{id}</h3>
            <p>Title: {title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetais;