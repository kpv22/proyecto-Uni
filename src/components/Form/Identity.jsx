"use client";

import { cloneElement } from "react";
import { useCountries } from "use-react-countries";

import {
  Select,
  Option,
  Input,
  Typography,
} from "@/components/MaterialTailwind/MaterialTailwind";
import Image from "next/image";

export default function Identity() {
  const { countries } = useCountries();

  return (
    <div className="flex flex-col gap-6 px-16 py-6">
      <div className="flex gap-6 justify-center items-center">
        <div className="w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Document
          </Typography>
        </div>

        <div className="w-full flex gap-6">
          <Select size="md" label="Document type">
            <Option>Passport</Option>
            <Option>DNI</Option>
            <Option> Vue</Option>
            <Option> Angular</Option>
            <Option> Svelte</Option>
          </Select>

          <Input variant="Document number" label="Document number" />
        </div>
      </div>

      <div className="flex gap-6 justify-center items-center">
        <div className="flex gap-6 w-1/2">
          <div className="w-[240px]">
            <Typography className="w-[240px]" variant="h5" color="blue-gray">
              Issue date:
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

        <div className="flex gap-6 w-1/2">
          <div className="w-[240px]">
            <Typography className="w-[240px]" variant="h5" color="blue-gray">
              Expiration date:
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

      <div className="type flex gap-6 justify-center items-center">
        <div className="w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Country of issue:
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

      <div className="type flex gap-6 justify-center items-center">
        <div className="w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Country of nationality:
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
    </div>
  );
}
