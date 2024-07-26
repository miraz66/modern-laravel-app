import { Head, Link } from "@inertiajs/react";
import NavLink from "./NavLink";

export default function Navbar({ auth }) {
  const url = window.location.href;

  const handleImageError = () => {
    document.getElementById("screenshot-container")?.classList.add("!hidden");
    document.getElementById("docs-card")?.classList.add("!row-span-1");
    document.getElementById("docs-card-content")?.classList.add("!flex-row");
    document.getElementById("background")?.classList.add("!hidden");
  };

  const NavName = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Users",
      url: "/users",
    },
    {
      name: "Settings",
      url: "/settings",
    },
    {
      name: "Log out",
      url: "/logout",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 text-black/50 dark:bg-gray-600 dark:text-white/50">
        <div className="relative flex flex-col">
          <div className="relative mx-auto w-full max-w-2xl px-6 lg:max-w-7xl">
            <header className="flex justify-between items-center gap-2 py-10">
              <div className="flex lg:justify-center lg:col-start-2 gap-3">
                {NavName.map((item) => {
                  return (
                    <NavLink
                      href={item.url}
                      key={item.name}
                      active={url.endsWith(item.url)}
                      className="text-lg text-white/80 transition hover:text-white gap-10 "
                    >
                      {item.name}
                    </NavLink>
                  );
                })}
              </div>

              <div className="text-lg text-gray-200">
                Welcome Back,{" "}
                <span className="uppercase">{auth.user?.name}</span>
              </div>

              <nav className="-mx-3 flex justify-between">
                {auth.user ? (
                  <Link
                    href={route("dashboard")}
                    className="px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      href={route("login")}
                      className="px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                      Log in
                    </Link>
                    <Link
                      href={route("register")}
                      className="px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                      Register
                    </Link>
                  </>
                )}
              </nav>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}
