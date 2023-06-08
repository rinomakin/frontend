import React from "react";
import "./Register.css";
import { bgLogin } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Register = () => {
  return (
    <div className="container-register">
      <div className="main">
        <div className="box">
          <img src={bgLogin} alt="login" />
        </div>
        <div className="box">
          <h3>Register</h3>
          <Input label="Full Name" placeholder="Full Name" />
          <Gap height={13} />
          <Input label="Email" placeholder="Email" type="email" />
          <Gap height={13} />
          <Input label="Password" placeholder="Password" type="password" />
          <Gap height={30} />
          <Button title="Masuk" />
          <Gap height={15} />
          <div className="link-login">
            <p>
              Sudah Memiliki AKun ?<Link title="Login" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
