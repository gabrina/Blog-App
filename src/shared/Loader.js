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
      <PacmanLoader />
    </div>
  );
}

export default Loader;
