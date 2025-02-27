import { Button } from "@mui/material";

export default function ButtonUsage() {
  return (
    <Button onClick={() => console.log("Button clicked")} variant="contained">
      Hello world
    </Button>
  );
}
