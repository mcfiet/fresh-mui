# Fresh MUI

A Deno Fresh project with Material UI integration.

![Fresh + MUI](https://camo.githubusercontent.com/e75e4ce02448da3d2fad73976384697fd41f3c6f4a14ff96bf1267cdbfea3976/68747470733a2f2f66726573682e64656e6f2e6465762f6c6f676f2e737667)

## 🚀 Features

- [Deno Fresh](https://fresh.deno.dev/) - The next-gen web framework
- [Material UI](https://mui.com/) - A comprehensive suite of UI tools
- Server-side rendering with hydration
- Client-side JavaScript only when necessary
- Zero configuration needed

## 📋 Prerequisites

- [Deno](https://deno.land/) version 1.31.0 or higher

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/mcfiet/fresh-mui.git
cd fresh-mui

# Start the development server
deno task start
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## 🏗️ Project Structure

```
fresh-mui/
├── components/      # Reusable components
├── islands/         # Interactive components that hydrate on the client
├── routes/          # File-system based routing
├── static/          # Static files like images, CSS, etc.
├── utils/           # Utility functions and MUI configuration
├── dev.ts           # Development server entry point
├── main.ts          # Production server entry point
├── fresh.config.ts  # Fresh configuration
├── deno.json        # Deno configuration
└── README.md        # This file
```

## 🧩 Using MUI Components

⚠️ **Important:** MUI components must be used exclusively in islands/ directory
components. They cannot be used directly in routes/ files due to client-side
dependencies.

```tsx
// In your island component file (islands/MyButton.tsx)
import { Button, Typography } from "@mui/material";

export default function MyButton() {
  return (
    <div>
      <Typography variant="h1">Hello, Fresh MUI!</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert("Button clicked!")}
      >
        Click Me
      </Button>
    </div>
  );
}
```

Then use the island in your route:

```tsx
// In your route file (routes/index.tsx)
import { Head } from "$fresh/runtime.ts";
import MyButton from "../islands/MyButton.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh MUI</title>
      </Head>
      <div>
        <h1>Welcome to Fresh MUI</h1>
        <MyButton />
      </div>
    </>
  );
}
```

## 📝 Configuration

### MUI Theme

The MUI theme is configured in `utils/mui-config.ts`. You can customize the
theme by modifying this file:

```tsx
// utils/mui-config.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
  },
  // Add more customizations here
});
```

### ThemeProvider

Make sure to wrap your MUI components with a ThemeProvider in your islands:

```tsx
// islands/MyThemedComponent.tsx
import { ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { theme } from "../utils/mui-config.ts";

export default function MyThemedComponent() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Themed Button
      </Button>
    </ThemeProvider>
  );
}
```

## 🔄 Deployment

To deploy your Fresh MUI application:

```bash
# Build for production
deno task build

# Start the production server
deno task serve
```

## 📚 Learn More

- [Deno Fresh Documentation](https://fresh.deno.dev/docs/introduction)
- [Material UI Documentation](https://mui.com/material-ui/getting-started/overview/)
- [Deno Documentation](https://deno.land/manual)
- [Fresh Islands Architecture](https://fresh.deno.dev/docs/concepts/islands)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for
details.

## 🙏 Acknowledgments

- [Deno](https://deno.land/) for the runtime
- [Fresh](https://fresh.deno.dev/) for the framework
- [Material UI](https://mui.com/) for the UI components
