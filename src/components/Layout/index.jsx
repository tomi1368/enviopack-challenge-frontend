import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/index";
import { Layout } from "../Layout/style";
const Component = () => {
  return (
    <>
      <NavBar></NavBar>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default Component;
