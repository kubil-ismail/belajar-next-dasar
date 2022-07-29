import React from "react";
import Image from "next/image";
import registerStyle from "../styles/pages/Register.module.css";
import Link from "next/link";
import Head from "next/head";

function Register() {
  return (
    <div className={registerStyle.root}>
      <Head>
        <title>Register</title>
      </Head>
      <div className="row">
        {/* Side Left */}
        <div className="col-md-6">
          <div className={registerStyle.loginLeft}>
            <div className={registerStyle.bgOverlay}></div>
            <div>
              <Image
                src="/images/cooking-logo.png"
                alt="logo"
                width="100px"
                height="110px"
              />
              <p>Mama Recipe.</p>
            </div>
          </div>
        </div>

        {/* Side Right */}
        <div className="col-md-6 col-xs-12">
          <div className={registerStyle.loginRight}>
            {/* Login Title */}
            <div>
              <h4 className="text-center">Welcome</h4>
              <p className="text-center">
                Create new account to access all features
              </p>
            </div>

            {/* Login Form */}
            <div>
              {/* Fullname Input */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <div className={registerStyle.formControl}>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <div className={registerStyle.formControl}>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="Your Email Address"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Phone Number
                </label>
                <div className={registerStyle.formControl}>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    id="name"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label htmlFor="password1" className="form-label">
                  New Password
                </label>
                <div className={registerStyle.formControl}>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password2"
                    placeholder="Your password"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label htmlFor="password2" className="form-label">
                  Confirm Password
                </label>
                <div className={registerStyle.formControl}>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password2"
                    placeholder="Your Confirm password"
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I agree to terms & conditions
                </label>
              </div>

              {/* Submit Button */}
              <div className="d-grid ">
                <button type="submit" className="btn btn-primary">
                  Register Account
                </button>
              </div>

              <div className={registerStyle.loginRightFooter}>
                <p>
                  Already have account ?{" "}
                  <Link href="/login" passHref>
                    <a>Log in Here</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
