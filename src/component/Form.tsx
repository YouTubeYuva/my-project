import React, { useState } from "react";

interface Data {
  name: string;
  email: string;
  phone: string;
  gender: string;
  active: string;
  comment: string;
}

export default function Form() {
  const [form, setForm] = useState<Data>({
    name: "",
    email: "",
    phone: "",
    gender: "",
    active: "",
    comment: ""
  });

  const [value, setValue] = useState<Data[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setValue([...value, form]);
    setForm({
      name: "",
      email: "",
      phone: "",
      gender: "",
      active: "",
      comment: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="phone">
          Phone:
          <input
            type="text"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="gender">
          Gender:
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={form.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={form.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="others">Others</label>
          <input
            type="radio"
            id="others"
            name="gender"
            value="others"
            checked={form.gender === "others"}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="active">
          Active:
          <label htmlFor="true">True</label>
          <input
            type="checkbox"
            id="true"
            name="active"
            value="true"
            checked={form.active === "true"}
            onChange={handleChange}
          />
          <label htmlFor="false">False</label>
          <input
            type="checkbox"
            id="false"
            name="active"
            value="false"
            checked={form.active === "false"}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="comment">
          Comment:
          <input
            type="text"
            id="comment"
            name="comment"
            value={form.comment}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div>
        {value.map((item, index) => (
          <div key={index}>
            <div>Name:{item.name}</div>
            <div>Email: {item.email}</div>
            <div>Phone:{item.phone}</div>
            <div>Gender:{item.gender}</div>
            <div>Active:{item.active}</div>
            <div>Review:{item.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
