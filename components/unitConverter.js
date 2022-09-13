import { useState } from "react";
import Web3 from "web3";

export default function UnitConverter() {
  const [fromUnitValue, setFromUnitValue] = useState();
  const [convertFromUnit, setConvertFromUnit] = useState();
  const [convertToUnit, setConvertToUnit] = useState("wei");
  const [convertedValue, setConvertedValue] = useState();
  let fromUnitOptions = [
    {
      name: "Select Unit",
      value: "",
    },
    {
      name: "Ether",
      value: "ether",
    },
    {
      name: "Kwei",
      value: "kwei",
    },
    {
      name: "Babbage",
      value: "babbage",
    },
    {
      name: "Femtoether",
      value: "femtoether",
    },
    {
      name: "Mwei",
      value: "mwei",
    },
    {
      name: "Lovelace",
      value: "lovelace",
    },
    {
      name: "Picoether",
      value: "picoether",
    },
    {
      name: "Gwei",
      value: "gwei",
    },
    {
      name: "Shannon",
      value: "shannon",
    },
    {
      name: "Nanoether",
      value: "nanoether",
    },
    {
      name: "Szabo",
      value: "szabo",
    },
    {
      name: "Microether",
      value: "microether",
    },
    {
      name: "Finney",
      value: "finney",
    },
    {
      name: "Milliether",
      value: "milliether",
    },
    {
      name: "Kether",
      value: "kether",
    },
    {
      name: "Grand",
      value: "grand",
    },
    {
      name: "Mether",
      value: "mether",
    },
    {
      name: "Gether",
      value: "gether",
    },
    {
      name: "Tether",
      value: "tether",
    },
  ];
  let toUnitOptions = [
    {
      name: "Wei",
      value: "wei",
    },
  ];

  const web3 = new Web3();

  const handleConvertFromUnitChanged = (event) => {
    const fromUnit = event.target.value;
    setConvertFromUnit(fromUnit);
  };

  const handleConvertToUnitChanged = (event) => {
    const toUnit = event.target.value;
    setConvertToUnit(toUnit);
  };

  const convert = (event) => {
    event.preventDefault();
    if (convertFromUnit === undefined) {
      alert("Please select a unit to convert from!");
    } else if (convertToUnit === "wei") {
      const unitValue = web3.utils.toWei(fromUnitValue, convertFromUnit);
      setConvertedValue(unitValue);
    }
  };

  return (
    <div className="flex flex-col min-w-[100%] lg:min-w-[85%] xl:min-w-[70%] px-10 py-12 border border-gray-300 rounded-lg">
      <form className="flex flex-col" onSubmit={convert}>
        <div className="flex flex-row">
          <input
            className="w-3/4 h-10 px-2 border border-gray-300 rounded-lg"
            type="text"
            placeholder="Enter a value to convert..."
            onChange={(event) => setFromUnitValue(event.target.value)}
          ></input>
          <select
            className="min-w-[40%] sm:min-w-[25%] p-2 ml-2 font-semibold border border-gray-300 rounded-lg cursor-pointer"
            value={convertFromUnit}
            onChange={handleConvertFromUnitChanged}
          >
            {fromUnitOptions.map((item, index) => (
              <option value={item.value} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-row mt-8 items-center justify-center">
          <div>Convert to:</div>
          <select
            className="p-2 ml-2 font-semibold border border-gray-300 rounded-lg cursor-pointer"
            value={convertToUnit}
            onChange={handleConvertToUnitChanged}
          >
            {toUnitOptions.map((item, index) => (
              <option value={item.value} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <input
          className="w-full h-10 px-2 mt-8 bg-ebwhite border border-gray-300 rounded-lg cursor-pointer"
          type="text"
          value={convertedValue || ""}
          placeholder="Your converted output..."
          readOnly
        ></input>

        <input
          className="min-w-[30%] sm:min-w-[20%] md:min-w-[20%] lg:min-w-[15%] xl:min-w-[15%] mt-8 py-2 self-center font-bold bg-ebblack text-ebwhite border rounded-lg cursor-pointer"
          type="submit"
          value="Convert"
        ></input>
      </form>
    </div>
  );
}
