import React, { useState, useEffect } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { CiSearch } from "react-icons/ci";
import image from "./assets/image.jpg"
import { FaArrowRight } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import "./App.css"
import HorizontalNavBar from "./compount/HorizontalNavBar";



defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const App = () => {
const [dataArray , setdataArray] = useState();
const [confirmd , setconfirm] = useState();
const [recoverd , setrecoved] = useState();
const [tested , settested] = useState();

   useEffect(() => {
    const fetchdata =  async () => {
              const data = await fetch ("https://data.covid19india.org/v4/min/data.min.json");
                const res = await data.json();
               const dataArray = [];
                for (const state in res) {
                    if (res.hasOwnProperty(state)) {
                        const stateData = res[state];
                        stateData.state_code = state; // Add state code as a property
                        dataArray.push(stateData);
                    }
                }
                setdataArray(dataArray)
             

                console.log(dataArray);
                const confirmddata= dataArray[0].total.confirmed;
                setconfirm(confirmddata)
                const recoverd = dataArray[0]?.total.
                recovered;
                setrecoved(recoverd);
                const tested =  dataArray[0]?.total.
                deceased;
                settested(tested)
              
    }
    fetchdata();
    },[])
  return (
    <div className="flex">
      <div>
        <HorizontalNavBar/>
      </div>

    <div className=" ml-5 mt-2">
           <div className="flex justify-between">
            <div className="">
                  <p className="font-bold text-blue-800">COVID-19</p>
                  <p>Live Tracker Dashboard</p>
            </div>
            <div className="flex items-center gap-10">
                    <div className=" flex border-2 w-[200px] h-10 rounded-full items-center justify-around">
                          <p className="ml-2 mt-1 text-yellow-400">Search.....</p>
                          <CiSearch size={20}  />
                    </div>
                    <div className="flex gap-2 ">
                    <IoNotifications size={30} />
                    <CiLogin size={30}/>
            </div>
                    
            </div>
           

      </div>
      <div className="flex mt-5 gap-5 ">
          <div className="w-[300px] h-[200px] ml-[30px] border-2 rounded-lg "><Line
          data={{
            labels:dataArray?.map(item=>item.state_code),
            datasets: [
              {
                label: "COVID 19 Confirm  cases" ,
                data: dataArray?.map((data) => data.total.confirmed),
                backgroundColor: "#33FFF6",
                borderColor: "#064FF0",
              
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
           
          }}
        /></div>
       <div className="border-2 rounded-lg w-[300px] h-[200px]"> <Line
          data={{
            labels: dataArray?.map(item=>item.state_code),
            datasets: [
              {
                label: "COVID 19 DECEASED  CASE",
                data: dataArray?.map((data) => data.total.deceased),
                backgroundColor: "#FF4933",
                borderColor: "#FF4933",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
          
          }}
        /></div>
        <div className="border-2 rounded-lg w-[300px] h-[200px]"><Line
          data={{
            labels: dataArray?.map(item=>item.state_code),
            datasets: [
              {
                label: "COVID 19 RECOVERD  CASE ",
                data: dataArray?.map((data) => data.total.recovered),
                backgroundColor: "#FFCE33",
                borderColor: "#FFCE33",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
          }}
        /></div>
    </div>

     <div className="flex">
     <div className="w-[600px] h-[300px]">
        <Bar
          data={{
            labels: ["1","2","3","4","5","6","7","8"],
            datasets: [
              {
                label: "currntly tested covid cases",
                data: dataArray?.map((data) => data.delta.tested),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
              {
                label: "currntly tested covid cases",
                data: dataArray?.map((data) => data.delta.vaccinated1),
                backgroundColor: [
                  "rgba(43, 63, 129, 0.8)",
                  "rgba(250, 192, 192, 0.8)",
                  "rgba(253, 135, 145, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            scales: {
      y: {
        beginAtZero: true,
        
      }
    }
          }}
        />
      </div>

      <div className="ml-20">
        <Doughnut
          data={{
            labels: ["confirmd ","recoverd" ,"tested"]
,
            datasets: [
              {
                label: "Count",
                data: [`${confirmd}`,`${recoverd}`,`${tested}`],
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "",
              },
            },
          }}
        />
      </div>
     </div>
    </div>

      <div className="flex flex-col"> 
             
       <div className="w-[200px] h-[250px] border-2 bg-purple-500 rounded-lg mt-20">
                      <div className="flex justify-center pt-12">
                            <img src={image} width={100} height={50} className="rounded-lg "></img>
                      </div>

                      <div className="flex items-center pr-2">
                           <div className="pt-2 pl-2 pr-2">
                           <p className="text-white font-bold text-2xl">Symptoms</p>
                          <p className="text-white font-[5px]"> Read carefully 5 Symptoms of covid-19 </p>
                           </div>
                            <FaArrowRight  size={20} color="white"/>
                      </div>
        </div>

        
      </div>

      

    </div>
  );
};