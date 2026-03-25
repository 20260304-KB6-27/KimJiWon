<template>
  <ul>
    <PostItem 
      v-for="post in posts" 
      :key="post.no" 
      :post="post"
      :isSelected="selectedPostNo === post.no"
      :isEditing="editingPostNo === post.no"
      :editPost="editPost"
      @toggle="$emit('toggle', $event)"
      @start-edit="$emit('start-edit', $event)"
      @save="$emit('save', $event)"
      @cancel-edit="$emit('cancel-edit')"
      @delete="$emit('delete', $event)"
      @close="$emit('close')"
    />
  </ul>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
  components: { PostItem },
  props: ['posts', 'selectedPostNo', 'editingPostNo', 'editPost'],
  emits: ['toggle', 'start-edit', 'save', 'cancel-edit', 'delete', 'close']
};
</script>