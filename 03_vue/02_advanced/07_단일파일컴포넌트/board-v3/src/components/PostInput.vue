<template>
  <div class="input-group">
    <input
      type="text"
      v-model="title"
      placeholder="새 게시글 제목"
      class="input-field"
    />
    <input
      type="text"
      v-model="content"
      placeholder="새 게시글 내용"
      class="input-field"
    />
    <button @click="submitPost">작성</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  // 부모 컴포넌트로 내보낼 이벤트
  emits: ['add-post'],
  setup(props, { emit }) {
    const title = ref('');
    const content = ref('');

    const submitPost = () => {
      // 유효성 검사
      if (!title.value.trim() || !content.value.trim()) {
        alert('제목과 내용을 모두 입력해주세요!');
        return;
      }

      // 부모에게 새 게시글 데이터를 담아 이벤트 발신 (emit)
      emit('add-post', {
        title: title.value,
        content: content.value,
      });

      // 입력창 초기화
      title.value = '';
      content.value = '';
    };

    return {
      title,
      content,
      submitPost,
    };
  },
};
</script>
