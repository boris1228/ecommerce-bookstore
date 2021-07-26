import React from 'react';
import './contactus.css'
import Header from "../components/Header";
import Footer from "../components/Footer";


const ContactUs = () => {
    
    return (
        <>            
            <br/><br/><br/>
            <br/><br/><br/>
            <br/><br/><br/>
        <div classname="container">
    
         
    
            <form action="action_page.php">
                <label htmlfor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                <label htmlfor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                <label htmlfor="country">Country</label>
                <select id="country" name="country">
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>
                <label htmlfor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}}
                          defaultValue={""}/>
                <input type="submit" defaultValue="Submit"/>
            </form>
        </div>
        </>
    );
    
};

export default ContactUs;



