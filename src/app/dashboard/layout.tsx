import { AppSidebar } from "@/components/menu/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";




export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex min-h-screen bg-gray-50 text-gray-800">
            <SidebarProvider>
                <AppSidebar />
                <div className="flex-1 p-6">{children}</div>
            </SidebarProvider>
        </div>

    );
}