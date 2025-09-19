import React from 'react'
import { useFormContext } from 'react-hook-form';

function Step4() {
  const { getValues } = useFormContext();
  const formData = getValues();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Review Your Details</h2>
      <div className="space-y-4 p-4 ring-2 ring-[#1E7B82] rounded-md bg-gray-50">
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Full Name:</span>
          <span>{formData.firstName} {formData.lastName}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Email:</span>
          <span>{formData.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Phone:</span>
          <span>{formData.phoneNumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Address:</span>
          <span>{formData.address}, {formData.city}, {formData.country}</span>
        </div>
      </div>
    </div>
  );
}

export default Step4