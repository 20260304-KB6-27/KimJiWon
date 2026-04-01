<template>
  <h1 class="m-4">이날치 멤버</h1>
  <div class="container">
    <div class="row">
      <div
        v-for="m in members"
        :key="m.id"
        class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
      >
        <RouterLink :to="{ name: 'members/id', params: { id: m.id } }">
          <img :src="m.photo" style="width: 90px; height: 110px" />
          <h6>{{ m.name }}</h6>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import members from '@/members.json';
</script>

<style scoped></style>
