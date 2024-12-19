import { useEffect, useState } from 'react';
import './user.css';
import { getUserProfile } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../../reducers/user';

const User = () => {

    const firstName = userSelector(state => state.user.firstName)
    const lastName = userSelector(state => state.user.lastName)

    const [localFirstName, setLocalFirstName] = useState(firstName)
    const [localLastName, setLocalLastName] = useState(lastName)
    const [edition, setEdition] = useState(false)
    const dispatch = useDispatch()

   
    useEffect(() => {
        getUserProfile(localStorage.getItem('token'))
        .then((res) => res.json())
        .then((res) => {
            //setFirstName(res.body.firstName)
            //setLastName(res.body.lastName)
        })
    }, [])


    const setUserProfile = async (e) => {
        e.preventDefault()
        try {
            dispatch(setProfile({firstName: localFirstName, lastName: localLastName}))
            //await setUserProfile(firstName, lastName, localStorage.getItem('token'))
            setEdition(!edition)
        }catch(e){
            console.log(e)
        }
    }
    return(
        <>
       <div className="header">
                    <h1>Welcome back<br />{firstName} {lastName}!</h1>
                    <button className="edit-button" onClick={() => setEdition(!edition)}>Edit Name</button>
                    {(edition) ?
                    <form onSubmit={setUserProfile}>
                        <input value={localFirstName} placeholder='firstName' onChange={(e) => setLocalFirstName(e.target.value)}/>
                        <input value={localLastName} placeholder='lastName' onChange={(e) => setLocalLastName(e.target.value)} />
                        <button className="edit-button">OK</button>
                    </form> : ''}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
                    
        </>
    )
}

export default User;