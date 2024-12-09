//import { useQuery } from "@tanstack/react-query";
import "./App.css";
import CourseListCard from "./components/course/CourseListCard";
import CouresForm from "./components/course/CourseForm";
import { useState } from "react";
//import axios from "axios";
//import { fetchCourses } from "./api/fetch";
function App() {
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["courses"],
  //   queryFn: () => fetchCourses(),
  //   staleTime: 5000, // 데이터가 신선하다고 간주되는 시간(ms)
  //   cacheTime: 10000, // 캐시된 데이터를 유지하는 시간(ms)
  //   refetchOnWindowFocus: true, // 창 포커스 시 자동 재요청
  // });
  // if (isLoading) return <div>로딩 중...</div>;
  // if (error) return <div>에러가 발생했습니다: {error.message}</div>;

  const [items, setItems] = useState([
    {
      id: 0,
      title: "TodoList 만들기 ",
      description: "React, javascript",
      thumbnail: "/img/React-icon.svg.png",
      isFavorite: true,
      link: "https://naver.com",
    },
    {
      id: 1,
      title: "입력후에 리스트 생성하기!",
      description: "useState로 상태관리하기",
      thumbnail: "/img/React-icon.svg.png",
      isFavorite: false,
      link: "https://naver.com",
    },
    {
      id: 2,
      title: "input으로 입력후 리스트에 추가하기",
      description: "input submit을 활용해보자",
      thumbnail: "/img/React-icon.svg.png",
      isFavorite: true,
      link: "https://naver.com",
    },
  ]);
  const favoriteItems = items.filter((item) => item.isFavorite);
  const addCourse = (newCourse) => {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: prevItems.length,
        ...newCourse,
        isFavorite: false,
      },
    ]);
  };
  return (
    <>
      <main style={{ flexDirection: "column", gap: "1rem" }}>
        {/* <ul>
          {data.map((crs) => (
            <li key={crs.id}>{crs.title}</li>
          ))}
        </ul> */}
        <CouresForm onAddCourse={addCourse} />
        <CourseListCard items={items} title="내가 할일" />
        {/* <CourseListCard items={favoriteItems} title="관심 강의" /> */}
      </main>
    </>
  );
}

export default App;
