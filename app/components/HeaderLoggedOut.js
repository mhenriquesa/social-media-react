import React, {useState} from "react"
import Axios from 'axios';

function HeaderLoggedOut(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await Axios.post('http://localhost:8080/login', {username, password})
      if (response.data) {
        localStorage.setItem("complexAppToken", response.data.token)
        localStorage.setItem("complexAppUsername", response.data.username)
        localStorage.setItem("complexAppAvatar", response.data.avatar)
        
        return props.setLoggedIn(true)
      } 
      else console.log("User or pass incorrect")
      

    } catch (e) {
      console.log("There was a problem when trying login")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
        <div className="row align-items-center">
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input onChange={e => setUsername(e.target.value)} name="username" className="form-control form-control-sm input-dark" type="text" placeholder="Username" autoComplete="off" />
          </div>
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input onChange={e => setPassword(e.target.value)} name="password" className="form-control form-control-sm input-dark" type="password" placeholder="Password" />
          </div>
          <div className="col-md-auto">
            <button className="btn btn-success btn-sm">Sign In</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default HeaderLoggedOut