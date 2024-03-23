import React, { useState } from "react";
import classes from "./Form.module.css";

const Form = () => {
  const [diemHk1, setDiemHk1] = useState("");
  const [diemHk2, setDiemHk2] = useState("");
  const [diemTB, setDiemTB] = useState("");
  const [ketQua, setKetQua] = useState("");
  const [hocLuc, setHocLuc] = useState("");

  const inputValueChangeHandler = (event) => {
    if (event.target.id === "hk1") {
      setDiemHk1(event.target.value);
    } else if (event.target.id === "hk2") {
      setDiemHk2(event.target.value);
    }
  };

  const tinhDiemTB = (hk1, hk2) => {
    hk1 = parseInt(hk1);
    hk2 = parseInt(hk2);
    return (hk1 + hk2 * 2) / 3;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const diemTb = tinhDiemTB(diemHk1, diemHk2);

    setDiemTB(diemTb);

    if (diemTb < 5) {
      setKetQua("Ở lên lớp");
      setHocLuc("Yếu");
    }

    if (diemTb >= 5) {
      setKetQua("Được lên lớp");
      if (diemTb < 6.5) {
        setHocLuc("Trung bình");
      } else if (diemTb > 6.5 && diemTb < 8) {
        setHocLuc("Khá");
      } else if (diemTb >= 8) {
        setHocLuc("Giỏi");
      }
    }
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>KẾT QUẢ HỌC TẬP</h1>
      <form action="/" className={classes.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="hk1">Điểm HK1: </label>
          <input
            type="number"
            id="hk1"
            onChange={inputValueChangeHandler}
            value={diemHk1}
          />
        </div>

        <div>
          <label htmlFor="hk2">Điểm HK2: </label>
          <input
            type="number"
            id="hk2"
            onChange={inputValueChangeHandler}
            value={diemHk2}
          />
        </div>

        <div>
          <label htmlFor="tb">Điểm trung bình: </label>
          <input type="number" id="tb" disabled value={diemTB} />
        </div>

        <div>
          <label htmlFor="kq">Kết quả: </label>
          <input type="text" id="kq" disabled value={ketQua} />
        </div>

        <div>
          <label htmlFor="xl">Xếp loại học lực: </label>
          <input type="text" id="xl" disabled value={hocLuc} />
        </div>
        <button>Xem kết QUẢ</button>
      </form>
    </div>
  );
};

export default Form;
