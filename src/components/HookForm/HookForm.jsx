import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('imran')
   const emailState = useInputState('rojoni@sojoni.go')

    const handleSubmit = e => {
        console.log('form data' , emailState.value)
        e.preventDefault();

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange}  type="text" name="name" /> */}
 <br></br>
                 <input {...emailState} type="email" name="email" />
<br></br>
                  <input  type="password" name="password" />
 <br></br>
            <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;