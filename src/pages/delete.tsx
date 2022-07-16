import React, { useState } from "react";
import { Button, TextInput } from "@mantine/core";
import { trpc } from "utils/trpc";

export default function DeletePage() {
  const [value, setValue] = useState("");
  const mutation = trpc.useMutation(["dashboard.delete-fund"]);

  const handleClick = () => {
    mutation.mutate({
      fundId: value,
    });
  };

  return (
    <div>
      <h1>Delete Fund</h1>
      <TextInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Button onClick={handleClick}>
        Delete fund with id: {value}
      </Button>
    </div>
  )
}