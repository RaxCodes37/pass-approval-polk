export default function PassForm() {
  return (
    <div
      className="w-fit h-fit sm:w-80 mt-30 border-2 rounded-md flex flex-col items-center px-5 py-3 pb-5"
      id="pass-form"
    >
      <h1 className="text-xl sm:text-2xl font-bold">Request a Pass</h1>
      <form action="" className="mt-2 flex flex-col items-center gap-2">
        <input type="text" placeholder="Current Class" required />
        <input type="text" placeholder="Reason" required />
        <select
          className="py-1 px-2 bg-[#2b397b] border-2 border-[#4556a7] rounded-md text-[1.2rem]"
          required
        >
          <option value="">Select Destination</option>
          <option value="Office">Office</option>
          <option value="Clinic">Clinic</option>
          <option value="Bathroom">Bathroom</option>
          <option value="water Fountain">Water Fountain</option>
        </select>
        <button>Submit Request</button>
      </form>
    </div>
  );
}
