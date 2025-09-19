import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useFormContext } from 'react-hook-form';

function Step3() {
  const { register, formState: { errors } } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <label className="block text-gray-700 font-medium">Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
            {...register('password')}
            className="border border-gray-300 h-11 w-full rounded-md pl-3 pr-10 outline-none focus:outline-none focus:ring-1 focus:ring-[#1E7B82] focus:border-[#1E7B82]"
            placeholder="Create a password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="block text-gray-700 font-medium">Confirm Password</label>
        <div className="relative">
          <input
            type={showConfirm ? 'text' : 'password'}
            autoComplete="new-password"
            {...register('confirmPassword')}
            className="border border-gray-300 h-11 w-full rounded-md pl-3 pr-10 outline-none focus:outline-none focus:ring-1 focus:ring-[#1E7B82] focus:border-[#1E7B82]"
            placeholder="Re-enter your password"
          />
          <button
            type="button"
            onClick={() => setShowConfirm((v) => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label={showConfirm ? 'Hide password' : 'Show password'}
          >
            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
      </div>
    </div>
  );
}

export default Step3