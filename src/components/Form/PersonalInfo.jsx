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

export default function PersonalInfo() {
  const { countries } = useCountries();

  return (
    <div class="flex flex-col bg-white gap-6 px-6 py-6">
      <div className="flex gap-6 justify-center items-center">
        <div className="w-240px">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Name *
          </Typography>
        </div>
        <Input variant="Name" label="Name" />
      </div>

      <div className="flex gap-6 justify-center items-center">
        <div className="w-240px">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Married name
          </Typography>
        </div>
        <Input variant="Married name" label="Married name" />
      </div>

      <div className="flex gap-6 justify-center items-center">
        <div className="w-240px">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            First name(s)
          </Typography>
        </div>
        <Input variant="First name(s)" label="First name(s)" />
      </div>

      <div className="flex gap-6 items-center">
        <div className="flex gap-6">
          <div className="w-[240px]">
            <Typography className="w-[240px]" variant="h5" color="blue-gray">
              Birth date:
            </Typography>
          </div>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="1900-01-01"
            max="2060-12-31"
          />
        </div>
      </div>

      <div>
        <div className="w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Gender *
          </Typography>
        </div>
        <Card className="w-full max-w-[32rem]">
          <List className="flex-row">
            <ListItem className="p-0">
              <label
                htmlFor="horizontal-list-react"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Radio
                    name="horizontal-list"
                    id="horizontal-list-react"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  Female
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="horizontal-list-vue"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Radio
                    name="horizontal-list"
                    id="horizontal-list-vue"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  Male
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="horizontal-list-svelte"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Radio
                    name="horizontal-list"
                    id="horizontal-list-svelte"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  Other
                </Typography>
              </label>
            </ListItem>
          </List>
        </Card>
      </div>

      <div className="type flex gap-6 justify-center items-center">
        <div className="w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Birth Country*
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

      <div className="flex gap-6 justify-center items-center">
        <div className="w-240px">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Birth place *
          </Typography>
        </div>
        <Input variant="Birth place" label="Birth place" />
      </div>

      <div className="type flex gap-6 justify-center items-center">
        <div className="w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Nationality:
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

      <div className="flex gap-6 justify-center items-center">
        <div className="w-240px">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Occupation
          </Typography>
        </div>
        <Input variant="Occupation" label="Occupation" />
      </div>
    </div>
  );
}
