import { BsTrash3 } from "react-icons/bs";

interface TrashProps {
  onClick: () => void;
}

export const Trash = ({ onClick }: TrashProps) => {
  return (
    <>
      <button
        aria-label="Botão para remover item da lixeira"
        onClick={onClick}
        className=" bg-transparent border-none  sm:p-4 p-2 outline-none text-zinc-800 hover:text-red-600">
        <BsTrash3 />
      </button>
    </>
  );
};
