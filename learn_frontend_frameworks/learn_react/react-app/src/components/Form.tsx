import { FormEvent, useRef, useState } from "react";
import { Field, FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

interface FormData {
  name: string;
  age: number;
}

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  // const [person, setPerson] = useState({
  //   name: "",
  //   age: 0,
  // });

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(person);
  // };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      {" "}
      {/* When you submit the data react will call that function */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {/* the question mark is optional chaining */}
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            The name field must be at least 3 characters
          </p>
        )}
      </div>
      {/* div.mb-3>label.form-label+input[type=number].form-control to get that something below */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
