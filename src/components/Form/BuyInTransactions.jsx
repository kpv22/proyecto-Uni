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
  ListItemSuffix,
  Chip,
  Textarea,
} from "@/components/MaterialTailwind/MaterialTailwind";

export default function BuyInTransactions() {
  return (
    <div class="flex flex-col gap-6 bg-white px-16 py-6">
      {/* Primera linea */}
      <div className="flex gap-6 justify-between items-center">
        <div className="flex row">
          <Input variant="Transaction number" label="Transaction number" />
        </div>

        <div className="flex gap-6">
          <Typography variant="h5" color="blue-gray">
            Date:
          </Typography>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="1900-01-01"
            max="2060-12-31"
          />
        </div>

        <div className="flex">
          <Input variant="Time" label="Time" />
        </div>
      </div>
      {/* segunda linea */}
      <div className="flex gap-6 justify-between">
        {/* caja de la izquierda */}
        <div className="izq flex flex-col gap-6">
          <div className="flex gap-6 items-center">
            <div className="w-[200px]">
              <Input
                className="w-[200px]"
                variant="Amount *"
                label="Amount *"
              />
            </div>

            <Typography variant="h5" color="blue-gray">
              USD
            </Typography>
          </div>

          <div className="flex items-center">
            <div className="w-[240px]">
              <Typography className="w-[240px]" variant="h5" color="blue-gray">
                Phase of transaction
              </Typography>
            </div>

            <Card className="w-full shadow-none rounded-none">
              <List className="flex-row p-[1px]">
                <ListItem className="p-0">
                  <label
                    htmlFor="Phase-of-transaction"
                    className="flex w-full cursor-pointer items-center"
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
                      Conducted
                    </Typography>
                  </label>
                </ListItem>
                <ListItem className="p-0">
                  <label
                    htmlFor="Phase-of-transaction"
                    className="flex w-full cursor-pointer items-center"
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
                      Intended
                    </Typography>
                  </label>
                </ListItem>
              </List>
            </Card>
          </div>

          <div className="w-full flex gap-6">
            <Select size="md" label="Transaction type">
              <Option>Notes and coins</Option>
              <Option>DNI</Option>
              <Option> Vue</Option>
              <Option> Angular</Option>
              <Option> Svelte</Option>
            </Select>
          </div>

          <div className="w-full gap-6">
            <Textarea label="Remarks" />
          </div>

          <div className="flex">
            <Typography className="w-[240px]" variant="h5" color="blue-gray">
              Registered by
            </Typography>
            <Typography className="w-[240px]" variant="h5" color="blue-gray">
              TAT
            </Typography>
          </div>

          <Select size="md" label="Player type">
            <Option>Live Games</Option>
            <Option>DNI</Option>
            <Option> Vue</Option>
            <Option> Angular</Option>
            <Option> Svelte</Option>
          </Select>

          <Input variant="Occupation" label="Indicator" />
        </div>
        {/* caja de la derecha */}
        <div className="der flex items-center">
          <Card className="w-96 p-6">
            <List>
              <ListItem className="py-1 pr-1 pl-4">
                Denomination
                <ListItemSuffix>
                  <Typography variant="h6" color="blue-gray">
                    Quantity
                  </Typography>
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                1
                <ListItemSuffix>
                  <Chip
                    value="0"
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                5
                <ListItemSuffix>
                  <Chip
                    value="0"
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                10
                <ListItemSuffix>
                  <Chip
                    value="0"
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                20
                <ListItemSuffix>
                  <Chip
                    value="0"
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                50
                <ListItemSuffix>
                  <Chip
                    value="0"
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                100
                <ListItemSuffix>
                  <Chip
                    value="55"
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <div className="flex row ">
                <Typography className="" variant="h5" color="blue-gray">
                  Amount:
                </Typography>
                <Input disabled label="5,500.00" />
              </div>
            </List>
          </Card>
        </div>
      </div>
    </div>
  );
}
