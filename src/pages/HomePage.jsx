import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addNewHobby } from '../actions/hobby';
import { setActiveHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HoppyList/index';

HomePage.propTypes = {

};

const randomNumber = () =>{
    return 1000+ Math.trunc(Math.random()*9000);
} 

function HomePage(props) {
    
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();

    const handleAddHobbyClick = () =>{
        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`,
        }

        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) =>{
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return(
        <div  className="home-page">
            <h1>Redux</h1>
            
            <button onClick={handleAddHobbyClick}>Random</button>

            <HobbyList 
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}/>
        </div>
    );
}

export default HomePage;