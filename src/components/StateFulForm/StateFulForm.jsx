import React, { useState } from 'react';

const StateFulForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState(null);
     const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        // validation start from here .
        if(!name.trim()) {
            setError("নাম দিতে হবে!");
            
            return;
        }
        if(!email.includes("@")) {
            setError("একটি সঠিক ইমেইল দিতে হবে!")
        }
        if(password.length < 6) {
            setError("পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে!")
        }
        setError("");   
           console.log(name, email,password);
    }

    const handleNameChange = e => setName(e.target.value);
    const handleEmailChange = e => setEmail(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                 onChange={handleNameChange}
                 type="text"
                  name="name"
                  placeholder='Your Name' />
             <br></br>
             <input 
                  onChange={handleEmailChange} 
                  type="email" 
                  name="email" 
                  placeholder='Your Email'/>
             <br></br>
             <input 
             onChange={handlePasswordChange}
             type="password"
              name="password"
              placeholder='Your Password'/>
             <br></br>
            <input type="submit" value="submit" />
            </form>

   {error && <p style={{ color: "red" }}>{error}</p>}
             
        </div>
     
    );
};

export default StateFulForm;