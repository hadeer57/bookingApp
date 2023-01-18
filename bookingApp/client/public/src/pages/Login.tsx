import React from "react";

function Login() {
    return (
      <div className="author">
        <h1> Login</h1>
   <form>
    <input required type="text" placeholder="username" />
    <input required type="password"  placeholder="password"/>
    <button> SignIN </button>
    <p>Error!!</p>
    <span> Don't have an account yet?</span>
    <span><a href="/register">Join Us</a></span>
   </form>
</div>
    );
  }
  
  export default Login;