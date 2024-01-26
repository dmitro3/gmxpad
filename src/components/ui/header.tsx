import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  Image,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Web3Button } from "@web3modal/react";
import useWindowDimensions from "@/scripts/useWindowDimensions";

export default function Header() {
  const { windowWidth } = useWindowDimensions();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Launchpad",
      link: "/",
    },
    {
      name: "Stake",
      link: "/",
    },
    {
      name: "Games",
      link: "/games",
    },
    {
      name: "X Hub",
      link: "/",
    },
  ];
  const [lab, setLab] = useState<string>("Connect Wallet");
  useEffect(() => {
    windowWidth > 767 ? setLab("Connect Wallet") : setLab("Connect");
  }, [windowWidth]);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      position="sticky"
      className="bg-dark py-4 sm:px-1 md:px-1 lg:px-[8%] z-[9999] w-screen">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:flex md:flex lg:hidden text-white"
        />
        <NavbarBrand>
          <Link
            size="lg"
            href="/"
            className="bg-transparent sm:h-[50px] sm:w-[50px] md:h-[70px] md:w-[290px] px-0">
            <Image
              radius="none"
              width={50}
              className="sm:flex md:hidden"
              src="/logos/gmx-logo.svg"
            />
            <Image
              radius="none"
              width={250}
              className="sm:hidden md:flex"
              src="/logos/game-x-pad.svg"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="sm:hidden md:hidden lg:flex gap-4 "
        justify="center">
        <NavbarItem>
          <Button
            as={Link}
            radius="none"
            className="bg-transparent text-white font-normal  text-lg duration-300"
            href="#">
            Launchpads
          </Button>
        </NavbarItem>
        <NavbarItem isActive>
          <Button
            as={Link}
            href="#"
            radius="none"
            className="bg-transparent text-white font-normal  text-lg duration-300"
            aria-current="page">
            Stake
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            radius="none"
            className="bg-transparent text-white font-normal  text-lg duration-300"
            href="/games">
            Games
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            radius="none"
            className="bg-transparent text-white font-normal  text-lg duration-300"
            href="#">
            X Hub
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Web3Button label={lab} />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="w-full flex gap-8 py-12 z-[999] bg-dark">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="flex" key={`${item}-${index}`}>
            <Link className="w-full text-white py-2" href={item.link} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
