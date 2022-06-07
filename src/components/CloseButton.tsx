import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
  <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:textzinc-100" title="Fechar formulario de feedback">
      <X className="m-4 h-4" weight="bold"/>
  </Popover.Button>
  );
}
