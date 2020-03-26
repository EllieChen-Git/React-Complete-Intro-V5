import { createContext } from "react";

const ThemeContext = createContext(["blue", () => {}]);
// We put a hook [state, stateUpdater func] in the context

export default ThemeContext;
