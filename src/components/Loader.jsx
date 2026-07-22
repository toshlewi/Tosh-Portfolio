import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      className="flex flex-col items-center justify-center"
    >
      <span className="canvas-loader" />

      <p
        className="mt-6 text-white font-semibold tracking-wide"
        style={{ fontSize: "14px" }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default Loader;