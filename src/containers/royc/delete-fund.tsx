import React, { useState } from "react";
import { trpc } from "utils/trpc";
import { Button, Select } from "@mantine/core";

function DeleteFund() {
  const utils = trpc.useContext();
  const res = trpc.useQuery(["dashboard.funds"]);

  const mutation = trpc.useMutation(["dashboard.delete-fund"], {
    onSuccess: () => {
      void utils.invalidateQueries(["dashboard.funds"]);
      void utils.invalidateQueries(["dashboard.ongoing"]);
      void utils.invalidateQueries(["dashboard.closed"]);
      void utils.invalidateQueries(["dashboard.upcoming"]);
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