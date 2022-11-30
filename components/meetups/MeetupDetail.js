import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  const { name, image, age, address, email } = props.meetupData;
  return (
    <section className={classes.detail}>
      <img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
        }
        alt={name}
      />
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{age}</h3>
      <address>{address}</address>
    </section>
  );
}

export default MeetupDetail;
