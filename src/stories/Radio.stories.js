import { Radio } from "components";
export default {
  title: "aeolusflights/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = {
  label: "Radio",
  shape: "RoundedBorder8",
  variant: "OutlineBluegray500",
  size: "sm",
  inputClassName: "mr-1",
};
