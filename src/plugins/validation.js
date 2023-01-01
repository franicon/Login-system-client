import { Form as veeForm, Field as veeField } from "vee-validate";

export default {
  install(app) {
    app.component("VeeForm", veeForm);
    app.component("VeeField", veeField);
  },
};
