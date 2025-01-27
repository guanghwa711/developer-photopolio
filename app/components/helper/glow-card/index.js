import dynamic from "next/dynamic";

const GlowCard = dynamic(() => import("./glow-card"), { ssr: false });

export default GlowCard;