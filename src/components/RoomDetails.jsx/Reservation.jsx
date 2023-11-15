/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";
import { useState } from "react";

const Reservation = ({ room }) => {
  const [value, setvalue] = useState({
    startDate: new Date(room?.from),
    enddate: new Date(room?.to),
    key: "selection",
  });
  console.log(value);
  const totalDays = formatDistance(
    new Date(room?.to),
    new Date(room?.from)
  ).split(" ");
  const totalDaysInt = parseInt(totalDays[0]);
  const totalPrice = parseFloat(room?.price * totalDaysInt);

  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <h2 className="text-2xl font-semibold">$ {room?.price}</h2>
        <h3 className="font-light text-neutral-600">night</h3>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender value={value}></Calender>
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"}></Button>
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default Reservation;
