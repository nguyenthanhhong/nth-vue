import _Vue from 'vue';
/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}
/**
 * Getting a random number between two values
 * @param {number} min 
 * @param {number} max 
 */
export function random(min, max) {
  return Math.random() * (max - min) + min;
}
/**
 * Getting a random integer between two values
 * @param {number} min 
 * @param {number} max 
 */
export function randomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * open a dialog, the dialog must have prop "result" to receive data from dialog
 * @param {HTMLElement} vm 
 * @param {*} component 
 * @param {*} data 
 * @return {*}
 */
export function dialog(vm, component, data) {
  const i18n = vm.$i18n
  return new Promise(async(resolve, reject) => {

      // I'm combining a bunch of stuff to make this work.
      // First, create the vue component
      var dialogInstance = _Vue.extend(component); // component, imported at top of Sublib
      var oComponent = new dialogInstance({
          propsData: {
              input: data,
              result: {}
          },
          i18n: i18n,
          store: vm.$store
      }).$mount();

      // now add it to the DOM
      let parentEl = document.getElementById(vm.$el.id) ? document.getElementById(vm.$el.id) : document.getElementById('app');
      var oEl = parentEl.appendChild(oComponent.$el);

      // Add a listener so we can get the value and return it
      oComponent.$watch('result', function(newVal, oldVal) {
          // this is triggered when they chose an option
          // Delete the component / element now that I'm done
          oEl.remove();
          resolve(newVal);
      })
  }); // promise
}