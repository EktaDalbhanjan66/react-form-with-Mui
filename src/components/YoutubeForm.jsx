import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useFieldArray } from "react-hook-form";

function YoutubeForm() {
  const form = useForm({
    defaultValues:{
      Username:"",
      email:"",
      channel:"",
      phnumbers:[{number:''}]
    }
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log("submited", data);
  };
  // const {name ,ref,onChange,onBlur}=register('Username')
  return (
    <div>
      <h1>YouTube Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("Username", {
              required: { value: true, message: "Username is required" },
            })}
          />
          <p className="error">{errors.Username?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "emailformat invalid",
              },
              validate:{
                notAdmin:(fieldValue)=>{
                  return(
                    fieldValue!=="admin@example.com"||"Enter the different Email address"
                  )
                },
                notBlacklisted:(fieldValue)=>{
                return !fieldValue.endsWith("baddomain.com")|| "this domain is not supported"
                }
              }
            })}
         
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...register("channel", {
              required: { value: true, message: "Channel is required" },
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;
