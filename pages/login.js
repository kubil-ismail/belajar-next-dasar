import React from "react";
import Image from "next/image";
import loginStyle from "../styles/pages/Login.module.css";
import Link from "next/link";
import Head from "next/head";

function Login() {
  return (
    <div className={loginStyle.root}>
      <Head>
        <title>Login</title>
      </Head>
      <div className="row">
        {/* Side Left */}
        <div className="col-md-6">
          <div className={loginStyle.loginLeft}>
            <div className={loginStyle.bgOverlay}></div>
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
          <div className={loginStyle.loginRight}>
            {/* Login Title */}
            <div>
              <h4 className="text-center">Welcome</h4>
              <p className="text-center">Log in into your exiting account</p>
            </div>

            {/* Login Form */}
            <div>
              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <div className={loginStyle.formControl}>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="Your Email Address"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className={loginStyle.formControl}>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password"
                    placeholder="Your password"
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
                  Log in
                </button>
              </div>

              <div className={loginStyle.loginRightFooter}>
                <p>
                  Don’t have an account ?{" "}
                  <Link href="/register" passHref>
                    <a>Sign Up</a>
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

export default Login;
