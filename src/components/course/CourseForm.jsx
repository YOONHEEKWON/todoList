import { useState } from "react";
import Card from "../Card";
//import { useImmer } from "use-immer";
export default function CouresForm({ onAddCourse }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    thumbnail: "/img/React-icon.svg.png",
    link: "https://naver.com",
  });
  const handleCourseFormSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.description) {
      onAddCourse(form);
      setForm({ title: "", description: "" });
    } else {
      alert("제목과 설명을 입력하세요.");
    }
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value, //name 기본 문법임
    });
  };
  // const handleSkillChange = (e) => {
  //   setForm({
  //     ...form,
  //     info: {
  //       ...form.info,
  //       skill: e.target.value,
  //     },
  //   });
  // };
  // const handleLevelChange = (e) => {
  //   setForm({
  //     ...form,
  //     info: {
  //       ...form.info,
  //       level: e.target.value,
  //     },
  //   });
  // };

  return (
    <Card title="할일 추가">
      <form
        onSubmit={handleCourseFormSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          name="title"
          placeholder="해야할 일"
          value={form.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="설명"
          value={form.description}
          onChange={handleInputChange}
        />
        {/* <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="skill" style={{ width: "100px" }}>
            스킬
          </label>
          <input
            name="skill"
            id="skill"
            type="text"
            value={form.info.skill}
            onChange={handleSkillChange}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="level" style={{ width: "100px" }}>
            난이도
          </label>
          <select
            name="level"
            id="level"
            value={form.info.level}
            onChange={handleLevelChange}
          >
            <option value="0">입문</option>
            <option value="1">초급</option>
            <option value="2">중급</option>
          </select>
        </div> */}
        <input type="submit" value="등록" />
        {(form.title || form.description) && (
          <div
            style={{
              marginTop: "16px",
              padding: "16px",
              backgroundColor: "#eee",
              borderRadius: "6px",
            }}
          >
            {form.title && <p>해야할 일 - {form.title}</p>}
            {form.description && <p>설명 - {form.description}</p>}
          </div>
        )}
      </form>
    </Card>
  );
}
