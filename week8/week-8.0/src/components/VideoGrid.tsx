import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "How to learn coding in 30 days",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Sidharth",
    views: "100k",
    timeStamp: "2 days ago"
}, {
    title: "How to learn coding in 30 days",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Sidharth",
    views: "100k",
    timeStamp: "2 days ago"
}, {
    title: "How to learn coding in 30 days",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Sidharth",
    views: "100k",
    timestamp: "2 days ago"
}];

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
                <VideoCard 
                    title={video.title}
                    image={video.image}
                    thumbImage={video.thumbImage}
                    author={video.author}
                    views={video.views}
                    timestamp={video.timestamp}
                    >
                </VideoCard>
            </div>)}
    </div>
}