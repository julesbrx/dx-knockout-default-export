<script setup lang="ts">
import { onMounted } from 'vue';
import { DashboardControl } from 'devexpress-dashboard';

onMounted(() => {
  const root = document.getElementById('dashboard');
  if (!root) throw new Error();

  const dashboard = new DashboardControl(root, {
    endpoint: 'https://demos.devexpress.com/services/dashboard/api',
  });

  dashboard.render();
});
</script>

<template>
  <div id="dashboard"></div>
</template>

<style scoped>
#dashboard {
  height: 100vh;
}
</style>
