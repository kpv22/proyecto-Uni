export default function EnrollClient() {
  return (
    <main className="w-full grid grid-cols-2 grid-rows-4 gap-6 p-6 ">
      <div className="col-span-2 h-96 cardshadow row-span-1 flex bg-white justify-center items-center">DNI</div>
      <div className="col-span-2 h-96 cardshadow row-span-1 flex bg-white justify-center items-center">Identity</div>
      <div className="col-span-1 h-96 cardshadow row-span-1 flex bg-white justify-center items-center">Personal Info</div>
      <div className="col-span-1 h-96 cardshadow row-span-1 flex bg-white justify-center items-center">Address</div>
      <div className="col-span-2 h-96 cardshadow row-span-1 flex bg-white justify-center items-center">Buy</div>
    </main>
  );
}
