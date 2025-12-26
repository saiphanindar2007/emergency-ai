import Lottie from "lottie-react";
import calmAnimation from "../assets/calm.json";

export default function CalmAnimation() {
  return (
    <div className="w-40 mx-auto my-4">
      <Lottie animationData={calmAnimation} loop autoplay />
    </div>
  );
}
