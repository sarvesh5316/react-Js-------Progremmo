import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate= useNavigate();
  
  const CreateAccount = async()=>{
    try{
        if(password !== confirmpassword){
            setError('Password and ConfirmPassword do not match');
            return;
        }
        await createUserWithEmailAndPassword(getAuth(),email,password);
        navigate('/articles');
    }
    catch(e){
        setError(e.message);
    }
  }
  return (
    <>
      <h1>Create Account </h1>
      {error && <p className="error">{error}</p>}
      <input
        placeholder="Your Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder=" Re-Enter Your Password"
        value={confirmpassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={CreateAccount}>Create Account </button> &emsp;
      <Link to="/login">
        Already have a account? Log in here
      </Link>
    </>
  );
};

export default CreateAccountPage;
