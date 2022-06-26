import React, { useEffect, useState } from "react";

const ProcurementAndDistribution = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const [showForm, setShowForm] = useState(false);
  const [sendingRequest, setSendingRequest] = useState(false);

  return (
    <div className=" max-w-[1300px] mx-auto pb-96">
      <h1 className="text-6xl font-bold lg:w-2/3 mx-auto  my-12">
        Procurement And Distribution
      </h1>
      <p className="text-3xl mt-10 ">
        We handle Procurment of Electronic Hardwares and consumables
      </p>
      {!showForm && (
        <button
          className="p-3 text-white mt-3 bg-[#031759]"
          onClick={() => {
            setShowForm(true);
          }}
        >
          Send Us a Request
        </button>
      )}
      {showForm && (
        <form
          className="w-1/2 h-[500px] mx-auto my-5"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Submit");
            setSendingRequest(true);
            setTimeout(() => {
              setSendingRequest(false);
              setShowForm(false);
            }, 3000);
          }}
        >
          <p className="text-left">Select Type</p>
          <select
            className="w-full h-14 bg-gray-100 text-lg p-3 my-3 rounded-lg"
            required
          >
            <option value="Hardware">
              Hardware (Laptop, Printers, Accesories e.t.c.)
            </option>
            <option value="Licenses">Licenses</option>
            <option value="Consumables">Consumables</option>
          </select>
          <p className="text-left">Enter details of your request.</p>
          <textarea
            required
            type="text"
            placeholder="E.g. I need a HP Pro-Book with 256GB SSD and 16GB RAM."
            className="w-full  bg-gray-100 text-lg p-3 my-3 rounded-lg"
            rows={10}
          />
          <div className="flex justify-around">
            <button
              className="py-3 text-white mt-3 bg-red-600 px-10"
              onClick={() => {
                setShowForm(false);
              }}
              type="button"
            >
              Cancel
            </button>
            <button
              className="p-3 text-white mt-3 bg-[#031759]"
              onClick={() => {}}
              type="submit"
            >
              {sendingRequest ? "Sending Request..." : "Send Request"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProcurementAndDistribution;
