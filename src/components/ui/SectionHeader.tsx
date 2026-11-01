interface SectionHeaderProps {
    shortTitle: string;
    title: string;
    subTitle: string;
    isCenter?: boolean;
}

const SectionHeader = ({ shortTitle, title, subTitle, isCenter = true }: SectionHeaderProps) => {
    return (
        <div className={`${isCenter ? 'text-center' : 'text-start'}`}>
            <p className="text-sm font-semibold text-primary">{shortTitle}</p>
            <h2 className="font-header mb-3 font-black text-foreground text-2xl sm:text-4xl">{title}</h2>
            <h6 className="text-[15px] text-foreground/80 font-normal">{subTitle}</h6>
        </div>
    )
};

export default SectionHeader;