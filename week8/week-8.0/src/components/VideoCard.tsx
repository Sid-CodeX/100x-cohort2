export function VideoCard(props: any) {
    return <div className="p-3 cursor-pointer">
        <img src={props.image} className="rounded-xl"></img>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1 p-2">
                <img className="rounded-full w-11 h-11" src={props.thumbImage}>
                </img>
            </div>
            <div className="col-span-11 pt-2">
                <div>
                    {props.title}
                </div>
                <div className="text-gray-400 text-base">
                    {props.author}
                </div>
                <div className="text-gray-400 text-base">
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
    </div>
}