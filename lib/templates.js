export const newVueBoilerPlate = (componentName, cssClassNameSerializer) =>
`
<script lang="ts">
export default {
  name: '${componentName}'
}
</script>

<script setup lang="ts">

</script>

<template>
  <div data-test="${componentName}" class="${cssClassNameSerializer(componentName)}">
    
  </div>
</template>

<style lang="scss" scoped>
@import './${componentName}.scss'
</style>`

export const newIndexBoilerPlate = (componentName) => 
`
export { default } from './${componentName}.vue';
`

export const newTestBoilerplate = (componentName) => 
`import { describe, it, expect, afterEach } from 'vitest';

import { mount, VueWrapper } from '@vue/test-utils';
import ${componentName} from './${componentName}.vue';

describe('testing ${componentName} component', () => {
  let wrapper: VueWrapper;

  const createComponent = (options: any = {}) => {
    wrapper = mount(${componentName} as any, options);
  };

  const find${componentName} = () => wrapper.find('[data-test="${componentName}"]');


  it('renders an ${componentName} component', () => {
    createComponent();

    expect(find${componentName}().exists()).toBeTruthy();
  });

  afterEach(() => {
    wrapper.unmount();
  });
});`

export const newSCSSBoilerPlate = (componentName) =>
`@import '@scss/utils.scss';

.${componentName} {
  //
}`