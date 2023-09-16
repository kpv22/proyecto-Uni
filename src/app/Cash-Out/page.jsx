// Components
import Dni from "@/components/Form/Dni";
import Identity from "@/components/Form/Identity";
import PersonalInfo from "@/components/Form/PersonalInfo";
import Address from "@/components/Form/Address";
import CashOutTransactions from "@/components/Form/CashOutTransactions";
import AccordionCustom from "@/components/MaterialTailwind/Accordion/Accordion";

export default function CashOut() {
  return (
    <main className="w-full grid grid-cols-2 gap-6 p-6">
      <AccordionCustom title="Card ID" Component={Dni} col />
      <AccordionCustom title="Identity" Component={Identity} col />
      <AccordionCustom title="Personal Information" Component={PersonalInfo} />
      <AccordionCustom title="Address" Component={Address} />
      <AccordionCustom title="Cash Out Transactions" Component={CashOutTransactions} col />
    </main>
  );
}
