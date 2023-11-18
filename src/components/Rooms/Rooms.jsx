import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Navbar/Heading";
import Loader from "../Shared/Loader";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params] = useSearchParams();
  const categoryFromUrl = params.get("category");
  const [loading, setLoadind] = useState(true);
  useEffect(() => {
    setLoadind(true);
    fetch("http://localhost:8000/rooms")
      .then((res) => res.json())
      .then((data) => {
        if (categoryFromUrl) {
          const filtered = data.filter(
            (room) => room.category === categoryFromUrl
          );
          setRooms(filtered);
        } else {
          setRooms(data);
        }
        setLoadind(false);
      });
  }, [categoryFromUrl]);

  if (loading) return <Loader></Loader>;
  return (
    <Container>
      {rooms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
          {rooms.map((room) => (
            <Card key={room._id} room={room}></Card>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            title={"No Rooms Availabe in this category"}
            subtitle={"Please select other categories"}
            center={true}
          ></Heading>
        </div>
      )}
    </Container>
  );
};

export default Rooms;
