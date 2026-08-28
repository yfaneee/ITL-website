import {
  Award,
  Building2,
  Clock,
  Container,
  FileCheck,
  Globe,
  Handshake,
  Leaf,
  MapPin,
  Network,
  Package,
  Plane,
  Receipt,
  Send,
  ShieldCheck,
  Ship,
  Shuffle,
  Truck,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Icons an editor can choose from in the Studio. These sections use vector
 * icons rather than uploaded images, so the CMS stores a name from this list
 * and the name is resolved to a component here.
 *
 * Adding an icon: import it above and add it to the map. It appears in the
 * Studio dropdown automatically.
 */
export const iconRegistry = {
  award: Award,
  building: Building2,
  clock: Clock,
  container: Container,
  documents: FileCheck,
  globe: Globe,
  handshake: Handshake,
  leaf: Leaf,
  location: MapPin,
  network: Network,
  package: Package,
  plane: Plane,
  receipt: Receipt,
  send: Send,
  shield: ShieldCheck,
  ship: Ship,
  shuffle: Shuffle,
  truck: Truck,
  userCheck: UserCheck,
  users: Users,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconRegistry;

/** Title-cased labels for the Studio dropdown. */
export const iconOptions = (Object.keys(iconRegistry) as IconName[]).map(
  (value) => ({
    value,
    title: value
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (c) => c.toUpperCase()),
  })
);

/** Resolve a stored name, falling back to a neutral icon for unknown values. */
export function resolveIcon(name: string | undefined): LucideIcon {
  return iconRegistry[name as IconName] ?? Package;
}
