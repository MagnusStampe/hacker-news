"use client"

import useStory from "@/hooks/useStory";
import { FC } from "react"

const Story: FC<{ id: number }> = ({ id }) => {
    const story = useStory(id);

    return (
        <></>
    );
}

export default Story;