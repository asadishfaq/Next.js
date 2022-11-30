import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import axios from "axios";
import notificationSvc from "../../services/notification-service";

function NewMeetupForm(props) {
  const { onAddMeetup } = props;
  const router = useRouter();

  const userId = router.query.editUser;
  console.log("userId", userId);
  useEffect(() => {
    if (userId) {
      getUserDetails();
    }
  }, []);

  const getUserDetails = async () => {
    const userDetails = await axios.get(
      `http://localhost:${5000}/auth/${userId}`
    );
    console.log("userDetails", userDetails);
    titleInputRef.current.value = userDetails.data.name;
    emailInputRef.current.value = userDetails.data.email;
    ageInputRef.current.value = userDetails.data.age;
    addressInputRef.current.value = userDetails.data.address;
  };
  const titleInputRef = useRef();
  const ageInputRef = useRef();
  const addressInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    // const enteredPassrd = passwordInputRef.current.value;

    const meetupData = {
      name: enteredTitle,
      email: enteredEmail,
      age: parseInt(enteredAge),
      address: enteredAddress,
      // password: !userId && enteredPassrd,
    };

    userId ? editUser(meetupData) : onAddMeetup(meetupData);
  }

  const editUser = async (values) => {
    const URL = `http://localhost:5000/auth/${userId}`;
    const updateUser = await axios.patch(URL, values);
    notificationSvc.success("User Edit Successfully");
    router.push("/");
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Name</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="age">age</label>
          <input type="number" required id="age" ref={ageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        {/* {!userId && (
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              id="password"
              ref={passwordInputRef}
            />
          </div>
        )} */}
        <div className={classes.actions}>
          <button>{userId ? "Edit User" : "Add User"}</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
