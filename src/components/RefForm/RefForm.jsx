import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const passRef = useRef(null);
    const emailRef = useRef(null);

    useEffect( ()=>{
nameRef.current.focus();
    },[] );

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
         console.log(emailRef.current.value);
        console.log(passRef.current.value);
       
        
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
             <br></br>
             <input ref={emailRef} type="email" name="email" />
             <br></br>
             <input ref={passRef} type="password" name="password" />
             <br></br>
            <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;