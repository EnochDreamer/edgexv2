import React from 'react'
import Stepper from './components/Stepper'
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

function Register() {

  const formSchema = z
    .object({
      firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
      lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
      email: z.email({ message: 'Invalid email address.' }),
      // Expect E.164 format (e.g. +12025550123)
      phoneNumber: z
        .string()
        .regex(/^\+[1-9]\d{7,14}$/, { message: 'Phone number must be in international format, e.g. +12025550123' }),
      address: z.string().min(5, { message: 'Address must be at least 5 characters.' }),
      city: z.string().min(2, { message: 'City must be at least 2 characters.' }),
      country: z.string().min(2, { message: 'Country must be at least 2 characters.' }),
      password: z
        .string()
        .min(8, { message: 'At least 8 characters' })
        .regex(/[A-Z]/, { message: 'Must include an uppercase letter' })
        .regex(/\d/, { message: 'Must include a number' }),
      confirmPassword: z.string(),
    })
    .superRefine((data, ctx) => {
      if (data.confirmPassword !== data.password) {
        ctx.addIssue({
          code: 'custom',
          message: 'Passwords do not match',
          path: ['confirmPassword'],
        });
      }
    });

const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
  phoneNumber: '',
      address: '',
      city: '',
      country: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Final Form Data:', data);
    // You can replace this with your actual submission logic
    alert('Form submitted successfully!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen sm:bg-gray-100">
      <div className="bg-white p-8 rounded-lg sm:shadow-lg w-full max-w-2xl h-[640px] sm:h-[750px]">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="h-full flex flex-col">
            <Stepper />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Register