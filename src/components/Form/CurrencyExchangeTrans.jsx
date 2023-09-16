"use client";
// Components
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
  Textarea,
} from "@/components/MaterialTailwind/MaterialTailwind";

export default function CurrencyExchangeTrans() {
  return (
    <div class="flex flex-col gap-6 bg-white px-16 py-6">
      {/* Primera linea */}
      <div className="flex gap-6 items-center">
        <div className="flex gap-6 items-center">
          <div className="w-[200px]">
            <Typography className="w-[200px]" variant="h5" color="blue-gray">
              Transaction Date:
            </Typography>
          </div>
          <input
            className="w-[120px]"
            type="date"
            id="start"
            name="trip-start"
            min="1900-01-01"
            max="2060-12-31"
          />
          <div className="w-[150px]">
            <Input className="w-[150px]" variant="Time" label="Time" />
          </div>
        </div>
      </div>
      {/* segunda linea */}
      <div className="grid grid-cols-2 lg:gap-x-24 gap-y-6 items-center justify-around">
        <div className="col-span-2 flex gap-6 lg:gap-x-24">
          <Input variant="Transaction number" label="Transaction number" />
          <Input
            variant="Transaction number"
            disabled
            label="Register by 01/11/2019 15:17"
          />
        </div>

        <div className="flex gap-4 w-[100px] items-center">
          <Input variant="Amount *" label="Amount *" />
          <Typography className="" variant="h5" color="blue-gray">
            USD
          </Typography>
        </div>

        <div className="flex gap-4 w-[100px] items-center">
          <Input variant="Amount *" label="Amount *" />
          <Typography className="" variant="h5" color="blue-gray">
            USD
          </Typography>
        </div>

        <div className="flex items-center gap-6 h-[40px] w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Currency
          </Typography>

          <Card className="w-full shadow-none rounded-none max-w-[32rem]">
            <List className="flex-row">
              <ListItem className="p-0">
                <label
                  htmlFor="Phase-of-transaction"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="Phase-of-transaction"
                      id="Phase-of-transaction"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    AWG
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="Phase-of-transaction"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="Phase-of-transaction"
                      id="Phase-of-transaction"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    USD
                  </Typography>
                </label>
              </ListItem>
            </List>
          </Card>
        </div>

        <div className="flex items-center gap-6 h-[40px] w-[240px]">
          <Typography className="w-[240px]" variant="h5" color="blue-gray">
            Currency
          </Typography>

          <Card className="w-full shadow-none rounded-none max-w-[32rem]">
            <List className="flex-row">
              <ListItem className="p-0">
                <label
                  htmlFor="Phase-of-transaction"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="Phase-of-transaction"
                      id="Phase-of-transaction"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    AWG
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="Phase-of-transaction"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Radio
                      name="Phase-of-transaction"
                      id="Phase-of-transaction"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    USD
                  </Typography>
                </label>
              </ListItem>
            </List>
          </Card>
        </div>

        <Input variant="Occupation" label="Administration fee" />
        <Input variant="Occupation" label="Government tax" />
        <Input variant="Occupation" label="Foreign exchange tax" />
        <Input variant="Occupation" label="To pay to customer" />

        <div className="w-full flex gap-6">
          <Select size="md" label="Player type">
            <Option>Notes and coins</Option>
            <Option>DNI</Option>
            <Option> Vue</Option>
            <Option> Angular</Option>
            <Option> Svelte</Option>
          </Select>
        </div>

        <Input variant="Occupation" label="Indicator" />

        <div className="w-full gap-6">
          <Textarea label="Remarks" />
        </div>
      </div>
    </div>
  );
}
