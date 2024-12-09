import { Fragment } from "react";
import CourseItem from "./CourseItem";
import Card from "../Card";
// eslint-disable-next-line react/prop-types
export default function CourseListCard({ title, items }) {
  const itemsLength = items.length - 1;
  return (
    <Card title={title}>
      <div className="courses">
        {items.map((item, idx) => (
          <Fragment key={item.id}>
            <CourseItem {...item} />
            {idx !== itemsLength && <hr className="divider" />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
}
