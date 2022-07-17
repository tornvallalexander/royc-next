import React, { useState } from "react";
import { trpc } from "utils/trpc";
import { Button, Select } from "@mantine/core";

function DeleteFund() {
  const utils = trpc.useContext();
  const res = trpc.useQuery(["fund.all"]);

  const mutation = trpc.useMutation(["fund.delete-by-id"], {
    onSuccess: () => {
      void utils.invalidateQueries(["fund.all"]);
      void utils.invalidateQueries(["fund.ongoing"]);
      void utils.invalidateQueries(["fund.closed"]);
      void utils.invalidateQueries(["fund.upcoming"]);
    }
  });

  const [value, setValue] = useState<string | null>("");

  const handleClick = () => {
    mutation.mutate({
      fundId: value ?? "",
    });
  };

  return (
    <div>
      <Select
        label="Select a fund to delete"
        placeholder="Select a fund"
        value={value}
        onChange={setValue}
        data={res?.data?.funds?.map(fund => fund.id) ?? []}
      />
      <Button onClick={handleClick} variant="filled">
        Delete fund with id: {value}
      </Button>
    </div>
  )
}

export { DeleteFund };