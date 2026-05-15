"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const onSubMit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newData = Object.fromEntries(formData.entries());
    // console.log('new data', newData);

    const { data, error } = await authClient.signUp.email({
    name: newData.name,
    email: newData.email,
    password: newData.password,
    image : newData.image
   
});
if (data) {
  toast.success("Singup suceessfull");
  redirect('/')
}
if(error){
  toast.error("faild Your Submittion")
}

// console.log({data, error});



  };
  return (
    <div className="max-w-[40%] mx-auto bg-amber-100 my-10 p-10">
        <h1 className="text-center font-bold text-4xl">Login Page</h1>
      <Form className="flex flex-col gap-4" onSubmit={onSubMit}>
        <TextField
          isRequired
          name="name"
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="John Doe" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="image"
      
        >
          <Label>Image Url</Label>
          <Input placeholder="Image" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
