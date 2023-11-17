import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  const [params] = useSearchParams();
  const categoryFromUrl = params.get("category");

  return (
    <Container>
      <div className="py-4 flex gap-1 items-center justify-between overflow-x-auto">
        {categories.map((category) => (
          <CategoryBox
            key={category.label}
            category={category}
            selected={categoryFromUrl === category.label}
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
