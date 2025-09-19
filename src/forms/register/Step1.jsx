import React, { useState } from "react";
import { useFormContext } from 'react-hook-form';
import PhoneInputField from '../../components/PhoneInputField';

function Step1() {



  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div >
        <p className="flex flex-start text-xl text-bold">Provide your personal details</p>
        <p className="flex flex-start" >Please fill the field provided correctly.</p>
      </div>

      <div className="space-y-1">
        <label className="block text-gray-700 font-medium">First Name</label>
        <input
          type="text"
          {...register('firstName')}
          className="border border-gray-300 h-11 w-full rounded-md px-3 outline-none focus:outline-none focus:ring-1 focus:ring-[#1E7B82] focus:border-[#1E7B82]"
          placeholder="Enter your first name"
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
      </div>
      <div className="space-y-1">
        <label className="block text-gray-700 font-medium">Last Name</label>
        <input
          type="text"
          {...register('lastName')}
          className="border border-gray-300 h-11 w-full rounded-md px-3 outline-none focus:outline-none focus:ring-1 focus:ring-[#1E7B82] focus:border-[#1E7B82]"
          placeholder="Enter your last name"
        />
        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
      </div>
      <div className="space-y-1">
        <label className="block text-gray-700 font-medium">Email</label>
        <input
          type="email"
          {...register('email')}
          className="border border-gray-300 h-11 w-full rounded-md px-3 outline-none focus:outline-none focus:ring-1 focus:ring-[#1E7B82] focus:border-[#1E7B82]"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
  <PhoneInputField name="phoneNumber" control={useFormContext().control} placeholder="Enter your phone number" />
    </div>
  );
}
export default Step1