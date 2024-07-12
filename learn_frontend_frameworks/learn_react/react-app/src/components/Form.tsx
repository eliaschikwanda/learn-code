import { FormEvent, useRef } from "react";
import { convertToObject } from "typescript";

export const Form = () => {

  const nameRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      if (nameRef.current !== null) {
        console.log(nameRef.current.value)
      }
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      {/* div.mb-3>label.form-label+input[type=number].form-control to get that something below */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
