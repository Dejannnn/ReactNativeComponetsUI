// Page.stories.tsx
import Page from ".";
import { PageProps } from "./types"; // Import the PageProps type

// Default export to define metadata for the stories
export default {
  title: "Components/Page", // Title of the component group
  component: Page,
};

// Template for the component
const Template = (args: PageProps) => <Page {...args} />;

// Story for the default state
export const Default = Template.bind({});
Default.args = {
  title: "Default Page",
  children: <p>This is the default page content.</p>,
};

// Story for another variation
export const AnotherExample = Template.bind({});
AnotherExample.args = {
  title: "Another Example Page",
  children: <p>This is another example of page content.</p>,
};
