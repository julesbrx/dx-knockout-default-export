<script setup lang="ts">
import { onMounted } from 'vue';
import { DashboardControl } from 'devexpress-dashboard';

/**
 * import ko from 'knockout' => knockout doesn't have a default export
 * node_modules\.pnpm\devextreme@21.2.8\node_modules\devextreme\esm\integration\knockout\utils.js
 */

/*
  'default' is not exported by node_modules/.pnpm/knockout@3.5.1/node_modules/knockout/build/output/knockout-latest.js, imported by node_modules/.pnpm/devextreme@21.2.8/node_modules/devextreme/esm/integration/knockout/utils.js
  file: C:/Users/jules/Downloads/vite-project/node_modules/.pnpm/devextreme@21.2.8/node_modules/devextreme/esm/integration/knockout/utils.js:9:7
  7:  * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
  8:  
  9: import ko from "knockout";
            ^
  10: import $ from "../../core/renderer";
  11: export var getClosestNodeWithContext = node => {
*/

onMounted(() => {
  const root = document.getElementById('dashboard');
  if (!root) throw new Error();

  const dashboard = new DashboardControl(root, {
    endpoint: '/dashboards',
  });

  dashboard.render();
});
</script>

<template>
  <div id="dashboard"></div>
</template>
