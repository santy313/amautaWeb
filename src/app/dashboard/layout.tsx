import { AppSidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";




export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

            <div className="flex">
                <SidebarProvider>
                    <AppSidebar />
                    <div className="p-2 w-full text-slate-900">
                        {children}
                    </div>
                </SidebarProvider>
            </div>
        </div>
    );
}