<template>
  <q-card class="task-list">
    <q-card-section>
      <q-card-title class="text-h6">Daftar Tugas</q-card-title>
    </q-card-section>

    <q-card-section>
      <q-list bordered>
        <q-item
          v-for="(task, index) in tasks"
          :key="index"
          clickable
          tag="a"
          :href="task.link"
          target="_blank"
          v-ripple
        >
          <q-item-section>
            <q-item-label>{{ task.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'TaskList',
  data() {
    return {
      tasks: [
        { name: 'Tugas-1', link: 'https://galenabiyyu-project-cv.vercel.app/' },
        { name: 'Tugas-2', link: 'https://tugas-pertemuan2-prak-pbk.vercel.app/' },
        { name: 'Tugas-3', link: 'https://tugas3-prak-pbk-chi.vercel.app/' },
        { name: 'Tugas-4', link: 'https://tugas4-prak-pbk-beta.vercel.app/' },
        { name: 'Tugas-5', link: 'https://galen-abiyyu-rasyid-223510690-tugas6-prak-pbk.vercel.app/' },
        { name: 'Tugas-6', link: 'https://tugas6-prakpbk-galen-abiyyu-rasyid-223510690.vercel.app/' }
      ]
    };
  }
};
</script>

<style scoped>
.task-list {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Penambahan box shadow */
}

.task-list .text-h6 {
  text-align: center;
  color: #333;
  margin-bottom: 16px;
}

.q-item {
  padding: 12px 16px;
  transition: background-color 0.3s ease;
}

.q-item:hover {
  background-color: #f0f0f0;
}

.q-item-label {
  font-weight: bold;
  color: #007bff;
}

.q-item-label:hover {
  color: #0056b3;
}

.task-list {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9); /* Penambahan box shadow */
}

</style>
