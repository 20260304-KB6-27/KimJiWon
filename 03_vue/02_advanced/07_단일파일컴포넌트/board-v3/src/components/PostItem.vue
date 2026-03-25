<template>
  <li class="post-item-wrapper">
    <div @click="$emit('toggle', post.no)" class="post-item">
      {{ post.no }}. {{ post.title }}
      <span class="arrow">{{ isSelected ? '▲' : '▼' }}</span>
    </div>

    <div v-if="isSelected" class="post-content">
      <div v-if="isEditing">
        <input v-model="editPost.title" type="text" style="width: 100%;" />
        <textarea v-model="editPost.content" rows="3" style="width: 100%;"></textarea>
        <button @click="save">저장</button>
        <button @click="$emit('cancel-edit')">취소</button>
      </div>
      <div v-else>
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <button @click="$emit('start-edit', post)">수정</button>
        <button @click="$emit('delete', post.no)">삭제</button>
        <button @click="$emit('close')">닫기</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['post', 'isSelected', 'isEditing', 'editPost'], // 부모로부터 받는 데이터 
  emits: ['toggle', 'start-edit', 'save', 'cancel-edit', 'delete', 'close'], // 부모에게 보내는 이벤트 
  setup(props, { emit }) {
    const save = () => {
      emit('save', props.post.no);
    };
    return { save };
  }
};
</script>