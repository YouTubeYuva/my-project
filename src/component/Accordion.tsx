import React, { useState } from "react";

interface datum {
  question: string;
  answer: string;
}

const data: datum[] = [
  { question: "Is it Blueberry ?", answer: "Yes, It is." },
];

export default function App() {
  const [option, setOption] = useState<Boolean>(false);

  return (
    <div>
      {data.map((item) => (
        <div>
          <div onClick={() => setOption(!option)}>{item.question}</div>

          {option && <div>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}
