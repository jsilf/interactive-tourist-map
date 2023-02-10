import { render, screen, cleanup } from "@testing-library/react";
import { Map } from "../components/Map/Map";
import { TextCard } from "../components/Map/TextCard";

/* Need to fix config for ts for this to work. Error: *Cannot use import statement outside a module*  */
// test("Should render map", () => {
//   render(<Map />);
//   const map = screen.getAllByTestId("google-map");
//   expect(map).toBeInTheDocument();
// });

it("Should contain Gullholmsbaden", () => {
  render(<TextCard title="Gullholmsbaden" text="" onClick={() => {}} />);
  expect(screen.getByText("Gullholmsbaden")).toBeInTheDocument();
});
