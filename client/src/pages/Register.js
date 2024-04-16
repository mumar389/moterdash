import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  userType: "",
  secretKey: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, setupUser } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember, userType, secretKey } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    if (values.userType === "Admin" && values.secretKey !== "deva") {
      alert("Invalid Admin");
      return;
    }
    const currentUser = { name, email, password, userType };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! Redirecting...",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Created! Redirecting...",
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit} style={{ width: '400px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <Logo />
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        <div className="user-type" style={{ display: 'flex', marginBottom: '20px' }}>
          <input
            type="radio"
            name="userType"
            value="User"
            checked={values.userType === "User"}
            onChange={handleChange}
          />
          <label htmlFor="user" style={{ padding: '10px 20px', backgroundColor: values.userType === 'User' ? '#FF8500' : '#f0f0f0', borderRadius: '5px', cursor: 'pointer', color: values.userType === 'User' ? '#fff' : '#000' }}>User</label>
          <input
            type="radio"
            name="userType"
            value="Admin"
            checked={values.userType === "Admin"}
            onChange={handleChange}
          />
          <label htmlFor="admin" style={{ padding: '10px 20px', backgroundColor: values.userType === 'Admin' ? '#FF8500' : '#f0f0f0', borderRadius: '5px', cursor: 'pointer', color: values.userType === 'Admin' ? '#fff' : '#000' }}>Admin</label>
        </div>
        {values.userType === "Admin" && (
          <FormRow
            type="password"
            name="secretKey"
            value={values.secretKey}
            handleChange={handleChange}
            label="Admin Key"
          />
        )}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            label="Name"
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          label="Email"
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          label="Password"
        />
        <button type="submit" className="btn btn-block" disabled={isLoading} style={{ display: 'block', width: '100%', padding: '10px 20px', backgroundColor: '#FF8500', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', transition: 'background-color 0.3s ease' }}>
          {values.isMember ? "Login" : "Register"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn" style={{ backgroundColor: 'transparent', border: 'none', color: '#FF8500', cursor: 'pointer', fontWeight: 'bold' }}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
