// React / NextJS
import { useEffect, useState } from "react";
// Frameworks
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Select,
  Option,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea
} from "@material-tailwind/react";
// Fetch
import { fetchTransactions } from "@/data/fetchTransactions";

const TABLE_HEAD = [
  "Client",
  "Date",
  "Time",
  "Name",
  "Birth Data",
  "Transactions ID",
  "Amount USD",
  "Transaction Type",
  "Amount",
  "Currency",
  "Sequence",
  "Number",
  "FUI Status",
  "FUInr",
  "FUI Date",
  "urt",
  "Reported",
];

const TABLE_HEAD_MODAL = [
  "Client",
  "Name",
  "Transactions ID",
  "Time",
  "Amount USD",
  "Transaction Type",
 
  "Currency",
  
];

function Header() {
  return (
    <CardHeader
      floated={false}
      shadow={false}
      className="rounded-none overflow-visible"
    >
      <div class="gap-10 flex bg-white justify-center items-center">
        <div className="w-72">
          <Select label="Select Version">
            <Option>This month</Option>
            <Option>This week</Option>
            <Option>This year</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
          </Select>
        </div>

        <div className="flex gap-6">
          <input
            type="date"
            id="start"
            name="trip-start"
            min="1900-01-01"
            max="2060-12-31"
          />
          <Typography className="" variant="h5" color="blue-gray">
            To:
          </Typography>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="1900-01-01"
            max="2060-12-31"
          />
        </div>

        <div className="w-30 flex gap-6">
          <Input variant="Amount *" label="Filter Results:" />
          <Button>Search</Button>
        </div>
      </div>
    </CardHeader>
  );
}

function Body({ transactions }) {

  const [size, setSize] = useState(null);
 
  const handleOpen = (value) => setSize(value);

  return (
    <CardBody className="overflow-scroll px-0">
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th
                key={head}
                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  {head}{" "}
                  {index !== TABLE_HEAD.length - 1 && (
                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                  )}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {console.log(transactions)}
          {transactions?.map(
            (
              {
                client,
                date,
                time,
                name,
                firstName,
                birthDate,
                transactionID,
                amountUSD,
                transactionType,
                amount,
                currency,
                sequence,
                number,
                FUIstatus,
                FUInr,
                FUIdate,
                urt,
                reported,
              },
              index
            ) => {
              const isLast = index === transactions.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr
                  onClick={() => handleOpen("xl")}
                  className="cursor-pointer even:bg-blue-gray-50/50"
                  key={transactionID}
                >
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center"
                    >
                      {client}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center"
                    >
                      {date}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center"
                    >
                      {time}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {firstName}
                      </Typography>
                    </div>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {birthDate}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {transactionID}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {amountUSD}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {transactionType}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {amount}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {currency}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {sequence}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {number}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {FUIstatus}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {FUInr}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {FUIdate}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {urt}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {reported}
                    </Typography>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <Dialog
        open={
          size === "xl"
        }
        size={size || "md"}
        handler={handleOpen}

        // altura aqui
        className="overflow-auto max-h-[calc(100vh_-_2rem)]"
      >
        <DialogHeader>Its a simple dialog.</DialogHeader>
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
        <DialogBody divider>
        <table className="mt-4 w-full min-w-max  table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD_MODAL.map((head, index) => (
              <th
                key={head}
                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  {head}{" "}
                  {index !== TABLE_HEAD_MODAL.length - 1 && (
                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                  )}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {console.log(transactions)}
          {transactions?.map(
            (
              {
                client,
                name,
                firstName,
                transactionID,
                time,
                amountUSD,
                transactionType,
                currency,
              },
              index
            ) => {
              const isLast = index === transactions.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (


                <tr onClick={() => handleOpen("xl")}  key={transactionID}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center"
                    >
                      {client}
                    </Typography>
                  </td>

                  
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {firstName}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {transactionID}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center"
                    >
                      {time}
                    </Typography>
                  </td>


                  


                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {amountUSD}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {transactionType}
                    </Typography>
                  </td>

                  

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {currency}
                    </Typography>
                  </td>

                 

          
                </tr>
              );
            }
          )}
        </tbody>
      </table>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </CardBody>
  );
}

function Footer() {
  return (
    <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
      <Typography variant="small" color="blue-gray" className="font-normal">
        Page 1 of 10
      </Typography>
      <div className="flex gap-2">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </div>
    </CardFooter>
  );
}

export function SortableTable() {
  const [transactions, setTransactions] = useState([]);

  const datafeth = async () => {
    const data = await fetchTransactions();
    setTransactions(data?.transactions);
  };

  useEffect(() => {
    datafeth();
  }, []);

  return (
    <Card className="h-[calc(100vh_-_56px_-_77px_-_3rem)] w-full">
      <Header />
      <Body transactions={transactions} />
      <Footer />
    </Card>
  );
}
