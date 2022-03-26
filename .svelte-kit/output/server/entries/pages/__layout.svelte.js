import { c as create_ssr_component, a as compute_rest_props, b as createEventDispatcher, d as spread, e as escape_object, f as add_attribute, g as add_classes, h as escape, v as validate_component } from "../../chunks/index-4b7ffe26.js";
import { I as Icon } from "../../chunks/Icon-7210df3b.js";
import "../../chunks/HeaderSearch.svelte_svelte_type_style_lang-e2ef88b3.js";
var all = "";
var app = "";
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "toggled", "disabled", "labelA", "labelB", "labelText", "id", "name"]);
  let { size = "default" } = $$props;
  let { toggled = false } = $$props;
  let { disabled = false } = $$props;
  let { labelA = "Off" } = $$props;
  let { labelB = "On" } = $$props;
  let { labelText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.labelA === void 0 && $$bindings.labelA && labelA !== void 0)
    $$bindings.labelA(labelA);
  if ($$props.labelB === void 0 && $$bindings.labelB && labelB !== void 0)
    $$bindings.labelB(labelB);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  {
    dispatch("toggle", { toggled });
  }
  return `
<div${spread([escape_object($$restProps)], { classes: "bx--form-item" })}><input type="${"checkbox"}" ${toggled ? "checked" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_classes(("bx--toggle-input " + (size === "sm" ? "bx--toggle-input--small" : "")).trim())}>
  <label${add_attribute("aria-label", labelText ? void 0 : $$props["aria-label"] || "Toggle", 0)}${add_attribute("for", id, 0)}${add_classes("bx--toggle-input__label".trim())}>${slots.labelText ? slots.labelText({}) : `
      ${escape(labelText)}
    `}
    <span${add_classes("bx--toggle__switch".trim())}><span aria-hidden="${"true"}"${add_classes("bx--toggle__text--off".trim())}>${slots.labelA ? slots.labelA({}) : `
          ${escape(labelA)}
        `}</span>
      <span aria-hidden="${"true"}"${add_classes("bx--toggle__text--on".trim())}>${slots.labelB ? slots.labelB({}) : `
          ${escape(labelB)}
        `}</span></span></label></div>`;
});
const TopNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggleTheme } = $$props;
  if ($$props.toggleTheme === void 0 && $$bindings.toggleTheme && toggleTheme !== void 0)
    $$bindings.toggleTheme(toggleTheme);
  return `<nav class="${"nav h-[15vh] fixed top-0 left-0 right-0 p-1 grid grid-cols-12 "}"><section class="${"title flex col-span-12 items-center "}"><h1 class="${"title-text font-bold text-lg flex-[7] "}">WhatsApp</h1>
		<figure class="${"search text-lg flex-1"}">${validate_component(Icon, "Icon").$$render($$result, {
    icon: "ant-design:search-outlined",
    class: "mt-4"
  }, {}, {})}</figure>
		<figure class="${"mode flex-1 flex "}">${validate_component(Toggle, "Toggle").$$render($$result, {
    size: "sm",
    labelA: "",
    labelB: "",
    class: " pt-[2%]"
  }, {}, {})}
			${validate_component(Icon, "Icon").$$render($$result, { icon: "carbon:light", class: " mt-4  " }, {}, {})}</figure></section>
	<section class="${"tab col-span-12 flex justify-evenly "}"><a href="${"/chat"}"><button class="${"focus:border-b-2 focus:border-b-green-500"}">CHATS</button></a>
        <a href="${"/status"}"><button class="${"focus:border-b-2 focus:border-b-green-500"}">STATUS</button></a>
		<a href="${"/calls"}"><button class="${"focus:border-b-2 focus:border-b-green-500"}">CALLS</button></a></section></nav>`;
});
const lightTheme = "https://unpkg.com/carbon-components-svelte/css/g10.css";
const darkTheme = "https://unpkg.com/carbon-components-svelte/css/g90.css";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTheme = darkTheme;
  function toggleTheme() {
    alert("Changing Theme");
    if (activeTheme === darkTheme) {
      activeTheme = lightTheme;
    } else {
      activeTheme = darkTheme;
    }
  }
  return `${$$result.head += `<link rel="${"stylesheet"}"${add_attribute("href", activeTheme, 0)} data-svelte="svelte-vy11n1">`, ""}

<div class="${"min-h-screen w-screen overflow-x-hidden font-mono "}">${validate_component(TopNav, "TopNav").$$render($$result, { toggleTheme }, {}, {})}

	${slots.default ? slots.default({}) : ``}</div>`;
});
export { _layout as default };
