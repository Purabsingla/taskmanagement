import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Input } from "../ui/Input2";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const DialogForm = () => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">Add New Task</DialogTitle>
        <DialogDescription>
          Create a new task for your board. Fill in the details below.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-6 py-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm font-medium">
            Task Title
          </Label>
          <Input id="title" placeholder="Enter task title" className="w-full" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="priority" className="text-sm font-medium">
            Priority Level
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High Priority</SelectItem>
              <SelectItem value="medium">Medium Priority</SelectItem>
              <SelectItem value="low">Low Priority</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline">Cancel</Button>
          <Button>Create Task</Button>
        </div>
      </div>
    </DialogContent>
  );
};

export default DialogForm;
