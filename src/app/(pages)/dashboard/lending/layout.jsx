import LendNav from "../../../../components/molecules/lendNav";
import Sidebarp2p from "../../../../components/molecules/sidebarp2p";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-row relative w-[100%] bg-background h-screen lg:overflow-y-hidden">
      <div className="flex flex-col w-[100%] top-0 left-0 bg-background z-[10] sticky">
        <LendNav />
        <div className="flex">
          <div className="hidden lg:block">
            <Sidebarp2p />
          </div>
          <div className="w-[100%] mt-[10%] md:mt-0 md:h-[100vh] h-screen overflow-y-auto"> 
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
