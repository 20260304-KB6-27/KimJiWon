<template>
  <div class="card card-body">
    <h2>Member Info</h2>
    <!-- <div>
        경로 패턴 : /members/:id <br>
        요청 경로 : {{ route.path }} <br>
        id 값 : {{ route.params.id }}
    </div> -->

    <div>
      <img :src="member.photo" />
      <h4>{{ member.name }} ({{ member.role }})</h4>
      <p>{{ member.desc }}</p>

      <a
        v-if="member.insta && member.insta !== ''"
        class="fa fa-instagram m-1"
        :href="member.insta"
      ></a>
      <a
        v-if="member.facebook && member.facebook !== ''"
        class="fa fa-facebook m-1"
        :href="member.facebook"
      ></a>
      <a
        v-if="member.youtube && member.youtube !== ''"
        class="fa fa-youtube m-1"
        :href="member.youtube"
      ></a>
    </div>
    <RouterLink to="/members">멤버목록으로 </RouterLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import members from '@/members.json';

const route = useRoute();

const memberId = Number(route.params.id);

const member = members.find((m) => m.id === memberId);
</script>

<style scoped></style>
