export default function toggle(ref) {
  const property = ref.current.getAttribute("aria-expanded");
  property === "false" ? open(ref) : close(ref);
}

function open(ref) {
  ref.current.classList.remove("translate-x-full");
  ref.current.setAttribute("aria-expanded", "true");
}

function close(ref) {
  ref.current.classList.add("translate-x-full");
  ref.current.setAttribute("aria-expanded", "false");
}
