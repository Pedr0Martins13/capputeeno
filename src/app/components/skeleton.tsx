const shimmer = `before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent`;

export const SkeletonProductCard = () => {
  return (
    <div className="flex flex-col w-full sm:max-w-[256px] max-w-[176px] max-h-[378px] bg-white rounded overflow-hidden">
      <div className={` relative ${shimmer} w-full h-full bg-zinc-300`} />
      <div className=" flex-1 max-h-[78px] h-full px-3 py-2 flex flex-col justify-center">
        <div
          className={`relative ${shimmer} w-full h-[16px] bg-zinc-200 rounded-full`}
        />
        <hr className=" w-full my-2" />
        <div
          className={`relative ${shimmer} w-1/2 h-[10px] bg-zinc-200 rounded-full`}
        />
      </div>
    </div>
  );
};
