"use client";

import type { PropsWithChildren } from "react";
import { HeroUIProvider as BaseHeroUIProvider } from "@heroui/react";

const AppHeroUIProvider = ({ children }: PropsWithChildren) => (
  <BaseHeroUIProvider>{children}</BaseHeroUIProvider>
);

export default AppHeroUIProvider;
