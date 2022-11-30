import { useRouter } from "next/router";
import axios from "axios";
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";

function EditUser() {
  const router = useRouter();

  const onAddMeetup = async (values) => {
    const url = "http://localhost:5000/auth/signup";
    const newUser = await axios.post(url, values);
    notificationSvc.success("User Added Successfully");
    router.push("/");
  };
  return (
    <>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
}

export default EditUser;
