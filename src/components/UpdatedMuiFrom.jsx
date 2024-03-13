import React from "react";
import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";

function UpdatedMuiFrom() {
  const form = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone_number: 0,
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1>Sign Up</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={400}>
          <TextField
            label="FirstName"
            type="text"
            {...register("firstName", {
              required: true,
              pattern: /^[a-zA-Z]+$/,
            })}
            error={!!errors.firstName}
            helperText={errors.firstName && "Please enter a valid first name"}
          />

          <TextField label="LastName" type="text" {...register("lastName",{
              required: true,
              pattern: /^[a-zA-Z]+$/,
            })}  
            error={!!errors.lastName}
            helperText={errors.lastName && "Please enter a valid last name"} />
          <TextField
            label="Email"
            type="email"
            {...register("email",{
                required: true,
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              } )}
              error={!!errors.email}
            helperText={errors.email && "Please enter a valid email"}
          />
          <TextField
            label="Password"
            type="password"
            {...register("password",{
                required:"password is Required"
            })}
            error={!!errors.password}
            helperText={errors.password ?.message}
          />
          <TextField
            label="Phone Number"
           
            inputProps={{ maxLength: 10 }}
            {...register("phone_number", {
                required: true,
                maxLength: 10,
                pattern: /^\d+$/ // Pattern for only digits
              })}
              error={!!errors.phone_number}
            helperText={errors.phone_number&& 'Please enter valid phone Number'}
          />
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default UpdatedMuiFrom;
