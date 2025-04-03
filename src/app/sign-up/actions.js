'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

export async function signup(formData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData?.name ?? '',
      },
    },
  };

  console.log('debug - data', data);
  const { error } = await supabase.auth.signUp(data);
  console.log('debug - error', error);
  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
