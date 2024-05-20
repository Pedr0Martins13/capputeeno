import { motion } from "framer-motion";

interface SelectContainerProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const SelectContainer = ({
  children,
  onClick,
}: SelectContainerProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
      className=" absolute z-50 flex flex-col items-center gap-1 top-0 
      right-0 min-w-[176px] min-h-[132px] bg-white py-3 px-4 rounded">
      {children}
    </motion.section>
  );
};
