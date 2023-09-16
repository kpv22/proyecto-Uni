import { Input, Select, Option, Button } from "@/components/MaterialTailwind/MaterialTailwind";

export default function LexisNexis() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <div className="grid grid-cols-4 gap-6 w-full py-10 px-6 cardshadow bg-white">
        <p className="col-span-4">Name</p>
        <div><Input variant="Time" label="Firt Name" /></div>
        <div><Input variant="Time" label="Middle Name" /></div>
        <div><Input variant="Time" label="Last Name" /></div>
        <div><Input variant="Time" label="Generation (Jr, III)" /></div>

        <p className="col-span-4">Identification</p>
        <div><Input variant="Time" label="DOB" /></div>
        <div><Input variant="Time" label="SSN" /></div>
        <div><Input variant="Time" label="National ID" /></div>
        <div><Input variant="Time" label="Citizenship" /></div>

        <p className="col-span-4">Current Address</p>
        <div className="col-span-2"><Input variant="Time" label="Address Line 1" /></div>
        <div className="col-span-2"><Input variant="Time" label="Address Line 2" /></div>
        <div><Input variant="Time" label="Country" /></div>
        <div><Input variant="Time" label="City" /></div>
        <div><Input variant="Time" label="State" /></div>
        <div><Input variant="Time" label="Postal Code" /></div>

        <p className="col-span-4">Phone Numbers</p>
        <div><Input variant="Time" label="Business" /></div>
        <div><Input variant="Time" label="Home" /></div>
        <div><Input variant="Time" label="Mobile" /></div>
        <div><Input variant="Time" label="Work" /></div>
        <div><Input variant="Time" label="Fax" /></div>
        <div><Input variant="Time" label="Unknown" /></div>

        <p className="col-span-4">Gender</p>
        <Select size="md" label="Gender">
          <Option>Woman</Option>
          <Option>Male</Option>
          <Option>Other</Option>
        </Select>

        <p className="col-span-4">Passport</p>
        <div><Input variant="Time" label="MR Line 1" /></div>
        <div><Input variant="Time" label="MR Line 2" /></div>
        <div><Input variant="Time" label="ID Number" /></div>
        <div><Input variant="Time" label="Country" /></div>
        <div><Input variant="Time" label="Issue Date" /></div>
        <div><Input variant="Time" label="Expiration Date" /></div>
        <br className="col-span-2" />
      </div>
      <div className="py-5">
        <Button>Search</Button>
      </div>
        
    </main>
  );
}
