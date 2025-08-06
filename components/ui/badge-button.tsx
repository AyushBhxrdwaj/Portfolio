import React from "react"
import { SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

type BadgeButtonProps={
  onClick?:React.MouseEventHandler<HTMLButtonElement>,
  children:React.ReactNode;
}

const BadgeButton:React.FC<BadgeButtonProps> = ({children,onClick}) => {
  return (
    <Badge
      variant="secondary"
      className="mb-3 cursor-pointer rounded-[14px] border border-black/10 bg-gray-500/10 text-lg md:left-6"
      onClick={onClick}
    >
      <SparklesIcon className=" mr-2   fill-white stroke-1 text-neutral-800" />{" "}
      {children}
    </Badge>
  )
}

export default BadgeButton
