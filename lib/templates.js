export const newVueBoilerPlate = (componentName) =>
`<script setup lang="ts">

</script>

<template>
  <div>
    
  </div>
</template>

<style lang="scss" scoped>
@import './${componentName}.scss'
</style>`

export const newTestBoilerplate = (componentName) => 
`import { describe, it } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import ${componentName} from './${componentName}.vue';

describe('test the component', () => {
  it.todo('test feature');
});`

export const newSCSSBoilerPlate = (componentName) =>
`@import '@scss/utils.scss';

.${componentName} {
  //
}`