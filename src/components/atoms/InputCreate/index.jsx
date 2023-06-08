import React from "react";
import "./createinput.css";
import Gap from "../Gap/gap";

const InputCreate = ({ ...rest }) => {
  return (
    <div className="container-inputcreate">
      <Gap height={10} />
      <div className="box-inputcreate">
        <div className="inputtt">
          <label className="label-input"> Judul:</label>
          <Gap height={5} />
          <input
            placeholder="Masukan Judul"
            type="text"
            {...rest}
            className="input-create"
          />
        </div>
        <Gap height={10} />
        <div>
          <input type="file" />
        </div>
        <Gap height={10} />
        <div className="inputtt">
          <label className="label-input">Description :</label>
          <Gap height={5} />
          <textarea
            name=""
            id=""
            cols="100"
            rows="25"
            className="teaxtareA"
            placeholder="Masukan Description"
          ></textarea>
        </div>
        <Gap height={10} />
        <button className="button-input">Simpan</button>
        <Gap height={10} />
      </div>
      <Gap height={10} />
    </div>
  );
};

export default InputCreate;
