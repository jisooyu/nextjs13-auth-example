'use client'
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import {useRouter} from 'next/navigation'

const Admin = () => {
  const { data: session } = useSession();
  const [access, setAccess] = useState(false);
  const router = useRouter()
  useEffect(() => {
    session?.user.id ? (setAccess(true), router.push('/admin')) : (window.alert("SignIn First"),  router.push('/'));
  }, []);

  return (
    access && (
      <div className="flex justify-center items-center p-5 text-red-500 text-lg font-bold">
        Admin Protected Page
      </div>
    ) 
  );
};

export default Admin;
