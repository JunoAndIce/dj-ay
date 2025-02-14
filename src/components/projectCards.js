function ProjectCard({ image, title, yearStartTop, yearStartBot, yearEndTop, yearEndBot }) {
    return (
        <div className="flex flex-col">
            <img src={image} alt={title} />
            <div className="flex justify-between items-center pt-2">
                <h4 className="text-3xl hel_neu_bold">{title}</h4>
                <div className="flex items-center gap-2 font-168">
                    <div className="text-lg leading-none">
                        <p>{yearStartTop}</p>
                        <p>{yearStartBot}</p>
                    </div>
                    -
                    {yearEndTop && yearEndBot ? (
                        <div className="text-lg leading-none">
                            <p>{yearEndTop}</p>
                            <p>{yearEndBot}</p>
                        </div>
                    ) : (
                        <p className="text-xs">NOW</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
