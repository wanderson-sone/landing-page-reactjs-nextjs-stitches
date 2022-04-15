import { styled } from "..";

export const Container = styled("div", {
  backgroundColor: "$primary",
  flex: 1,
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto"
});

export const Logo = styled("div", {
 display: "flex",
 width: "161px",
 height: "58px"
});

export const Image = styled("img", {
  width: "6.25rem",
  height: "3.125rem",
  paddingRight: "1.25rem",
});

export const Title = styled("h1", {
  color: "$title",
});

export const Input = styled("input", {
  width: "18rem",
  margin: "1rem 0"
});

export const Button = styled("button", {
  border: "none",
  background: "$button",
  borderRadius: "1.875rem",
  padding: "0.3rem 0.5rem",
  width: "7rem",
  fontSize: "0.8rem",
  fontWeight: "700"
});

export const Result = styled("section", {
  marginTop: "2rem",
  backgroundColor: "$box",
  width: "18rem",
  height: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});