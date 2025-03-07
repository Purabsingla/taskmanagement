import React, { useState } from "react";
import { motion } from "framer-motion";
import EmojiPicker from "emoji-picker-react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/Input2";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Smile } from "lucide-react";

interface DialogBoardProps {
  HandleClick: (name: string, emoji: string) => void;
}

const DialogBoard: React.FC<DialogBoardProps> = ({ HandleClick }) => {
  const [boardName, setBoardName] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("📝");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (boardName.trim()) {
      HandleClick(boardName, selectedEmoji);
    }
  };

  return (
    <DialogContent className="sm:max-w-[500px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Create a New Board
          </DialogTitle>
          <DialogDescription className="text-gray-500 mt-2">
            Customize your board with a name and an emoji that represents its
            purpose.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <Popover
                open={isEmojiPickerOpen}
                onOpenChange={setIsEmojiPickerOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-2xl h-14 w-14 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300"
                  >
                    {selectedEmoji || <Smile className="h-6 w-6" />}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 border-none shadow-xl">
                  <EmojiPicker
                    onEmojiClick={(emojiData) => {
                      setSelectedEmoji(emojiData.emoji);
                      setIsEmojiPickerOpen(false);
                    }}
                    width="100%"
                    height={400}
                  />
                </PopoverContent>
              </Popover>

              <div className="flex-1 space-y-2">
                <Label
                  htmlFor="boardName"
                  className="text-sm font-medium text-gray-700"
                >
                  Board Name
                </Label>
                <Input
                  id="boardName"
                  value={boardName}
                  onChange={(e) => setBoardName(e.target.value)}
                  placeholder="Enter board name..."
                  className="h-14 px-4 rounded-xl border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <DialogFooter className="flex justify-end gap-3 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => HandleClick("", "")}
              className="h-11 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="h-11 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition-opacity duration-300"
              disabled={!boardName.trim()}
            >
              Create Board
            </Button>
          </DialogFooter>
        </form>
      </motion.div>
    </DialogContent>
  );
};

export default DialogBoard;
