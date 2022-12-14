import React, { useState } from "react";

import "./LogReg.css";
import "./tagsinput.css";
import "./validate";

const Admin_login = () => {
  const [user, setUser] = useState({
    username: "",
  });
  const characters = "abc123";

  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const captcha = generateString(6); // Function called here and save in captcha variable
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    user[name] = value;
    setUser(user);
  };
  const onSubmit = (e) => {
    var element = document.getElementById("succesBTN");
    var inputData = document.getElementById("inputType");
    element.style.cursor = "wait";
    element.innerHTML = "Checking...";
    inputData.disabled = true;
    element.disabled = true;
    var myFunctions = function () {
      if (captcha == user.username) {
        element.style.backgroundColor = "green";
        element.innerHTML = "Captcha Verified";
        element.disabled = true;
        element.style.cursor = "not-allowed";
        inputData.style.display = "none";
      } else {
        element.style.backgroundColor = "red";
        element.style.cursor = "not-allowed";
        element.innerHTML = "Not Matched";
        element.disabled = true;
        //  element.disabled = true;
        var myFunction = function () {
          element.style.backgroundColor = "#007bff";
          element.style.cursor = "pointer";
          element.innerHTML = "Verify Captcha";
          element.disabled = false;
          inputData.disabled = false;
          inputData.value = "sssss";
        };
        setTimeout(myFunction, 5000);
      }
    };
    setTimeout(myFunctions, 5000);
  };

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-6 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5" align="center">
                    Admin Login
                  </h3>
                  <form>
                    <div className="row">
                      <label className="form-label" for="emailAddress">
                        Email Id
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="userid"
                            className="form-control"
                            name="userid"
                            // value={userLogin.userid}
                            // onChange={handleInput}
                          />
                          {/* {errors.userid && (
                            <p className="error">{errors.userid}</p>
                          )} */}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <label className="form-label" for="password">
                        Password
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            // value={userLogin.password}
                            // onChange={handleInput}
                          />
                          {/* {errors.password && (
                              <p className="error">{errors.password}</p>
                            )} */}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="password">
                          Captcha
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="capt"
                            className="form-control"
                            // value={userRegistration.pass}
                            // onChange={handleInput}
                            name="capt"
                            readOnly
                          />
                          {/* {errors.pass && (
                            <p className="error">{errors.pass}</p>
                          )} */}
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="cpassword">
                          Enter Captcha
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="inputType"
                            className="form-control"
                            onChange={handleChange}
                            name="captv"
                          />
                          {/* {errors.cpass && (
                            <p className="error">{errors.cpass}</p>
                          )} */}
                        </div>
                      </div>
                    </div>
                    {/* <h6>
                      Captcha not visible{" "}
                      <img src={"reload.png"} width="40px" onclick={cap} />
                    </h6> */}
                    {/* <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={onChange}
                    /> */}
                    <div className="text-center fs-6 mt-3">
                      {" "}
                      <a href="#">Forgot Password?</a>
                    </div>

                    <div className="mt-4 pt-2" align="center">
                      <input
                        className="btn btn-primary"
                        // disabled={!verified}

                        type="submit"
                        id="succesBTN"
                        name="login"
                        onClick={onSubmit}
                      />
                    </div>

                    <div className="mt-4 pt-2 ml-2" align="center">
                      <a
                        class="btn btn-primary"
                        href="#"
                        role="button"
                        // onClick={handleSubmit}
                      >
                        Submit
                      </a>{" "}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Admin_login;
