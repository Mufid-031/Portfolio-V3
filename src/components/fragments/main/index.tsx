import WavesTop from "@/components/elements/waves/top";
import Biodata from "./biodata";
import MyAvatar from "./myavatar";

export default function Main() {
    return (
        <div className="flex justify-around items-center w-full h-[660px] bg-mine-shaft-950 relative">
            <WavesTop />
            <MyAvatar />
            <Biodata />
        </div>
    )
}