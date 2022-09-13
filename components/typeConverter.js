import { useState } from "react";
import Web3 from "web3";

export default function TypeConverter() {
  const [fromTypeValue, setFromTypeValue] = useState();
  const [convertToType, setConvertToType] = useState();
  const [convertedValue, setConvertedValue] = useState();
  const [applyPadding, setApplyPadding] = useState(false);
  let typeOptions = [
    {
      name: "Select type",
      value: "",
    },
    {
      name: "String",
      value: "string",
    },
    {
      name: "Bytes32",
      value: "bytes32",
    },
    {
      name: "Number",
      value: "number",
    },
    {
      name: "ChecksumAddress",
      value: "checksum",
    },
  ];

  const web3 = new Web3();

  const handleConvertToTypeChanged = (event) => {
    const type = event.target.value;
    setConvertToType(type);
  };

  const convert = (event) => {
    event.preventDefault();
    if (convertToType === undefined) {
      alert("Please select a type to convert!");
    } else if (convertToType === "string") {
      let stringValue;
      try {
        stringValue = web3.utils.toUtf8(fromTypeValue);
        setConvertedValue(stringValue);
      } catch (error) {
        alert(error.message);
      }
    } else if (convertToType === "bytes32") {
      const bytes32Value = web3.utils.toHex(fromTypeValue);
      const convertedBytes32Value =
        applyPadding === true
          ? web3.utils.padRight(bytes32Value, 66)
          : bytes32Value;
      setConvertedValue(convertedBytes32Value);
    } else if (convertToType === "number") {
      const numberValue = web3.utils.toNumber(fromTypeValue);
      setConvertedValue(numberValue);
    } else if (convertToType === "checksum") {
      try {
        const checksumValue = web3.utils.toChecksumAddress(fromTypeValue);
        setConvertedValue(checksumValue);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="flex flex-col min-w-[100%] lg:min-w-[85%] xl:min-w-[70%] px-10 py-12 border border-gray-300 rounded-lg">
      <form className="flex flex-col items-center" onSubmit={convert}>
        <input
          className="w-full h-10 px-2 border border-gray-300 hover:border-gray-600 rounded-lg"
          type="text"
          placeholder="Enter value to convert..."
          onChange={(event) => setFromTypeValue(event.target.value)}
        ></input>

        <div className="flex flex-row mt-8 items-center">
          <div>Convert to:</div>
          <select
            className="p-2 ml-2 font-semibold border border-gray-300 hover:border-gray-600 rounded-lg cursor-pointer"
            value={convertToType}
            onChange={handleConvertToTypeChanged}
          >
            {typeOptions.map((item, index) => (
              <option value={item.value} key={index}>
                {item.name}
              </option>
            ))}
          </select>
          {convertToType === "bytes32" && (
            <div>
              <input
                className="ml-5 mr-1"
                type="checkbox"
                onChange={() => setApplyPadding(!applyPadding)}
              />
              <label>Apply Right Padding</label>
            </div>
          )}
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
