import {
  alpha_spaces as alphaSpaces,
  email,
  max,
  min,
  required,
} from "@vee-validate/rules";
import {
  configure,
  defineRule,
  ErrorMessage,
  Field as VeeField,
  Form as VeeForm,
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

    configure({
      generateMessage: (ctx) => {
        const messages = {
          min: `The filed ${ctx.field} is too short`,
          max: `The field ${ctx.field} is too long`,
          email: `The field must be a valid email`,
          required: `The filed ${ctx.field} is required`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetical character and spaces`,
        };
        return messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid`;
      },
      validateOnBlur: true,
      validateOnInput: false,
      validateOnChange: true,
    });
  },
};
