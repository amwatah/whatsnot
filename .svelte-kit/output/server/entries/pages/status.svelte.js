import { c as create_ssr_component, v as validate_component, h as escape, o as onDestroy, p as each } from "../../chunks/index-4b7ffe26.js";
import { I as Icon } from "../../chunks/Icon-7210df3b.js";
const StatusCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { who = "MY STATUS" } = $$props;
  if ($$props.who === void 0 && $$bindings.who && who !== void 0)
    $$bindings.who(who);
  return `<div class="${"status bg-gray-700 h-[10vh] flex items-center m-1"}">${validate_component(Icon, "Icon").$$render($$result, {
    icon: "tabler:circle-dotted",
    class: "text-5xl  "
  }, {}, {})}
     <p class="${"flex-[1] text-center"}">${escape(who)}</p></div>`;
});
const Status = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let status = [1];
  onDestroy(() => clearInterval());
  return `<div class="${"page pt-[16vh] grid grid-cols-12"}"><section class="${"col-span-12"}">${validate_component(StatusCard, "StatusCard").$$render($$result, {}, {}, {})}</section>
     <section class="${"col-span-12"}"><h4>RECENT UPDATES</h4>
        ${each(status, (status2) => {
    return `${validate_component(StatusCard, "StatusCard").$$render($$result, { who: "MY CONTACTS" }, {}, {})}`;
  })}</section></div>`;
});
export { Status as default };
