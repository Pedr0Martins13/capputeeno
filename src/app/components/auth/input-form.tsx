interface InputFormProps extends React.ComponentProps<"input"> {
  name: string;
  message: string;
  placeholder: string;
  icon?: React.ElementType;
}

export const InputForm = ({
  name,
  message,
  placeholder,
  icon: Icon,
  ...props
}: InputFormProps) => {
  const style = Icon
    ? "peer w-full py-[9px] pl-10 text-sm rounded-md bg-zinc-300 shadow-sm focus:outline-zinc-900 placeholder:text-zinc-600"
    : "peer w-full py-[9px] px-3 text-sm rounded-md bg-zinc-300 shadow-sm focus:outline-zinc-900 placeholder:text-zinc-600";

  return (
    <div>
      <label className="sr-only" htmlFor={name}>
        {message}
      </label>
      <div className="relative w-full">
        <input
          name={name}
          className={style}
          {...props}
          placeholder={placeholder}
        />
        {Icon && (
          <Icon
            size={20}
            className="pointer-events-none text-zinc-400 absolute top-1/2 -translate-y-1/2 left-2 peer-focus:text-zinc-900"
          />
        )}
      </div>
    </div>
  );
};
