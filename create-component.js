#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import { resolve as pathResolve } from 'node:path';
import { pascalCaseToKebabCase } from './utils';
import { ComponentNameException } from './exceptions';


const [componentName] = process.argv.slice(2);



async function createComponent(componentName) {
  if(componentName === undefined) throw new ComponentNameException('Enter a component name!');

  const componentDir = pathResolve(COMPONENTS_PATH, componentName);
  try {
    const createdDir = await mkdir(componentDir, { recursive: true });
    console.log(`Create component dir: ${createdDir}`);
  } catch(ex) {
    console.error(ex);
    process.exit(1);
  }
  
  const filePromises = [
    writeFile(`${componentDir}/${componentName}.vue`, newVueBoilerPlate(componentName), { encoding: 'utf8' }),
    writeFile(`${componentDir}/${componentName}.spec.ts`, newTestBoilerplate(componentName), { encoding: 'utf8' }),
    writeFile(`${componentDir}/${componentName}.scss`, newSCSSBoilerPlate(pascalCaseToKebabCase(componentName)), { encoding: 'utf8' }),
  ]

  try {
    await Promise.all(filePromises);
  } catch(ex) {
    console.error(ex);
    process.exit(1);
  }
}

createComponent(componentName);
