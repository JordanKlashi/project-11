import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile, editUsername } from '../../redux/slice/userSlice.js';

function Profil() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const currentUser = useSelector(state => state.user.currentUser);
    const [userProfil, setUserProfil] = useState(null);
    const [newUsername, setNewUsername] = useState("")
    const [isVisible, setIsVisible] = useState(false)

    const handleEdit = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible)

    };

    const handleUserNameChange = (event) => {
        setNewUsername(event.target.value);

    };
    
    const handleSave = (newUsername) => {
        dispatch(editUsername({ username: newUsername, token: token}))
    };

    const handleCancel = (event) => {
        event.preventDefault();

    };

    const fetchDataFromAPI = useCallback(() => {
        if (!token) {
            console.log('Token non disponible');
            return;
        }
        dispatch(fetchUserProfile(token));
    }, [token, dispatch]);

    useEffect(() => {
        fetchDataFromAPI();
    }, [fetchDataFromAPI]);

    useEffect(() => {
        if (currentUser) {
            setUserProfil(currentUser);
        }
    }, [currentUser]);
    console.log(currentUser)
    return (
        <>
            {userProfil && (
                <div className='Profil'>
                    <span className="Profil-welcome">Welcome back</span>
                    <p className='Profil-welcome'>{userProfil.firstName} {userProfil.lastName}!</p>
                    <button className="Profil-edit" onClick={handleEdit}>Edit name</button>
                    <form className="Profil-edit_" style={{ display: isVisible ? "flex" : "none" }}>
                        <section className='Profil-edit_firstname'>
                            <label htmlFor='firstName'>firstname</label>
                            <input type='text' value={userProfil.firstName} />
                        </section>
                        <section className='Profil-edit_lastname'>
                            <label htmlFor='lastName'>lastname</label>
                            <input type='text' placeholder={userProfil.lastName}/>
                        </section>
                        <section className='Profil-edit_username'>
                            <label htmlFor='lastName'>username</label>
                            <input type='text' value={newUsername} onChange={handleUserNameChange} placeholder={userProfil.userName} />
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