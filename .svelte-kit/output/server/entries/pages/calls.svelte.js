import { c as create_ssr_component, v as validate_component, h as escape } from "../../chunks/index-4b7ffe26.js";
import { I as Icon } from "../../chunks/Icon-7210df3b.js";
const CallCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div class="${"col-span-12 call-card flex w-full p-4 bg-gray-600 m-3 rounded-md transition duration-1000 hover:bg-blue-700 hover:scale-[0.85] "}"><figure class="${"contact text-2xl text-white "}">${validate_component(Icon, "Icon").$$render($$result, { icon: "carbon:user-avatar-filled-alt" }, {}, {})}</figure>
    <section class="${"details flex-1 flex flex-col items-center text-white "}"><h2>${escape(name)}</h2>
          <p>${escape(new Date().toLocaleString())}</p></section>
    <figure class="${"icons text-2xl text-green-600"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "fluent:call-16-filled" }, {}, {})}</figure></div>`;
});
const Calls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"page pt-[16vh] grid grid-cols-12 "}">${validate_component(CallCard, "CallCard").$$render($$result, { name: "John" }, {}, {})}

	${validate_component(CallCard, "CallCard").$$render($$result, { name: "James" }, {}, {})}
   ${validate_component(CallCard, "CallCard").$$render($$result, { name: "Jacob" }, {}, {})}
   ${validate_component(CallCard, "CallCard").$$render($$result, { name: "Jane" }, {}, {})}
   ${validate_component(CallCard, "CallCard").$$render($$result, { name: "Judy" }, {}, {})}
   ${validate_component(CallCard, "CallCard").$$render($$result, { name: "Jake" }, {}, {})}
   ${validate_component(CallCard, "CallCard").$$render($$result, { name: "Judas" }, {}, {})}
   ${validate_component(CallCard, "CallCard").$$render($$result, { name: "Jocker" }, {}, {})}</div>`;
});
export { Calls as default };
