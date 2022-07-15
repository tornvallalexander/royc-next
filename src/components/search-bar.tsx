import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { TextInput } from "@mantine/core";

function SearchBar() {
  return (
    <div className="ml-3">
      <TextInput
        classNames={{
          input: "bg-gray-100 rounded-lg",
        }}
        placeholder="Search anything"
        rightSection={<SearchIcon className="w-4 text-gray-400" />}
      />
    </div>
  )
}

export { SearchBar };