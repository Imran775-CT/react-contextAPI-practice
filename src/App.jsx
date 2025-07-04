
import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {

    //   const handleSignUpSubmit= data =>{
    //     console.log('Sign Up Data', data);
        
    // }

    // const handleUpdateProfile = data =>{
    //   console.log('Update Profile Data', data);
      
    // }
  return (
    <>
      <h1>Form Master</h1>
      <GrandPa></GrandPa>






      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
     {/* <ReusableForm 
     formTitle={"Sign Up"} 
     handleSubmit={handleSignUpSubmit}>
      <div>
        <h2>Sign Up</h2>
        <p>Please Sign Up right Now!</p>
      </div>
     </ReusableForm>
     <ReusableForm 
     formTitle={"Profile Update"} 
     handleSubmit={handleUpdateProfile}
     submitBtnText={"Update"}>
      <div>
        <h2>Update Profile!</h2>
        <p>Always Keep Your Profile Updated.</p>
      </div>
     </ReusableForm> */}
    </>
  )
}

export default App
