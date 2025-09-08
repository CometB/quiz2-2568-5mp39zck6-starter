import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd?: (name: string, amount: number | string, category: string) => void;
};

export default function AddExpenseModal({
  opened,
  onClose
}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {};

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    <Modal opened={opened} onClose={onClose} title="Add Expense">
      <Stack>
        {name !== "" ? (
          <TextInput
            label="Expense Name"
            description="Expense Name"
            placeholder="E.g.,Coca-Cola"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
        ) : (
          <TextInput
            label="Expense Name"
            description="Expense Name"
            placeholder="E.g.,Coca-Cola"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            error="Expense Name is required"
          />
        )}

        {amount !== 0 ? (
          <NumberInput
            label="Amount"
            description="Amount"
            defaultValue={0}
            value={amount}
            onChange={setAmount}
          />
        ) : (
          <NumberInput
            label="Amount"
            description="Amount"
            defaultValue={0}
            value={amount}
            onChange={setAmount}
            error="Amount is required"
          />
        )}

        {category !== null ? (
          <Select
            label="Category"
            description="Category"
            placeholder="Select Category"
            data={["Food", "Transport", "Entertainment"]}
            value={category}
            onChange={setCategory}
          />
        ) : (
          <Select
            label="Category"
            description="Category"
            placeholder="Select Category"
            data={["Food", "Transport", "Entertainment"]}
            value={category}
            onChange={setCategory}
            error="Category is required"
          />
        )}
        <Button onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Modal>
  );
}
