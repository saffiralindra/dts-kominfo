import React from "react";
import { Typography, Card } from "antd";
import axios from "axios";
import { useQuery } from "react-query";

const { Title } = Typography;

const styling = {
   color: "white",
};

const fetchPeople = async () => {
   const res = await axios.get("people");
   return res;
};

export default function People() {
   const { data, status } = useQuery("people", fetchPeople);
   console.log(data);
   console.log(status);
   return (
      <div>
         {status === "loading" && <div style={styling}>Loading Data</div>}
         {status === "error" && <div style={styling}>Error Fetching Data</div>}
         {status === "success" && (
            <div>
               <Title level={2}>People</Title>
               {data.results.map((people) => (
                  <Card type="inner" title={people.name}>
                     <p>Birth Year - {people.birth_year}</p>
                     <p>Gender - {people.gender}</p>
                  </Card>
               ))}
            </div>
         )}
      </div>
   );
}
