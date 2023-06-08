import React from "react";
import "./contact.css";
import { Gap, Header } from "../../components";
import { FaFacebook, FaMapMarkedAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <div>
      <Header />
      <Gap height={50} />
      <div className="container-contact">
        <div className="main-contact">
          <div className="box-contact">
            <Gap height={10} />
            <input type="text" placeholder="Nama" className="input-contact" />
            <Gap height={10} />
            <input type="text" placeholder="Email" className="input-contact" />
            <Gap height={10} />
            <input
              type="number"
              placeholder="Nomor"
              className="input-contact"
            />
            <Gap height={10} />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="Pesan-contact"
              placeholder="Pesan"
            />
            <Gap height={30} />
            <button className="btn-contact">Kirim</button>
            <Gap height={30} />
          </div>
          <div className="box-contact">
            <div className="isi-box2-contact">
              <h2 className="h2-contact">Silakan Hubungi Kami</h2>
              <Gap height={20} />

              <p className="p2-contact">
                <FaMapMarkedAlt /> Ntt, kefamenanu
              </p>
              <Gap height={5} />
              <p className="p2-contact">
                <FaFacebook /> www.Rdm.com
              </p>
              <Gap height={5} />
              <p className="p2-contact">
                <FaFacebook /> 082144111528
              </p>
              <Gap height={5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
