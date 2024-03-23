import React, { useState } from "react";
import styles from "./StudyTracking.module.css";
import ValueInput from "../../components/study_tracking/value_input/ValueInput";

const StudyTracking = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    teacherName: "",
    className: "",
    addedDate: "",
    unfinishedTask: "",
    atSchool: false,
    atHome: false,
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>THEO DÕI HỌC TẬP</h1>
      <div className={styles.contentContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div
              name="student"
              method="post"
              action="study_tracking"
              className={styles.inputContainer}
            >
              <ValueInput
                fieldName={"Họ tên học sinh:"}
                fieldValue={formData.studentName}
                onValueChange={(e) => {
                  handleChange(e);
                }}
                name="studentName"
              />
              <ValueInput
                fieldName={"Giáo viên phụ trách:"}
                fieldValue={formData.teacherName}
                onValueChange={handleChange}
                name="teacherName"
              />
              <div className={styles.row}>
                <ValueInput
                  fieldName={"Lớp:"}
                  fieldValue={formData.className}
                  onValueChange={handleChange}
                  name="className"
                />
                <ValueInput
                  fieldName={"Ngày:"}
                  fieldValue={formData.addedDate}
                  onValueChange={handleChange}
                  name="addedDate"
                />
              </div>
              <p>Những việc phân công chưa làm</p>
              <textarea
                value={formData.unfinishedTask}
                onChange={handleChange}
                name="unfinishedTask"
              />
            </div>

            <img
              src={process.env.PUBLIC_URL + "/writing_icon.png"}
              alt="writing_image"
            />
          </div>
          <p>Chọn hình thức hoàn thành</p>
          <div className={styles.checkBox}>
            <input
              type="checkbox"
              id="at_school"
              name="atSchool"
              checked={formData.atSchool}
              onChange={handleChange}
            />
            Những việc chưa làm sẽ được hoàn thành ngay tại lớp
          </div>
          <div className={styles.checkBox}>
            <input
              type="checkbox"
              id="at_home"
              name="atHome"
              checked={formData.atHome}
              onChange={handleChange}
            />
            Sẽ hoàn thành những việc chưa hoàn thành cho giáo viên tại nhà và nộp lại cho giáo viên
            vào ngày hôm sau
          </div>
          <button type="submit" className={styles.submitBtn} onClick={() => setSubmittedData(true)}>
            <p>Ghi nhận</p>
          </button>
        </form>
      </div>
      {submittedData && (
        <div className={styles.outputContainer}>
          <h2 className={styles.outputHeader}>THÔNG TIN PHIẾU THEO DÕI</h2>
          <p>{`Tên học sinh: ${formData.studentName} - Lớp: ${formData.className}`}</p>
          <p>{`Ngày đăng ký: ${formData.addedDate} - Giáo viên phụ trách: ${formData.teacherName}`}</p>
          <p>{`Những công việc đã được phân công nhưng chưa hoàn thành: ${formData.unfinishedTask}`}</p>
          <p>{`Cam kết sẽ hoàn thành tại: ${(formData.atSchool) ? 'Tại lớp' : ''} ${(formData.atHome) ? 'Tại nhà' : ''}`}</p>
        </div>
      )}
    </div>
  );
};

export default StudyTracking;
