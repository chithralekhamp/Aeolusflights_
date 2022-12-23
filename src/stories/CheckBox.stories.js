import { CheckBox } from "components";
export default {
  title: "aeolusflights/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  shape: "RoundedBorder2",
  variant: "OutlineBluegray500",
  size: "sm",
  inputClassName: "mr-1",
};
