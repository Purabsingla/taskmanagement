import React from "react";
import { cn } from "../../lib/utils";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { LottieRefCurrentProps } from "lottie-react";
import DragDrop from "../../assests/LottieAnimations/Animation - 1739627337646.json";
import Collab from "../../assests/LottieAnimations/Collaboration.json";
import Date from "../../assests/LottieAnimations/DueDate.json";
import Dark from "../../assests/LottieAnimations/DarkMode.json";

export function FeaturesSectionDemo() {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play(); // Start animation
    }
  }, []);

  const features = [
    {
      title: "Drag & Drop Task Management",
      description:
        "Allows users to drag and drop tasks between different columns (e.g., To-Do, In Progress, Done). This enhances workflow by making task updates quick and intuitive.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Task Due Date & Reminders",
      description:
        "Displays a due date for each task and sends reminders when deadlines are close or missed. Helps users stay on track with their work.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Collaboration & User Roles",
      description:
        "Enables team collaboration, where users can assign tasks, track changes, and comment on tasks in real-time. Helps teams work together seamlessly.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Dark Mode & Custom Themes ",
      description:
        "Allows users to switch between light and dark mode for a personalized experience. Helps with eye comfort and custom branding.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto mt-[6.2rem]">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-amber-600">
          Packed with thousands of features
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-black text-center font-normal ">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black  text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        " text-center font-normal text-black",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-[80%] p-5 mx-auto bg-white   h-[80%]">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}

          <Lottie animationData={DragDrop} loop={true} />
        </div>
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-[70%]  mx-auto bg-transparent dark:bg-transparent group h-[70%]">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO */}

          <Lottie animationData={Collab} loop={true} />
        </div>
      </div>
    </a>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row mx-auto">
        <Lottie animationData={Date} loop={true} />
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      {/* <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" /> */}
      <Lottie animationData={Dark} loop={true} />
    </div>
  );
};
