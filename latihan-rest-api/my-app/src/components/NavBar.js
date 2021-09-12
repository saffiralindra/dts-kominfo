import React from "react";
import { Typography, Button, Space } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

export default function NavBar() {
   return (
      <div>
         <Title>Starwars Info</Title>
         <Space size={20}>
            <Link to="/planet">
               <Button shape="round" size="large">
                  Planets
               </Button>
            </Link>
            <Link to="/people">
               <Button shape="round" size="large">
                  Peoples
               </Button>
            </Link>
         </Space>
      </div>
   );
}
