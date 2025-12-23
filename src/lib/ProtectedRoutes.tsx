"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ProtectedRouteProps = {
  children: React.ReactNode;
  allowedRoles: string[];
};

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<null | boolean>(null);

  useEffect(() => {
    const role = sessionStorage.getItem("role");

    if (!role || !allowedRoles.includes(role)) {
      router.replace("/auth/login");
      setAuthorized(false);
    } else {
      setAuthorized(true);
    }
  }, [allowedRoles, router]);

  if (authorized === null) return null;

  if (authorized === false) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
