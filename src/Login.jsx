import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" name="name" id="name" placeholder="Enter Your Name" {...register("name", {
            required: true,
            maxLength: 15,
            minLength : { value : 3,
            message : "Full Name Can Not Be less Then 3 Characters and More Then 15 Characters",}
          })} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Id</label>
          <input type="email" name="email" id="email" placeholder="Enter Your Email" {...register("email", {
            required: true,
            maxLength: 100,
            minLength: {
              value : 5,
              message : "Please Enter Valid Email Id",
            }
          })} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter Password" {...register("password", {
            required: true,
            minLength: {
                value : 6,
                message : "The Password Must Be More Then 6 characters",
            }
          })} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
          {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone No</label>
          <input type="text" name="phone" id="phone" placeholder="Enter Your Phone No" {...register("phone", {
            required: true,
            maxLength: 10,
            minLength: {
                value : 10,
                message : "Please Enter VALID Mobile Number"
            }
          })} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
          {errors.phone && <span className='text-red-500'>{errors.phone.message}</span> }
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default Login;
