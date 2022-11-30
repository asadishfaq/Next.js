import axios from "axios";
import MeetupList from "../components/meetups/MeetupList";

export default function HomePage(props) {
  const { meetups } = props;
  return <MeetupList meetups={meetups} />;
}

export async function getStaticProps() {
  const allUsers = await axios.get("http://localhost:5000/auth");
  return {
    props: {
      meetups: allUsers.data,
    },
  };
}
