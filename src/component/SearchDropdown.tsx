import React, { useState } from "react";
import _ from "lodash";
import "./sd.css";

interface Data {
  label: string;
  value: string;
}

const fruits: Data[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherrie", value: "cherrie" },
  { label: "Date", value: "date" },
  { label: "Grape", value: "grape" },
  { label: "Mango", value: "mango" },
  { label: "Orange", value: "orange" },
];

export default function SearchDropdown() {
  const [value, setValue] = useState<string>("");
  const [option, setOption] = useState<string[]>([]);
  const [click, setClick] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleCheckbox = (itemValue: string) => {
    setOption((prevOption) => {
      if (_.includes(prevOption, itemValue)) {
        return _.filter(prevOption, (item) => item !== itemValue);
      } else {
        return [...prevOption, itemValue];
      }
    });
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setOption(fruits.map((item) => item.label));
    } else {
      setOption([]);
    }
  };

  const values = _.filter(fruits, (item) =>
    _.includes(_.toLower(item.label), _.toLower(value))
  );

  return (
    <div>
      <div className="box" onClick={() => setClick(!click)}>
        {_.toString(option)}
      </div>
      {click && (
        <div className="box1">
          <input
            type="text"
            placeholder="Search..."
            value={value}
            onChange={handleChange}
          />
          <input
            className="check"
            type="checkbox"
            checked={option.length === fruits.length}
            onChange={handleSelectAll}
          />
          Select All
          {_.map(values, (item) => (
            <div className="footer" key={item.value}>
              <input
                type="checkbox"
                checked={_.includes(option, item.value)}
                onChange={() => handleCheckbox(item.value)}
              />
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
