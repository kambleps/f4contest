import React, { useState } from "react";


const App = () => {
let [name,setName] = useState("")
let [email,setEmail] = useState("")
let [password,setPassword] = useState("")
let [cpassword,setCpassword] = useState("")
let [error,setError] = useState("")
let [serror,setSerror] = useState("")



function Error (event){
   event.preventDefault();
   // When feilds are not feild
  if(name==="" && email === "" && password ==="" && cpassword==="")
  {
    setError("All feilds are madontary")
  } else if(name === "")
{
    setError("Name is required")
}else if(email === "")
{
    setError("Email is required")
}else if(password === "")
{
    setError("Password is required")
}else if(cpassword === "")
{
    setError("Confirm password is required")
}else if(password !== cpassword)
{
    setError("Password not matches")
}else if (name!=="" && email !== "" && password !=="" && cpassword!=="") // when successfully signed up
{
  setSerror("Signup is suceessfully !")
}
   

}


    return (
            
        <div className="form2">
              <h1>Signup</h1>
              <input type="text" placeholder="Enter your name" value={name.value} onChange={(event)=>setName(event.target.value)}></input>
              <input type="email" placeholder="Enter your email" value={email.value} onChange={(event)=>setEmail(event.target.value)}></input>
              <input type="password" placeholder="Enter your password" value={password.value} onChange={(event)=>setPassword(event.target.value)}></input>
              <input type="password" placeholder="Confirm your password" value={cpassword.value} onChange={(event)=>setCpassword(event.target.value)}></input>
              {
                error && <p className="error">{error}</p> 
              }
              {
                serror && <p className="success">{serror}</p>
              }
              <button onClick={Error}>Signup</button>
        </div>
          


    )
}






export default App;