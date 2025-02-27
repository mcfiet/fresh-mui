// islands/MyThemedComponent.tsx
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utils/mui-config.ts";
import { JSX } from "preact";

interface MyThemedComponentProps {
  children: JSX.Element;
}

export default function MyThemedComponent(
  { children }: MyThemedComponentProps,
) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
