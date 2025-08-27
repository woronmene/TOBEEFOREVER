import type { ReactElement } from "react"

type Props = {
    displayImageUrl: string
    title: string | ReactElement
    content: string | ReactElement
    buttonField: string
    className?: string
}

const Regularsection = ({ displayImageUrl, title, content, buttonField, className = "" }: Props) => {
    return <div className={`flex-1 flex flex-wrap justify-between items-center gap-10 py-16 sm:px-10 ${className}`}>
        {/* Display image area */}
        <div className="flex-1 basis-[100%] grow-[100%] sm:min-w-[320px] md:min-w-auto sm:basis-0 flex justify-center items-center">
            <img
                src={displayImageUrl}
                alt="Beatrice & Tomiwa"
                className="h-[295px] md:h-[674px] w-[250px] md:w-[440px] object-center object-cover rounded shadow shadow-inherit"
            />
        </div>
        {/* Text area  */}
        <div className="flex-2 flex justify-center items-center">
            <span className="block space-y-8 md:space-y-20">
                <span className="block">
                    <h2 className="min-w-[314px] text-[#000000] text-[24px] md:text-[48px] leading-normal md:leading-[60px] tracking-normal font-normal font-main  text-center md:text-start">
                        {title}
                    </h2>
                </span>
                <span className="block space-y-6 md:space-y-10">
                    <p className="min-w-[314px] text-[#808080] text-[17px] md:text-[24px] leading-normal tracking-normal font-normal font-main whitespace-normal text-wrap text-center md:text-start">
                        {content}
                    </p>
                    <span className="flex justify-center md:justify-start items-center">
                        <span className="w-auto min-w-[150px] md:min-w-[300px] h-[57px] md:h-[114px] flex justify-center items-center border-[1.5px] border-[#808080] rounded-[90%]">
                            <p className="text-[#000000] text-[18px] md:text-[36px] leading-[100%] tracking-normal font-normal font-main whitespace-normal text-wrap text-start">
                                {buttonField}
                            </p>
                        </span>
                    </span>
                </span>

            </span>
        </div>
    </div>
};

export default Regularsection;