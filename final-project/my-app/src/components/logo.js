import { Layout } from "antd";
import logo from "../image/imageedit_1_3461157715.png";
const { Header } = Layout;

export default function Logo() {
   return (
      <Header className="pt-0 ps-3">
         <img src={logo} alt="Logo" style={{ width: "100px", margin: "0px" }} />
      </Header>
   );
}
