"use client";

import { cloneElement } from "react";
import { useCountries } from "use-react-countries";

import {
  Select,
  Option,
  Input,
  Typography,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Radio,
} from "@/components/MaterialTailwind/MaterialTailwind";
import Image from "next/image";

export default function Adress() {
  const { countries } = useCountries();

  return (
    <div className="flex flex-col gap-6 px-6 py-6">
      {/* Country */}
      <div className="flex gap-6 justify-center items-center">
        <div className="w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Country
          </Typography>
        </div>

        <Select
          size="md"
          label="Select Country"
          selected={element =>
            element &&
            cloneElement(element, {
              className: "flex items-center px-0 gap-2 pointer-events-none",
            })
          }
        >
          {countries.map(({ name, flags }) => (
            <Option key={name} value={name} className="flex items-center gap-2">
              <Image
                src={flags.svg}
                alt={name}
                height={20}
                width={20}
                className="rounded-full object-cover"
              />
              {name}
            </Option>
          ))}
        </Select>
      </div>
      {/* State */}
      <div className="flex gap-6 justify-center items-center">
        <div className="w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            State
          </Typography>
        </div>
        <Input variant="Document number" label="Document number" />
      </div>
      {/*  Zip Code / City */}
      <div className="flex gap-6 justify-center items-center">
        <div className="w-1/2">
          <Typography variant="h5" color="blue-gray">
            Zip Code
          </Typography>
          <Input variant="Document number" label="Document number" />
        </div>

        <div className="w-1/2">
          <Typography variant="h5" color="blue-gray">
            City
          </Typography>
          <Input variant="Document number" label="Document number" />
        </div>
      </div>
      {/* Street Number */}
      <div className="flex gap-6 justify-center items-center">
        <div className="w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Street Number
          </Typography>
        </div>
        <Input variant="Document number" label="Document number" />
      </div>
      {/* Street Letter */}
      <div className="flex gap-6 justify-center items-center">
        <div className="w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Street Letter
          </Typography>
        </div>
        <Input variant="Document number" label="Document number" />
      </div>
      {/* Telephone Number */}
      <div className="flex gap-6 justify-center items-center">
        <div className="w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Telephone Number
          </Typography>
        </div>
        <Input variant="Document number" label="Document number" />
      </div>
      {/* Telephone List */}
      <div>
        <Card className="w-full max-w-[32rem]">
          <List className="flex-row">
            <ListItem className="p-0">
              <label
                htmlFor="telephone-celular"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Radio
                    name="telephone-list"
                    id="telephone-celular"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  Celular
                </Typography>
              </label>
            </ListItem>

            <ListItem className="p-0">
              <label
                htmlFor="telephone-fixed"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Radio
                    name="telephone-list"
                    id="telephone-fixed"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  Fixed
                </Typography>
              </label>
            </ListItem>

            <ListItem className="p-0">
              <label
                htmlFor="telephone-unknowr"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Radio
                    name="telephone-list"
                    id="telephone-unknowr"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  Unknowr
                </Typography>
              </label>
            </ListItem>
          </List>
        </Card>
      </div>
      {/* Email Address */}
      <div className="flex gap-6 justify-center items-center">
        <div className="w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            E-Mail address
          </Typography>
        </div>
        <Input variant="Document number" label="Document number" />
      </div>
    </div>
  );
}
