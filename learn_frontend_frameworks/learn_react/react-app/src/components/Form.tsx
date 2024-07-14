import { FormEvent, useRef, useState } from "react";
import { Field, FieldValue, FieldValues, useForm } from "react-hook-form";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  name: z.string().min(3, {message: "Name must be at least 3 characters."}),
  age: z.number({invalid_type_error: "Age field is required."}).min(18),
});

type FormData = z.infer<typeof schema>;
// Also install @hookform/resolvers@"version" to get the interface from the Zod object.


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
    formState: { errors, isValid },
  } = useForm<FormData>({resolver: zodResolver(schema)});

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
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {/* the question mark is optional chaining */}
        {errors.name && (
          <p className="text-danger">{ errors.name.message }</p>
        )}
      </div>
      {/* div.mb-3>label.form-label+input[type=number].form-control to get that something below */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
        <input
          {...register("age", {valueAsNumber: true})}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && (
          <p className="text-danger">{ errors.age.message }</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary">Submit</button>
    </form>
  );
};
