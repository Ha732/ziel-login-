// Desktop.js
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "./Desktop.css";

function Desktop() {
  const data = { email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [formData, setFormData] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  useEffect(() => {
    console.log("Registered");
  }, [formData]);

  function handleData(e) {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  function validateForm() {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!inputData.email || !/^\S+@\S+\.\S+$/.test(inputData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!inputData.password || inputData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      setFormData(true);
      alert("You have successfully signed in!");
    } else {
      alert("Please fill the form completely");
    }
  }

  return (
    <>
      <main className="Login">
        <div className="leftside">
          <div className="signin-form">
            <div className="top-heading">
              <h1>Welcome Back 👋</h1>
              <p>
                Today is a new day. It&apos;s your day. You shape it. Sign in to
                start managing your work.
              </p>
            </div>
            <form className="form-container" onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* <label>Email</label>
                <input
                  type="text"
                  placeholder="Example@email.com"
                  name="email"
                  value={inputData.email}
                  onChange={handleData}
                /> */}
                <label>Email</label>
                <TextField id="outlined-basic" label="" variant="outlined" />

                <div className="error">{errors.email}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Password</label>
                <TextField id="outlined-basic" label="" variant="outlined" />
                {/* <input
                  type="password"
                  placeholder="at least 8 characters"
                  name="password"
                  value={inputData.password}
                  onChange={handleData}
                /> */}
                <div className="error">{errors.password}</div>
              </div>
              <p className="forgot">Forgot Password?</p>
              {/* <button type="submit">Sign In</button> */}

              <Button variant="contained">Sign In</Button>
            </form>
          </div>
        </div>
        <div className="righside">
          <img src="/images/logo.png" alt=" logo" />
        </div>
      </main>
    </>
  );
}

export default Desktop;
