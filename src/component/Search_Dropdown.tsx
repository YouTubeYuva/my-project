import React, { useState } from "react";

export default function Search_Dropdown() {
  let food: string[] = [
    "Burger",
    "Curry",
    "Donut",
    "Ice Cream",
    "Pasta",
    "Pizza",
    "Sushi",
    "Salad",
    "Steak",
    "Tacos",
  ];

  const [value, setValue] = useState<string>("");
  const [option, setOption] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value === "") {
      setOption([]);
    } else {
      setOption(
        food.filter((item) =>
          item.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="🔍 Search food..."
      />
      {option.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

