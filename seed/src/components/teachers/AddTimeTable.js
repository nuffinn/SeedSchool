import axios from "axios";
import React, { useState } from "react";
import classes from "../../assets/CSS/teachers/AddTimeTable.module.css";

const AddTimeTable = (props) => {
  const [ver, setVer] = useState();
  //tiet1
  const [day11, setDay11] = useState();
  const [day12, setDay12] = useState();
  const [day13, setDay13] = useState();
  const [day14, setDay14] = useState();
  const [day15, setDay15] = useState();
  //tiet2
  const [day21, setDay21] = useState();
  const [day22, setDay22] = useState();
  const [day23, setDay23] = useState();
  const [day24, setDay24] = useState();
  const [day25, setDay25] = useState();
  //tit3
  const [day31, setDay31] = useState();
  const [day32, setDay32] = useState();
  const [day33, setDay33] = useState();
  const [day34, setDay34] = useState();
  const [day35, setDay35] = useState();
  //tiet4
  const [day41, setDay41] = useState();
  const [day42, setDay42] = useState();
  const [day43, setDay43] = useState();
  const [day44, setDay44] = useState();
  const [day45, setDay45] = useState();

  const handle11 = (e) => {
    setDay11(e.target.value);
  };
  const handle12 = (e) => {
    setDay12(e.target.value);
  };
  const handle13 = (e) => {
    setDay13(e.target.value);
  };
  const handle14 = (e) => {
    setDay14(e.target.value);
  };
  const handle15 = (e) => {
    setDay15(e.target.value);
  };
  const handle21 = (e) => {
    setDay21(e.target.value);
  };
  const handle22 = (e) => {
    setDay22(e.target.value);
  };
  const handle23 = (e) => {
    setDay23(e.target.value);
  };
  const handle24 = (e) => {
    setDay24(e.target.value);
  };
  const handle25 = (e) => {
    setDay25(e.target.value);
  };
  const handle31 = (e) => {
    setDay31(e.target.value);
  };
  const handle32 = (e) => {
    setDay32(e.target.value);
  };
  const handle33 = (e) => {
    setDay33(e.target.value);
  };
  const handle34 = (e) => {
    setDay34(e.target.value);
  };
  const handle35 = (e) => {
    setDay35(e.target.value);
  };
  const handle41 = (e) => {
    setDay41(e.target.value);
  };
  const handle42 = (e) => {
    setDay42(e.target.value);
  };
  const handle43 = (e) => {
    setDay43(e.target.value);
  };
  const handle44 = (e) => {
    setDay44(e.target.value);
  };
  const handle45 = (e) => {
    setDay45(e.target.value);
  };

  const addSchedule = async () => {
    const data = {
      t_11: day11,
      t_12: day12,
      t_13: day13,
      t_14: day14,
      t_15: day15,
      t_21: day21,
      t_22: day22,
      t_23: day23,
      t_24: day24,
      t_25: day25,
      t_31: day31,
      t_32: day32,
      t_33: day33,
      t_34: day34,
      t_35: day35,
      t_41: day41,
      t_42: day42,
      t_43: day43,
      t_44: day44,
      t_45: day45,
      version: ver,
    };
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/teachers/" +
          localStorage.getItem("id") +
          "/schedules",
        data
      );
      alert("Sucess");
    } catch {
      alert("Something wrong here");
    }
  };

  const handleVersion = (e) => {
    setVer(e.target.value);
  };

  return (
    <>
      <div className={classes.popup} onClick={props.closeAddTimeTable} />
      {/* <h1 className={classes.content_cls}>Th??m th???i kh??a bi???u</h1>
            <div className={classes.pick}>
                <h3> Ch???n ng??y</h3>
                <select id="id" onChange={getDay}>
                    <option />
                    <option>Th??? 2</option>
                    <option>Th??? 3</option>
                    <option>Th??? 4</option>
                    <option>Th??? 5</option>
                    <option>Th??? 6</option>
                    <option>Th??? 7</option>
                </select>
            </div>

            <div className={classes.body_cls}>
                <div className={classes.time}>
                    <h4 >B???t ?????u</h4>
                    <input type="number" onChange={startHandle} />
                    <h4>K???t th??c</h4>
                    <input type="number" onChange={finishHandle} />
                </div>

                <p className={classes.title_cls}>N???i dung m??n h???c</p>
                <textarea type="text" onChange={titleHandle} />

                <button className={classes.btn_cls} onClick={Submit}>Th??m</button>
            </div>
        </div> */}
      <div className={classes.black2}>
        <div className={classes.update}>
          <div className={classes.title_update}>
            C???p nh???t th???i kh??a bi???u version:{" "}
            <span>
              <input type="text" onChange={handleVersion} />
            </span>
          </div>

          <form action="" className={classes.form_update}>
            <div className={classes.date}>
              <div className={classes.date}>Th??? 2</div>
              <div className={classes.date}>Th??? 3</div>
              <div className={classes.date}>Th??? 4</div>
              <div className={classes.date}>Th??? 5</div>
              <div className={classes.date}>Th??? 6</div>
            </div>
            <input
              className={classes.ip_update}
              placeholder="Th??? d???c"
              type="text"
              onChange={handle11}
            />
            <input
              className={classes.ip_update}
              placeholder="Th??? d???c1"
              type="text"
              onChange={handle12}
            />
            <input
              className={classes.ip_update}
              placeholder="Th??? d???c2"
              type="text"
              onChange={handle13}
            />
            <input
              className={classes.ip_update}
              placeholder="Th??? d???c3"
              type="text"
              onChange={handle14}
            />
            <input
              className={classes.ip_update}
              placeholder="Ch??i c??t4"
              type="text"
              onChange={handle15}
            />
            <input
              className={classes.ip_update}
              placeholder="Th??? d???c5"
              type="text"
              onChange={handle21}
            />
            <input
              className={classes.ip_update}
              placeholder="Vi???t ch???6"
              type="text"
              onChange={handle22}
            />
            <input
              className={classes.ip_update}
              placeholder="V???"
              type="text"
              onChange={handle23}
            />
            <input
              className={classes.ip_update}
              placeholder="X???p h??nh7"
              type="text"
              onChange={handle24}
            />
            <input
              className={classes.ip_update}
              placeholder="U??nh nhau8"
              type="text"
              onChange={handle25}
            />
            <input
              className={classes.ip_update}
              placeholder="Ngh??? tr??a9"
              type="text"
              onChange={handle31}
            />
            <input
              className={classes.ip_update}
              placeholder="Ngh??? tr??a10"
              type="text"
              onChange={handle32}
            />
            <input
              className={classes.ip_update}
              placeholder="Ngh??? tr??a11"
              type="text"
              onChange={handle33}
            />
            <input
              className={classes.ip_update}
              placeholder="Ngh??? tr??a12"
              type="text"
              onChange={handle34}
            />
            <input
              className={classes.ip_update}
              placeholder="Ngh??? tr??a13"
              type="text"
              onChange={handle35}
            />
            <input
              className={classes.ip_update}
              placeholder="?????c s??ch14"
              type="text"
              onChange={handle41}
            />
            <input
              className={classes.ip_update}
              placeholder="Xem phim15"
              type="text"
              onChange={handle42}
            />
            <input
              className={classes.ip_update}
              placeholder="U???ng tr??16"
              type="text"
              onChange={handle43}
            />
            <input
              className={classes.ip_update}
              placeholder="Ch??i game17"
              type="text"
              onChange={handle44}
            />
            <input
              className={classes.ip_update}
              placeholder="Th??? d???c18"
              type="text"
              onChange={handle45}
            />
            <div className={classes.btn_update} onClick={addSchedule}>
              C???p nh???t
            </div>
            <div className={classes.btn_out} onClick={props.closeAddTimeTable}>
              Tho??t
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTimeTable;
