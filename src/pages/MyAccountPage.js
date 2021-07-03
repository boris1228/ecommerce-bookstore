import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import TextField from '@material-ui/core/TextField';

const MyAccountPage = () => {
    return (
        <div>
            <Header/>
                <main>
                    <h1>My Account</h1>
                    <div>
                        <ul>
                            <li>My Account (link)</li>
                            <li>Wishlist (link)</li>
                            <li>Order History (link)</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Profile</h3>
                        <ul>
                            <li>First Name: <TextField id="standard-basic" label="First Name" defaultValue="FirstName" /></li>
                            <li>Last Name: <TextField id="standard-basic" label="Last Name" defaultValue="LastName" /></li>
                            <li>Email: <TextField id="standard-read-only-input" label="Email" defaultValue="Email" InputProps={{readOnly: true}} /></li>
                            <li>Birthday: <TextField id="date" label="Birthday" type="date" defaultValue="2021-01-01" className={classes.textField} InputLabelProps={{shrink: true}}/></li>
                            <li>Phone Number: <TextField id="standard-number" label="Phone Number" type="number" defaultValue= "123-456-7890" InputLabelProps={{shrink: true}}/></li>
                            <li>Address: <TextField id="standard-basic" label="Address" defaultValue="Address" /></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Change Password</h3>
                        <ul>
                            <li>Current Password: <TextField error id="filled-error-helper-text" label="Current Password" helperText="Password doesn't match the old password." variant="filled"/></li>
                            <li>New Password: <TextField  id="standard-password-input" label="New Password" type="password"/></li>
                            <li>Comfirm Password: <TextField error id="filled-error-helper-text" label="Comfirm Password" helperText="Password doesn't match the new password." variant="filled"/></li>
                        </ul>
                    </div>
                </main>
            <Footer/>
        </div>
    )
}

export default MyAccountPage
