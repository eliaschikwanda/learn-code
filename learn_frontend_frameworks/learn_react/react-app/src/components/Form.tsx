import { FormEvent, useRef, useState } from "react";
import { convertToObject } from "typescript";

export const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null) // A good practice to initialize null
  // const ageRef = useRef<HTMLInputElement>(null)
  // const person = {name: '', age: 0}

  // const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     if (nameRef.current !== null) {
  //       person.name = nameRef.current.value
  //     }
  //     if (ageRef.current !== null) {
  //       console.log(ageRef.current.value);
  //       person.age = parseInt(ageRef.current.value); // passInt to convert a string to a number\
  //     }
  //     console.log(person)
  // }
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
        <input
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      {/* div.mb-3>label.form-label+input[type=number].form-control to get that something below */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
        <input
          value={person.age}
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
