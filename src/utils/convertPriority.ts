import { PriorityType } from "@/models/PriorityType";

export function convertPriority(priority: PriorityType) {
  if (priority === "news") {
    return {
      sortField: "created_at",
      sortOrder: "ASC",
    };
  }
  if (priority === "biggest_price") {
    return {
      sortField: "price_in_cents",
      sortOrder: "DLC",
    };
  }
  if (priority === "lowest_price") {
    return {
      sortField: "price_in_cents",
      sortOrder: "ASC",
    };
  }

  return {
    sortField: "sales",
    sortOrder: "DLC",
  };
}
