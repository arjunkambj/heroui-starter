"use client";

import { Logo } from "@/components/Logo";
import { Button } from "@heroui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className=" border-b border-default-200  py-3.5">
      <div className="flex items-center container mx-auto justify-between">
        <Logo />

        <Button as={Link} href="/overview" color="primary" variant="solid">
          Get Started
        </Button>
      </div>
    </div>
  );
};
