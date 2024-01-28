import { Button } from "@/components/UI";
import { formatEther } from "ethers";

type NftCardProps = {
  tokenURI: string;
  price: string;
  tokenId: string;
  owner: string;
  sold: boolean;
  buyer: string;
  meta: {
    name: string;
    description: string;
    file_url: string;
  };
};

const NftCard = (props: NftCardProps) => {
  const price = formatEther(props.price);

  return (
    <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap">
      <div className="overflow-hidden bg-white rounded shadow">
        <div className="aspect-w-4 aspect-h-3">
          <img
            className="object-cover w-full h-full"
            src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/2/artwork-2.png"
            alt=""
          />
        </div>
        <div className="p-8">
          <p className="text-lg font-bold text-gray-900">{props.meta.name}</p>
          <p className="mt-6 text-xs font-medium tracking-widest text-gray-500 uppercase">
            Reserved Price
          </p>
          <div className="flex items-end mt-1">
            <p className="text-lg font-bold text-gray-900">{price} ETH</p>
            <p className="ml-2 text-sm font-medium text-gray-500">($7,627)</p>
          </div>
          <div className="flex justify-center mt-8 w-full">
            <Button className="w-full">Buy Membership</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
