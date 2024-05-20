interface CartIconProps {
  size?: string;
  bg?: string;
}

export const CartIcon = ({ size = "24", bg = "#737380" }: CartIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M4 7V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7"
        stroke={bg}
        //stroke-width="1.5"
        //stroke-linecap="round"
        //stroke-linejoin="round"
      />
      <path
        //fill-rule="evenodd"
        //clip-rule="evenodd"
        d="M20 7H4C3.44772 7 3 7.44772 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 7.44772 20.5523 7 20 7Z"
        stroke={bg}
        // stroke-width="1.5"
        //stroke-linecap="round"
        //stroke-linejoin="round"
      />
      <path
        d="M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11"
        stroke={bg}
        //stroke-width="1.5"
        //stroke-linecap="round"
        //stroke-linejoin="round"
      />
    </svg>
  );
};
