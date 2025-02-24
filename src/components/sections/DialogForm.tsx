import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/Input2";
import { Label } from "../ui/label";
import { Textarea } from "../ui/TextArea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const DialogForm: React.FC = () => {
  const [name, setName] = useState("Pedro Duarte");

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle save logic here
    console.log("Working...");
    console.log("Saved:", { name });
  };

  return (
    <form onSubmit={handleSave}>
      <DialogContent className="sm:max-w-[650px] sm:max-h-auto">
        <DialogHeader>
          <DialogTitle>Create a New Task</DialogTitle>
          <DialogDescription>Fill in the details below.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Task Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Task Description
            </Label>
            <Textarea
              id="Description"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Task Progress
            </Label>
            <Select>
              <SelectTrigger className="w-[28rem]">
                <SelectValue placeholder="Select Task Progress" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="To-Do">To-Do</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Done">Done</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Task Priority
            </Label>
            <Select>
              <SelectTrigger className="w-[28rem]">
                <SelectValue placeholder="Select Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" variant={"outline"}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </form>
  );
};

export default DialogForm;
