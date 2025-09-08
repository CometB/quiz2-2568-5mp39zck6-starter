import { Button, Stack, Title, Divider, Container } from "@mantine/core";
import AddExpenseModal from "../components/Modal";
import { useDisclosure } from "@mantine/hooks";

// type Expense = {
//   id: string;
//   name: string;
//   amount: number | string;
//   category: string;
// };

export default function ExpenseTracker() {
  const [mopened, { close, open }] = useDisclosure(false);
  // const [expenses, setExpenses] = useState<Expense[]>([]);
  const categories = ["Food", "Transport", "Entertainment"];

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Expense Tracker
      </Title>
      <Button onClick={open}>Add Expense Item</Button>
      {/* Type additional AddExpenseModal here. */}
      <AddExpenseModal opened={mopened} onClose={close}></AddExpenseModal>

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {0} Baht</Title>
      <Stack my="sm">{categories[0]}: {0} Baht</Stack>
      <Stack my="sm">{categories[1]}: {0} Baht</Stack>
      <Stack my="sm">{categories[2]}: {0} Baht</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack></Stack>
    </Container>
  );
}
