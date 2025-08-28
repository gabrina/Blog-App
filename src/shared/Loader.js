import { PacmanLoader } from "react-spinners";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <PacmanLoader color="#9c27b0" />
    </div>
  );
}

export default Loader;
