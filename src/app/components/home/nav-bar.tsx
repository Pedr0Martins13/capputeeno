import { FilterType } from "@/models/FilterTypes";
import { Container } from "../container";
import { FilterButton } from "../filter-button";
import { SelectFilter } from "../select-priority-filter/select-filter";

const FILTER_OPTIONS: { label: string; type: FilterType }[] = [
  { label: "Todos os produtos", type: "all" },
  { label: "Camisetas", type: "t-shirts" },
  { label: " Canecas", type: "mugs" },
];
export const Navbar = () => {
  return (
    <>
      <nav className=" sticky w-full py-5 z-20 top-0 left-0 bg-gray-100 ">
        <Container>
          <div className=" w-full flex justify-between items-center">
            <div className=" flex justify-between items-center gap-2">
              {FILTER_OPTIONS.map((option, i) => (
                <FilterButton key={i + option.label} type={option.type}>
                  {option.label}
                </FilterButton>
              ))}
            </div>
            <div className=" sm:flex justify-center hidden ">
              <SelectFilter />
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};
