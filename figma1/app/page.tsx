import Image from "next/image";
import GymCard from "./components/card";

export default function Home() {
  return (
    <div className="flex-col justify-center">
      <GymCard />
      <GymCard />
      <GymCard />
      <GymCard />
    </div>
  );
}
