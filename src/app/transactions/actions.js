'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function isUserAuth() {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log('debug - session', session);
  if (!session) {
    redirect('/login');
  }
}
