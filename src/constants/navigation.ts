/**
 * Shared navigation chrome for the FIJI marketing site.
 */

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "About FIJI", href: "/about", sectionId: "about" },
  { label: "Programs", href: "/programs", sectionId: "programs" },
  { label: "Gallery", href: "/gallery", sectionId: "gallery" },
] as const;

export const BUTTON_ITEMS = [
  {
    label: "Join Training",
    href: "/#contact",
    style:
      "rounded-full bg-[#C62828] px-4 py-2 text-sm font-semibold text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#A62020] active:scale-[0.98]",
  },
  {
    label: "Contact Us",
    href: "/#contact",
    style:
      "rounded-full border border-[#F1C40F] px-4 py-2 text-sm font-semibold text-[#F1C40F] transition duration-200 ease-out hover:bg-[#F1C40F] hover:text-[#111111] active:scale-[0.98]",
  },
] as const;
