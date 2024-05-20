interface LinksProps {
  children: React.ReactNode;
}

export const Links = ({ children }: LinksProps) => {
  return (
    <>
      <li className=" text-zinc-400 text-sm cursor-pointer font-medium leading-[19px] underline uppercase">
        {children}
      </li>
    </>
  );
};
