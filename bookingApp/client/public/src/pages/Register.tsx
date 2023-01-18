import React from "react";

function Register() {
    return (
      <div className="author">
        <h1> Register</h1>
   <form>
    <input required type="text" placeholder="First Name" />
    <input required type="text" placeholder="Last Name" />
    <input required type="email" placeholder="Email" />
    <input required type="text" placeholder="Username" />
    <input required type="password"  placeholder="Password"/>
    <button> Sign Up  </button>
    <p>Error!!</p>
    <span> You have an account?</span>
    <span><a href="/login">Welcome Back</a></span>
   </form>
</div>
    );
  }
  
  export default Register;