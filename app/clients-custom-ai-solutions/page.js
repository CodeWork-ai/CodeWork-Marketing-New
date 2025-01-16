"use client"
import ClientHeader from "../components/clients/clientHeader";
import ClientCard from "../components/clients/clients";

export default function Page() {
  return (
    <div className="text-white pb-5">
      <ClientHeader/>
      <ClientCard/>
    </div>
  );
}