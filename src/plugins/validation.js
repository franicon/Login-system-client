import {
  min,
  max,
  email,
  required,
  alpha_spaces as alphaSpaces,
} from "@vee-validate/rules";
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
} from "vee-validate";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("min", min);
    defineRule("max", max);
    defineRule("email", email);
    defineRule("required", required);
    defineRule("alpha_spaces", alphaSpaces);
  },
};
