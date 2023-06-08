import React from "react";
import { bgRegis } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  return (
    <div className="container-register">
      <div className="main">
        <div className="box">
          <img src={bgRegis} alt="login" />
        </div>
        <div className="box">
          <h3>Login</h3>
          <Input label="Email" placeholder="Email" type="email" />
          <Gap height={13} />
          <Input label="Password" placeholder="Password" type="password" />
          <Gap height={30} />
          <Button title="Masuk" />
          <Gap height={15} />
          <div className="link-login">
            <p>
              Belum Memiliki AKun ?<Link title="Daftar" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
