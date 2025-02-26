import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/Input2";
import { Label } from "../ui/label";

interface onClick {
  HandleClick: (Name: string) => void;
}
const DialogBoard: React.FC<onClick> = ({ HandleClick }) => {
  const [boardName, setBoardName] = useState<string>("");

  const ReturnHandleClick = () => {
    HandleClick(boardName);
  };

  return (
    <div>
      <DialogContent className="sm:max-w-[650px] sm:max-h-auto">
        <DialogHeader>
          <DialogTitle>Create a New Board</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Board Name
            </Label>
            <Input
              id="name"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant={"outline"} onClick={ReturnHandleClick}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </div>
  );
};

export default DialogBoard;
