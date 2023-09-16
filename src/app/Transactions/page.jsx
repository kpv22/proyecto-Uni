

"use client";

import { TableTransaction } from "@/components/Table/tableTransaction";

export default function Transactions() {
  return (
    <main className="w-full grid grid-cols-2 gap-6 p-6 ">
      <div className="col-span-2 cardshadow flex bg-white justify-center items-center">
        <TableTransaction />
      </div>
    </main>
  );
}