import { useLoaderData } from "react-router-dom";
import Post from "./Post";


const Posts = () => {
    const posts= useLoaderData();
    return (
        <div>
            <h2>POsts: {posts.length}</h2>
            <div>
                {
                    posts.map(post=> <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;