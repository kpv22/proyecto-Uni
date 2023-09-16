"use client";
// React / NectJS
import Image from "next/image";
// Component
import Chartjs from "@/components/Chart/Chart";
// Frameworks
import {
  Typography,
  Progress,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { faker } from '@faker-js/faker';
//Images
import walletReceive from "@/../public/svg-icons/addcart.svg"
import walletSend from "@/../public/svg-icons/wallet-send.svg"
import userPlus from "@/../public/svg-icons/user-plus.svg"
import exchange from "@/../public/svg-icons/exchange.svg"
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";


export default function Dashboard() {
  const articulos = [
    "Cuadernos",
    "Lápices",
    "Bolígrafos",
    "Resaltadores",
    "Borradores",
    "Sacapuntas",
    "Reglas",
    "Pegamento",
    "Tijeras",
    "Calculadoras",
    "Libretas",
    "Lapiceros"
  ];

  return (
    <main className="w-full grid grid-cols-4 gap-6 p-6 ">
      <div className="col-span-4 cardshadow overflow-hidden bg-white flex flex-col justify-between">
        <div className="flex gap-6 my-2 justify-center items-center">   
          <div className="flex m-1 gap-2">
            <Typography variant="h4" color="blue-gray">
              Fecha:
            </Typography>
            <input
              type="date"
              id="start"
              name="trip-start"
              min="1900-01-01"
              max="2060-12-31"
            />
          </div>

        
        </div>
        {/* <Progress value={25} size="sm" /> */}
      </div>
{/* este es el ejemplo! */}

      
     
      {articulos.map((articulo, index) => (
        <div key={index} className="col-span-1 h-48 cardshadow bg-white flex justify-center items-center">
          <div>
            <div className="flex justify-between">
              <Typography variant="lead">{articulo}</Typography>
              <Image alt="walletReceive" className="cursor-pointer" src={walletReceive} />
            </div>
            <Typography variant="h2">
              C$ {faker.number.int({ min: 5, max: 400 }) }
            </Typography>
            <div className="flex items-center justify-center gap-4">
              <Typography variant="lead" color="green">
                {faker.number.int({ min: 1, max: 7 }) }
              </Typography>
              <Typography variant="small" color="gray">
                en stock
              </Typography>
            </div>
          </div>
        </div>
      ))}
   
      

    </main>
  );
}
