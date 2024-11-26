import React, { useState } from "react";

const fruits: string[] = ["Apple", "Banana", "Cherrie", "Date", "Grape","Mango","Orange",];

export default function Dropdown() {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue((prev) => [...prev, event.target.value]);
  };

  return (
    <div>
      <input value={value} placeholder="Enter The Fruits" readOnly />
      <select onChange={handleChange}>
      <option>Select a Fruits</option>
        {fruits.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
