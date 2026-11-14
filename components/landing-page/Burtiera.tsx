const topics = "XR. VR. CULTURE. TOURISM. STORY. IMMERSION. EDUCATION. SIMULATION. DIGITAL TWINS. AI. SPATIAL. ";
const platforms = "META QUEST. VISION PRO. ANDROID. IOS. DESKTOP. HOLOGRAMS. AI. SPATIAL. VIDEOMAPPING. HAPTIC. ";

export default function Burtiera() {
    return (
        <div className="burtiera-stage" aria-label="XR capabilities and platforms">
            {[topics, platforms].map((text, index) => (
                <div key={text} className={`text-zinc-900 font-bold text-lg py-2 ${index === 0 ? "bg-white burtiera_wrapper_one" : "bg-orange-500 burtiera_wrapper_two"}`}>
                    <div className="burtiera burtiera-1"><span>{text.repeat(2)}</span></div>
                    <div className="burtiera burtiera-2" aria-hidden="true"><span>{text.repeat(2)}</span></div>
                </div>
            ))}
        </div>
    );
}
