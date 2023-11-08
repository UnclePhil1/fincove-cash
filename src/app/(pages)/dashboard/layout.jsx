import Dashnav from "../../../components/molecules/dashnav";
import Sidebar from "../../../components/molecules/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-row relative w-[100%] h-screen lg:overflow-y-hidden">
      <div className="flex flex-col w-[100%] top-0 left-0 bg-background z-[10] sticky">
        <Dashnav />
        <div className="flex">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <div className="w-[100%] mt-[10%] md:mt-0 overflow-y-auto"> 
            {/* Set a max height and overflow-y: auto to enable scrolling */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

