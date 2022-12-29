import type { Member } from "revolt.js";
import { writable } from "svelte/store";

export interface ContextMenuStateOption {
  name: string;
  clicked: () => any;
  icon?: any;
}
export interface BaseContextMenuState {
  pos: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  time?: number;
  target?: HTMLElement | EventTarget | null;
}
export type ContextMenuState =
  | (BaseContextMenuState & {
      type: "options";
      options: ContextMenuStateOption[];
    })
  | (BaseContextMenuState & {
      type: "member";
      member: Member;
    });

export const CMState = writable<ContextMenuState | null>(null);

window.addEventListener("keydown", (e) => {
  if (e.key == "Escape") CMState.set(null);
});
