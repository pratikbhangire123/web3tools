import Link from "next/link";
import { useContext } from "react";
import { ToolContext } from "../states/toolSelected";

export default function Navbar() {
  const [toolSelected, setToolSelected] = useContext(ToolContext);
  let toolOptions = [
    {
      name: "Type Converter",
      value: "type",
    },
    {
      name: "Unit Converter",
      value: "unit",
    },
  ];

  const handleToolChange = (event) => {
    const selectedTool = event.target.value;

    if (selectedTool == "type") {
      setToolSelected(selectedTool);
    } else if (selectedTool == "unit") {
      setToolSelected(selectedTool);
    }
  };

  return (
    <div className="flex items-center justify-between w-full m-0 px-8 py-4 bg-ebblack text-ebwhite border-b border-gray-300">
      <Link href="https://empathybots.com/">
        <div className="flex font-semibold text-xl cursor-pointer">
          Web3<div className="font-extralight">Tools</div>
        </div>
      </Link>

      <div className="flex items-center">
        <div>Tool: &nbsp;</div>
        <select
          className="px-1 py-2 md:px-2 lg:px-2 xl:px-2 font-semibold md:font-bold lg:font-bold xl:font-bold bg-ebwhite text-ebblack border border-gray-300 rounded-lg cursor-pointer"
          value={toolSelected}
          onChange={handleToolChange}
        >
          {toolOptions.map((item, index) => (
            <option value={item.value} key={index}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
