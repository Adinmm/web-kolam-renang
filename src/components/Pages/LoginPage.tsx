"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Loader2, User } from "lucide-react";
import { useLogin } from "@/hooks/usePost";

export default function LoginForm() {
  const { form, mutation } = useLogin();
  const handleSubmit = (data: any) => {
    mutation.mutate(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-sky-100 via-cyan-100 to-blue-200 p-4">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-14 h-14 rounded-full bg-sky-500 flex items-center justify-center">
            <Mail className="text-white w-6 h-6" />
          </div>
          <CardTitle className="text-2xl font-semibold text-sky-700">
            Login Akun
          </CardTitle>
          <CardDescription>Masuk untuk mengakses dashboard</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            {/* Username */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-500" />
                <Input
                  type="text"
                  placeholder="admin"
                  {...form.register("username")}
                  className="pl-10 focus-visible:ring-sky-400"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-500" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  {...form.register("password")}
                  className="pl-10 focus-visible:ring-sky-400"
                  required
                />
              </div>
            </div>

            {/* Button */}
            <Button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white"
              disabled={mutation.isPending}
            >
              {mutation.isPending && <Loader2 className="animate-spin" />}
              Masuk
            </Button>

            {/* Footer */}
            <p className="text-center text-sm text-muted-foreground">
              Lupa password?{" "}
              <span className="text-sky-600 hover:underline cursor-pointer">
                Reset di sini
              </span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
