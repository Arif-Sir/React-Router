import { Outlet } from "react-router-dom";
import Header from "./Header";


const Home = () => {
    return (
        <div>
            <h1>Welcome to React router</h1>
            
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;