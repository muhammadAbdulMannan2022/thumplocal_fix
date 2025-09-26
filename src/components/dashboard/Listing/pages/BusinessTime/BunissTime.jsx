import React from "react";
import { BusinessForm } from "./BusinessTimeForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Business Information Form
        </h1>
        <BusinessForm />
      </div>
    </div>
  );
}
