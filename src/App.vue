<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round icon="menu" @click="toggleDrawer" class="menu-button" />
        <q-toolbar-title>
          Galen Abiyyu Rasyid
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="left" overlay>
      <q-list>
        <q-item clickable v-ripple to="/">
          <q-item-section>
            <q-item-label class="drawer-item">Weather</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/task1">
          <q-item-section>
            <q-item-label class="drawer-item">Daftar Tugas</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-center">
      <div>GALEN ABIYYU RASYID © 2024</div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
@import 'quasar/dist/quasar.sass';

body {
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  padding: 0;
}

.menu-button {
  color: #fff;
}

.drawer-item {
  font-weight: bold;
}

.q-header {
  background-color: #1976d2; /* Warna latar belakang header */
}

.q-footer {
  background-color: #1976d2; /* Warna latar belakang footer */
  color: #fff; /* Warna teks footer */
}
</style>
