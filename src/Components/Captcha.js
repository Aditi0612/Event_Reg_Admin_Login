import React, { useState, useEffect } from "react";
import "./LogReg.css";
import "./tagsinput.css";

function Captcha() {
  const [verified, setVerified] = useState(false);
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
        setVerified(true);
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
          inputData.value = "******";
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
                        <label className="form-label" for="emailAddress">
                          Captcha
                          <font color="red">*</font>
                        </label>

                        <div className="form-outline">
                          <input
                            id="captcha"
                            className="form-control"
                            readOnly
                            value={captcha}
                          />
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
                            placeholder="Enter Captcha"
                            name="username"
                            onChange={handleChange}
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-5 mb-4 pb-2" align="center">
                        <div className="form-outline">
                          <button
                            type="button"
                            id="succesBTN"
                            onClick={onSubmit}
                            class="btn btn-primary my-10"
                          >
                            Verify Captcha
                          </button>
                        </div>
                      </div>

                      <div className="col-md-7 mb-4 pb-2" align="center">
                        <div className="form-outline">
                          <a
                            class="btn btn-primary"
                            href="#"
                            role="button"
                            className="btn btn-primary my-10"
                            disabled={verified}
                          >
                            Submit
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="text-center fs-6 mt-3">
                      {" "}
                      <a href="#">Forgot Password?</a>
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
}
export default Captcha;
