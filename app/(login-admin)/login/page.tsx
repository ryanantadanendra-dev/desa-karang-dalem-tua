"use client";

import { Suspense } from "react";
import LoginForm from "@/components/LoginForm";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/auth";

const Login = () => {
  return (
    <Suspense fallback={<div>Memuat...</div>}>
      <LoginForm />
    </Suspense>
  );
};

export default Login;
