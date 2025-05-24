import Story from "@/components/Story/Story";
import { FC } from "react";

const StoryPage: FC<{ params: Promise<{ id: number }> }> = async ({ params }) => {
    const { id } = await params;

    return <Story id={id} />;
}

export default StoryPage;
