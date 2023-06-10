"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  return (
    <nav className="flex-between w-full pt-10 mb-4">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          width="0"
          height="0"
          src="/assets/images/logo.svg"
          alt="logo"
          className="w-16 h-auto object-contain"
        />
      </Link>
    </nav>
  );
};

export default Nav;
