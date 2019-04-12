import React from 'react'
import PropTypes from 'prop-types';

const Login = (props) =>(
   <nav className="login">      
        <h2>Inventory Login</h2>
        <p>Sign in to manage your inventory</p>
        <button className="github" onClick={()=>props.authenticate('Github')}>LOGIN WITH GITHUB</button>
        <button className="twitter" onClick={() => props.authenticate('Twitter')}>LOGIN WITH TWITTER</button>
        <button className="facebook" onClick={() => props.authenticate('Facebook')}>LOGIN WITH FACEBOOK</button>
   </nav>

)


Login.propTypes = {
    authenticate: PropTypes.func.isRequired,
}
export default Login