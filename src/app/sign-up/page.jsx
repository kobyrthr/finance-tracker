'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import React from 'react';
import IllustrationAuthentication from '@/../public/assets/images/illustration-authentication.svg';
import Image from 'next/image';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import LogoLargeIcon from '@/../public/assets/images/logo-large.svg';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { signup } from './actions';

const formSchema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s-]+$/, {
      message: 'Name must contain only letters, spaces and dashes',
    })
    .min(2, {
      message: 'Name must be at least 2 characters',
    }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().min(6, {
    message: 'Passwords must be at least 8 characters',
  }),
});

const SignUpPage = () => {
  const { formState, handleSubmit, ...form } = useForm({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  return (
    <div className="flex flex-col xl:flex-row p-5 size-full">
      <div className="py-6 rounded-b-lg absolute flex items-center justify-center top-0 left-0 right-0 xl:hidden bg-grey-900 h-[70px]">
        <Image
          src={LogoLargeIcon}
          alt="Logo"
          width={122}
          height={22}
          className=" z-50"
        />
      </div>
      <div className="relative min-w-[560px] max-xl:hidden min-h-[920px] rounded-xl overflow-hidden">
        <Image
          src={LogoLargeIcon}
          alt="Logo"
          width={122}
          height={22}
          className="absolute top-10 left-10 z-50"
        />
        <Image
          src={IllustrationAuthentication}
          alt="Picture of the author"
          fill
          className="object-cover object-center"
        />
        <div className="absolute bottom-10 left-10 right-10 text-white">
          <Typography asChild type="preset-1">
            <h1>Keep track of your money and save for your future</h1>
          </Typography>
          <Typography asChild type="preset-4" className="mt-6">
            <p>
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </Typography>
        </div>
      </div>
      <div className="size-full flex justify-center items-center">
        <Card className="">
          <CardContent className="max-w-full max-h-full w-[343px] sm:w-[560px] min-h-[406px] sm:min-h-[422px] rounded-xl p-4 sm:p-8 flex flex-col gap-8">
            <CardHeader className="p-0">
              <Typography asChild type="preset-1">
                <h1>Sign Up</h1>
              </Typography>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={handleSubmit(signup)} className="space-y-0">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input type="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  isLoading={formState.isSubmitting}
                  className="w-full min-h-12 mt-4"
                  type="submit"
                >
                  <Typography type="preset-4-bold">Create Account</Typography>
                </Button>
              </form>
            </Form>
            <Typography
              asChild
              type="preset-4"
              className="text-grey-500 text-center"
            >
              <p>
                Already have an account?{' '}
                <a href="/login" className="text-primary">
                  <Typography
                    asChild
                    type="preset-4-bold"
                    className="text-grey-900 underline underline-offset-4 ml-1"
                  >
                    <span>Login</span>
                  </Typography>
                </a>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;
