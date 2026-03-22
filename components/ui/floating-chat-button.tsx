"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "./button";

export default function FloatingChatButton() {
  return (
    <Button
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-xl z-50 flex items-center justify-center"
      onClick={() => { /* Open chat logic */ }}
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
}