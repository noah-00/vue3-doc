import type { Directive } from "vue";

const VFocus: Directive<HTMLElement> = {
  mounted(el) {
    el.focus();
  },
};

export default VFocus;

// const myDirective = {
//   called before the bound element's attributes and
//   called before event listeners are applied
//   created(el, binding, vnode, prevVnode) {
//     see below for argument details
//   }, }

//   called just before the element is inserted into the DOM
//   beforeMount(el, binding, vnode, prevVnode) {}

//   The parent component of the bound element and
//   called when the parent component of the bound element and all its children are mounted
//   mounted(el, binding, vnode, prevVnode) {}, // called when the parent component of the bound element and // all its children have been mounted

//   called before the parent component is updated
//   beforeUpdate(el, binding, vnode, prevVnode) {}, // called before the parent component is updated

//   Called after the parent component and all child elements have been
//   called after the parent component and all child elements have been updated
//   updated(el, binding, vnode, prevVnode) {}, // called after the parent component is unmounted

//   called before the parent component is unmounted
//   beforeUnmount(el, binding, vnode, prevVnode) {}

//   called when the parent component is unmounted
//   unmounted(el, binding, vnode, prevVnode) {}
// }
