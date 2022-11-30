import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";
import FlexView from "react-flexview";
import axios from "axios";
import notificationSvc from "../../services/notification-service";
import { useRouter } from "next/router";

function MeetupDetail(props) {
  const { name, id, age, address, email } = props.meetupData;
  const router = useRouter();

  const handleDeleteUser = async () => {
    const URL = `http://localhost:5000/auth/${id}`;
    const deleteUser = await axios.delete(URL);
    console.log("deletedUser", deleteUser);
    notificationSvc.success("user deleted successfully");
    router.push("/");
  };

  const handleEditUser = () => {};
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

      <FlexView>
        <FlexView marginTop="auto">
          <div className={classes.actions}>
            <button onClick={handleEditUser}>Edit</button>
          </div>{" "}
        </FlexView>
        <FlexView marginLeft="auto">
          <div className={classes.actions}>
            <button onClick={handleDeleteUser}>Delete</button>
          </div>
        </FlexView>
      </FlexView>
    </section>
  );
}

export default MeetupDetail;
