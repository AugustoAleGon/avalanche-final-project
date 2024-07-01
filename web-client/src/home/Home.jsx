import { useReadContract } from "wagmi";
import contract from '../../constants.json';
import { useEffect, useState } from "react";

export const Home = () => {
  const [message, setMessage] = useState("");
  const result = useReadContract({
    abi: contract.abi,
    address: contract.address,
    functionName: 'getMessage',
  })

  useEffect(() => {
    if(result.data) {
      setMessage(result.data);
    }
  }, [result]);

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">NFT Builder</span>
        </h2>
        <w3m-button />
      </div>
      <div className="mt-10">
        <div className="flex flex-col">
          <label>Image Url:</label>
          <div className="mt-2">
            <input type="text" className="text-gray-700 w-1/2 bg-gray-50" />
          </div>
          <div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate NFT</button>
          </div>
        </div>
      </div>
    </div>
    )
  };
