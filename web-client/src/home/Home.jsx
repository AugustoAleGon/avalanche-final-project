import { useAccount, useWriteContract } from "wagmi";
import contract from '../../constants.json';
import { useEffect, useState } from "react";

const PINATA_GATEWAY = 'https://gateway.pinata.cloud/ipfs/'

export const Home = () => {
  const [selectedFile, setSelectedFile] = useState();
  const {address, isDisconnected} = useAccount();
  const {writeContract} = useWriteContract();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files);
  };

  const generateIPFS = async () => {
    try {
      const formData = new FormData();
      Array.from(selectedFile).forEach((file) => {
        formData.append("file", file);
      });
      const metadata = JSON.stringify({
        name: "File name",
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      );
      const resData = await res.json();
      return resData.IpfsHash;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const generateNFT = async () => {
    try {
      const ipfs = await generateIPFS();
      await writeContract({
        address: contract.address,
        abi: contract.abi,
        functionName: 'safeMint',
        args: [
          address,
          `${PINATA_GATEWAY}${ipfs}`
        ]
      })
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="flex w-full flex-col">
      <div>
        <p className="text-lg">
          Create your first NFT
        </p>
      </div>
      <div className="mt-10">
        <div className="flex flex-col">
          <div className="mt-2">
            <input
              type="file"
              accept="image/*"
              onChange={changeHandler}
            />
          </div>
          <div>
            <button disabled={!selectedFile} onClick={generateNFT} className="mt-4 bg-blue-500 disabled:bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate NFT</button>
          </div>
        </div>
      </div>
    </div>
    )
  };
