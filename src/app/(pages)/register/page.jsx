'use client'
import { useEffect } from 'react';
import { getServerSession, useSession } from 'next-auth';
import { useRouter } from 'next/router';
import { authOptions } from '../../api/auth/auth/[...nextauth]/route.js/route';
import Register from '../../../components/molecules/RegisterForm';

export default function Registers() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const serverSession = await getServerSession(authOptions);

      if (serverSession) {
        router.replace('/');
      } else {
        router.replace('/')
      }
    };

    checkSession();
  }, [router]);

  return <Register />;
}
