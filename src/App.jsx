import { useState } from "react";


const App = () => {
  const[user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    setUser(user)
  }
  
  
  return(
    <form className="form" onSubmit={handleSubmit}>
      <h4>Multiple Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
        type="text" 
        id="name" 
        name="name" 
        value={user.name} 
        onChange={handleChange} 
        className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">Email</label>
        <input 
        type="email" 
        name="email"
        id="email" 
        value={user.email} 
        onChange={handleChange} 
        className="form-input"/>
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">Password</label>
        <input 
        type="password" 
        name="password" 
        id="password" 
        value={user.password} 
        onChange={handleChange} 
        className="form-input"/>
      </div>
      <button className="btn ">submit</button>
    </form>
  )
}



export default App;
