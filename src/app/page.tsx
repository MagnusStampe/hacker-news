"use client"

import StoryPreview from "@/components/StoryPreview/StoryPreview";
import useStories from "@/hooks/useStories";
import styles from "./page.module.css";

const Home = () => {
    const { stories, isError, isLoading } = useStories();

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>Top trending stories</h1>
            {isError && <p>Something went wrong while loading stories...</p>}
            {isLoading && <p>Loading...</p>}
            {(!isError && !isLoading) && <>
                {stories?.map(story => <StoryPreview key={"story-" + story.id} story={story} />)}
            </>}
        </div>
    );
}

export default Home;
