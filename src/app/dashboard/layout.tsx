import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/appsidebar";
import ProtectedRoute from "@/lib/ProtectedRoutes";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <main className="flex-1 w-full bg-gray-100">
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card px-6 ">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold text-foreground">
                Dashboard
              </h1>
            </header>
            <div className="p-6">{children}</div>
          </main>
        </div>
      </SidebarProvider>
     </ProtectedRoute>
  );
}
