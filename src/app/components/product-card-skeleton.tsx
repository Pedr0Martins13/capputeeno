import { Skeleton } from "./skeleton";

export const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col sm:max-w-[256px] max-w-[176px] max-h-[378px] bg-gray-200 rounded overflow-hidden">
      <div className="w-full sm:min-h-[300px] min-h-[176px] h-full">
        <Skeleton className="w-full h-full bg-gray-200" />
      </div>
      <div>
        <Skeleton className="w-full h-[16px] bg-gray-200" />
        <Skeleton className="w-1/3 h-[10px] bg-gray-200" />
      </div>
    </div>
  );
};
