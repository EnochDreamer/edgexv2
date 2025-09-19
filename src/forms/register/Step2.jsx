import React from 'react'
import { useFormContext } from 'react-hook-form';


function Step2() {
const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <label className="block text-gray-700 font-medium">Address</label>
        <input
          type="text"
          {...register('address')}
          className="border border-gray-300 h-11 w-full rounded-md px-3 outline-none focus:outline-none focus:ring-1 focus:ring-[#1E7B82] focus:border-[#1E7B82]"
          placeholder="Enter your street address"
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
      </div>
      <div className="space-y-1">
        <label className="block text-gray-700 font-medium">City</label>
        <input
          type="text"
          {...register('city')}
          className="border border-gray-300 h-11 w-full rounded-md px-3 outline-none focus:outline-none focus:ring-1 focus:ring-[#1E7B82] focus:border-[#1E7B82]"
          placeholder="Enter your city"
        />
        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
      </div>
      <div className="space-y-1">
        <label className="block text-gray-700 font-medium">Country</label>
        <input
          type="text"
          {...register('country')}
          className="border border-gray-300 h-11 w-full rounded-md px-3 outline-none focus:outline-none focus:ring-1 focus:ring-[#1E7B82] focus:border-[#1E7B82]"
          placeholder="Enter your country"
        />
        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
      </div>
    </div>
  );
}

export default Step2