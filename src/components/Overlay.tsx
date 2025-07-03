// import { styled } from "@mui/material";

import styled from "@emotion/styled";

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: "14%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  zIndex: 1000,
  pointerEvents: "none",
});
export default Overlay;
