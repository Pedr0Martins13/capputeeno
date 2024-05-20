interface BackDropProps {
  onClick: () => void;
}

export const BackDrop = ({ onClick }: BackDropProps) => {
  return (
    <>
      <div
        onClick={onClick}
        className=" w-screen h-screen fixed top-0 left-0 bg-transparent"
      />
    </>
  );
};
