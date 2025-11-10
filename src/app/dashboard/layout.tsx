import { AppSidebar } from "@/components/menu/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";




export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex min-h-screen">
            <SidebarProvider>
                <AppSidebar />
                <div className="flex-1 p-4 bg-gray-50 text-slate-900">
                    {children}
                </div>
            </SidebarProvider>
        </div>

    );
}