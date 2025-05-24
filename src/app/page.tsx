"use client"

import StoryPreview from "@/components/StoryPreview/StoryPreview";
import useStories from "@/hooks/useStories";

const Home = () => {
    const { stories, isError, isLoading } = useStories();

    return (
        <div>
            <h1>Top trending stories</h1>
            {isError && <p>Something went wrong while loading stories...</p>}
            {isLoading && <p>Loading...</p>}
            {(!isError && !isLoading) && <>
                {stories?.map(story => <StoryPreview key={"story-" + story.id} story={story} />)}
            </>}
        </div>
    );
}

export default Home;
