import React from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Controller } from 'react-hook-form';

export default function PhoneInputField({ name, control, label = 'Phone Number', placeholder = '' }) {

  return (
    <div className="space-y-1">
      <label className="block text-gray-700 font-medium" htmlFor={`phone-input-${name}`}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <>
            <div className="flex">
              <PhoneInput
                defaultCountry="ng"
                value={field.value || ''}
                onChange={(phone, meta) => {
                  field.onChange(phone);
                }}
                format={(val, meta) => {
                  if (!val) return '';
                  const dial = meta?.countryCallingCode || '';
                  const pattern = new RegExp(`^\\+?${dial}`);
                  const withoutDial = val.replace(pattern, '');
                  return withoutDial.trim();
                }}
                className="w-full relative"
                inputClassName="!h-11 !w-full !border !border-gray-300 !rounded-md !bg-white !pl-12 !pr-3 !outline-none !focus:outline-none focus:!ring-1 focus:!ring-[#1E7B82] focus:!border-[#1E7B82] !text-base placeholder:text-gray-400"
                countrySelectorStyleProps={{
                  buttonClassName: "!absolute !left-0 !top-1/2 !-translate-y-1/2 !transform !h-10 !w-11 !border-0 !rounded-none !bg-transparent !px-0 !m-0 !outline-none focus:!outline-none focus:!ring-0 !ring-0 !shadow-none !flex !items-center !justify-center [&_.dial-code]:hidden [&_.country-name]:hidden",
                  dropdownStyleProps: { className: "!z-50" }
                }}
                placeholder={placeholder || 'Enter your phone number'}
                separateDialCode={false}
                hideDropdown={false}
                disableDialCodePrefill
              />
            </div>
            
            {fieldState?.error && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
}
