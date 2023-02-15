/**
 * Context creator for Navbar Goto function.
 * @author Lucas Bubner, 2023
 */
import { createContext } from "react";
export const GotoContext = createContext<(path: string) => void>(() => {});
