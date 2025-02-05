import Sidebar from "../components/shared/Sidebar";

const Dashboardlayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar/>
      {children}
      <h1>Footer</h1>
    </div>
  );
};

export default Dashboardlayout;