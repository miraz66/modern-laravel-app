import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

export default function TableHeading({
  name,
  sortable = true,
  sort_field = null,
  sort_direction = null,
  sortChanged = () => {},
  children,
}) {
  return (
    <th onClick={(e) => sortChanged(name)}>
      <div
        className={clsx(
          "py-3 flex items-center justify-between gap-1",
          sortable && "cursor-pointer"
        )}
      >
        {children}
        {sortable && (
          <div>
            <ChevronUpIcon
              className={clsx(
                "w-4 ",
                sort_field === name && sort_direction === "asc"
                  ? "text-white"
                  : ""
              )}
            />
            <ChevronDownIcon
              className={
                "w-4 -mt-1 " +
                (sort_field === name && sort_direction === "desc"
                  ? "text-white"
                  : "")
              }
            />
          </div>
        )}
      </div>
    </th>
  );
}
