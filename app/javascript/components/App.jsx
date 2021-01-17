import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import RecipeCard from './RecipeCard';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


const App = (props) => {

    const { user } = props;

    const [recipes, setRecipes] = useState([]);


    const getRecipes = async () => {
        let str = "";
        if (user){
            str = `${user.id}/recipes`;
        }else {
            str = "1/all";
        }
        const { data, status } = await axios.get("/api/v1/users/"+str);
        if (status === 200) {
            console.log(data);
            setRecipes(data);
        }
    };

    useEffect(() => {
        getRecipes();
    }, []);



   return (
    <div className="App">
            <Navbar user={user} />
            <RecipeCard recipes={recipes} />
    </div>
    );
}

const styles = {
    navbar:{
        marginTop: 0,
        padding: 0,
    },
}
export default App;