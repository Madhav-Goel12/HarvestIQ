"use client";

import { useState } from "react";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../../components/ui";

export default function ShowcasePage() {
  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <main className="p-10 space-y-8">
      <h1 className="text-4xl font-bold">
        HarvestIQ Component Showcase
      </h1>

      <Button
        label="Open Modal"
        onClick={() => setOpen(true)}
      />

      <Input placeholder="Enter your name" />

      <Loader />

      <Button
        label="Show Toast"
        onClick={() => {
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        }}
      />

      <Modal
        title="HarvestIQ Modal"
        isOpen={open}
        onClose={() => setOpen(false)}
      />

      {showToast && (
        <Toast message="Toast component working!" />
      )}
    </main>
  );
}