import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const CategoryBox = ({ category, selected }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`?category=${category.label}`);
  };
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col p-2 items-center justify-center hover:text-neutral-800 hover:border-b-neutral-800 cursor-pointer transition border-b-2 ${
        selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-b-neutral-300 text-neutral-500"
      }`}
    >
      <category.icon className="text-3xl"></category.icon>
      <div className="text-sm font-medium">{category.label}</div>
    </div>
  );
};

export default CategoryBox;
