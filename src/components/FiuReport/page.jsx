"use client";
import {
  Input,
  Typography,
  Button,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";

export default function FiuReport() {
  return (
    <div className="flex-col w-full">
      <div className="flex border p-2 gap-10">
        <div className="w-52">
          <Input variant="Time" label="FIU Transaction Number" />
        </div>

        <Typography variant="h6" color="blue-gray">
          Reporting Date:
        </Typography>
        <input
          type="date"
          id="start"
          name="trip-start"
          min="1900-01-01"
          max="2060-12-31"
        />

        <Typography variant="h6" color="blue-gray">
          Transaction amount:
        </Typography>
        <div className="w-52">
          <Input variant="Time" label="15,281.00" disabled />
        </div>
        <Typography variant="h6" color="blue-gray">
          USD
        </Typography>
      </div>
      <div className="flex p-2 justify-around items-center border">
        <Typography variant="h5" color="blue-gray">
          Indicator
        </Typography>
        <div className="w-52">
          <Select size="md" label="Transaction type">
            <Option>Notes and coins</Option>
            <Option>DNI</Option>
            <Option> Vue</Option>
            <Option> Angular</Option>
            <Option> Svelte</Option>
          </Select>
        </div>
      </div>
      <div className="w-full p-2">
        <Textarea label="Description" />
      </div>
      <div>
        <div className="flex border p-2 gap-10">
          <div className="w-52 gap-2">
            <Input variant="Time" label="FIU confirmation number" />
          </div>

          <Typography variant="h6" color="blue-gray">
            Received date:
          </Typography>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="1900-01-01"
            max="2060-12-31"
          />
          <div className=" flex px-20 gap-10 w-32 ">
            <Select size="md" label="Transaction type">
              <Option>Notes and coins</Option>
              <Option>DNI</Option>
              <Option> Vue</Option>
              <Option> Angular</Option>
              <Option> Svelte</Option>
            </Select>
            <div>
              <Button>Drop email here</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
