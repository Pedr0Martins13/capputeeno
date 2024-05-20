export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" relative max-w-[1920px] mx-auto xl:px-32 md:px-2 px-4">
        {children}
      </div>
    </>
  );
};
