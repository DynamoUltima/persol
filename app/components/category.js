import Link from "next/link";
import Label from "../components/label";

export default function CategoryLabel({
  categories,
  nomargin = false
}) {
  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category, index) => (
         
          <Label nomargin={nomargin} color={category.color}>
              {category.title}
            </Label>
        ))}
    </div>
  );
}
