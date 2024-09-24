import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import Page from "./index";
describe("Page", () => {
   it("renders the title and children correctly", () => {
     render(
       <Page title="Sample Title">
         <p>Child Content</p>
       </Page>
     );

     // Check if the title is rendered
     expect(
       screen.getByRole("heading", { name: /Test components Sample Title/i })
     ).toBeInTheDocument();

     // Check if the children are rendered
     expect(screen.getByText(/Child Content/i)).toBeInTheDocument();
   });
});