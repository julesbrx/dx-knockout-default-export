<script setup lang="ts">
import { onMounted } from 'vue';
import { DashboardControl } from 'devexpress-dashboard';

/**
 * import ko from 'knockout' => knockout doesn't have a default export 
 * node_modules\.pnpm\devextreme@21.2.8\node_modules\devextreme\esm\integration\knockout\utils.js
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
