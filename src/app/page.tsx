"use client"

import StoryPreview from "@/components/StoryPreview/StoryPreview";
import useStories from "@/hooks/useStories";

const Home = () => {
    const { storyIds, isError, isLoading } = useStories();

    return (
        <div>
            <h1>Top trending stories</h1>
            {isError && <p>Something went wrong while loading stories...</p>}
            {isLoading && <p>Loading...</p>}
            {(!isError && !isLoading) && <>
                {storyIds?.map(id => <StoryPreview key={"story-" + id} id={id} />)}
            </>}
        </div>
    );
}

export default Home;
