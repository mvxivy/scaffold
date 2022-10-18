const newVueBoilerPlate = (componentName) =>
`<script setup lang="ts">

</script>

<template>
  <div>
    
  </div>
</template>

<style lang="scss" scoped>
@import './${componentName}.scss'
</style>`

const newTestBoilerplate = (componentName) => 
`import { describe, it } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import ${componentName} from './${componentName}.vue';

describe('test the component', () => {
  it.todo('test feature');
});`

const newSCSSBoilerPlate = (componentName) =>
`@import '@scss/utils.scss';

.${pascalCaseToKebabCase(componentName)} {
  //
}`