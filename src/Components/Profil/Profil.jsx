import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile, editUsername } from '../../redux/slice/userSlice.js';

function Profil() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const currentUser = useSelector(state => state.user.currentUser);
    const [newUserName, setNewUserName] = useState()
    const [isVisible, setIsVisible] = useState(false)

    const handleEdit = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible)
    };
    const handleCancel = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible)
    };


    const handleUserNameChange = (event) => {
        event.preventDefault()
        setNewUserName(event.target.value)
    };
    const handleSave = () => {
        dispatch(editUsername({ username: newUserName, token: token}))
    };


    useEffect(() => {
        dispatch(fetchUserProfile(token));
    }, [dispatch,token]);

   
    return (
        <>
            {currentUser && (
                <div className='Profil'>
                    <span className="Profil-welcome">Welcome back</span>
                    <p className='Profil-welcome'>{currentUser.firstName} {currentUser.lastName}!</p>
                    <button className="Profil-edit" onClick={handleEdit}>Edit name</button>
                    <form className="Profil-edit_" style={{ display: isVisible ? "flex" : "none" }}>
                        <section className='Profil-edit_firstname'>
                            <label htmlFor='firstName'>firstname</label>
                            <input id='firstName' type='text' readOnly placeholder={currentUser.firstName} />
                        </section>
                        <section className='Profil-edit_lastname'>
                            <label htmlFor='lastName'>lastname</label>
                            <input id='lastName' type='text' readOnly placeholder={currentUser.lastName}/>
                        </section>
                        <section className='Profil-edit_username'>
                            <label htmlFor='user'>username</label>
                            <input id='user' type='text' defaultValue={currentUser.userName} onChange={handleUserNameChange}/>
                        </section>
                        <section className='Profil-edit_Option'>
                            <button className='Profil-edit' onClick={handleSave}>Save</button>
                            <button className='Profil-edit' onClick={handleCancel}>Cancel</button>
                        </section>
                    </form>
                    <p></p>
                </div>
            )}
        </>
    );
}

export default Profil;