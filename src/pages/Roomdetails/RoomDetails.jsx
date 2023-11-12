import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loading, setLoadind] = useState(true);
  useEffect(() => {
    setLoadind(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleroom = data.find((room) => room._id === id);
        setRoom(singleroom);
        setLoadind(false);
        console.log(singleroom);
      });
  }, [id]);
  if (loading) return <Loader></Loader>;
  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      <div>
        <div className="flex flex-col gap-6">{/* header  */}</div>
        <div className="">{/* room info */}</div>
        {/* calender  */}
      </div>
    </Container>
  );
};

export default RoomDetails;
