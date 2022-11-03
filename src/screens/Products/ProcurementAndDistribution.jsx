import React, { useEffect, useState } from "react";
import { addRequest } from "../../firebase";

const ProcurementAndDistribution = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [sendingRequest, setSendingRequest] = useState(false);
  const [type, setType] = useState("Hardware");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [show, setShow] = useState(false);
  const ToastShow = ({ visible, close, text }) => {
    useEffect(() => {
      setTimeout(() => {
        close();
      }, 2000);
    }, [visible]);
    if (!visible) return null;

    return (
      <div class="bg-green-500 z-20 fixed bottom-0 end-0 p-3 w-1/2 h-14 flex items-center ">
        <small onClick={close} className="cursor-pointer">
          Close
        </small>
        <div className="w-full">{text}</div>
      </div>
    );
  };
  return (
    <div className="bg-gray-50 text-center app-common-bg">
      <div className=" xl:max-w-[73%] mx-auto pb-96 pt-10">
        <h1 className="text-5xl font-bold lg:w-2/3 mx-auto  my-12">
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
            className="container lg:w-1/2 h-[500px] mx-auto my-5"
            onSubmit={async (e) => {
              e.preventDefault();
              setSendingRequest(true);
              await addRequest({ type, text, email, phone });

              setSendingRequest(false);
              setShowForm(false);
              setShow(true);
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-left">Select Type</p>
            <select
              className="w-full h-14 bg-gray-100 text-lg p-3 my-3 rounded-lg"
              required
              onChange={(e) => setType(e.target.value)}
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
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="E.g. I need a HP Pro-Book with 256GB SSD and 16GB RAM."
              className="w-full  bg-gray-100 text-lg p-3 my-3 rounded-lg"
              rows={10}
            />
            <p className="text-left">Your Email.</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="johndoe@email.com"
              className="w-full  bg-gray-100 text-lg p-3 my-3 rounded-lg"
            />
            <p className="text-left">Your Phone Number.</p>
            <input
              onChange={(e) => setPhone(e.target.value)}
              required
              type="text"
              placeholder="+234 000 000 000"
              className="w-full  bg-gray-100 text-lg p-3 my-3 rounded-lg"
            />
            <div className="flex justify-around">
              <button
                className="py-3 text-white mt-3 bg-red-600 px-10 w-full"
                onClick={() => {
                  setShowForm(false);
                }}
                type="button"
              >
                Cancel
              </button>
              <button
                className="p-3 text-white mt-3 bg-[#031759] w-full"
                onClick={() => {}}
                type="submit"
              >
                {sendingRequest ? "Sending Request..." : "Send Request"}
              </button>
            </div>
          </form>
        )}
      </div>
      <ToastShow
        visible={show}
        close={() => setShow(false)}
        text="Request Submitted"
      />
    </div>
  );
};

export default ProcurementAndDistribution;
