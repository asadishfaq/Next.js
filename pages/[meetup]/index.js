import MeetupDetail from "../../components/meetups/MeetupDetail";
import axios from "axios";
function MeetupDetails(props) {
  return <MeetupDetail meetupData={props.meetupData} />;
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetup: "1",
        },
      },
      {
        params: {
          meetup: "2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetup;
  const user = await axios.get(`http://localhost:${5000}/auth/${meetupId}`);
  return {
    props: {
      meetupData: user?.data,
    },
  };
}

export default MeetupDetails;
