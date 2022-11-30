import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import notificationSvc from "../../services/notification-service";
import axios from "axios";
function NewMeetup() {
  const onAddMeetup = async (values) => {
    const url = "http://localhost:5000/auth/signup";
    const newUser = await axios.post(url, values);
    notificationSvc.success("User Added Successfully");
  };
  return (
    <>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
}

export default NewMeetup;
