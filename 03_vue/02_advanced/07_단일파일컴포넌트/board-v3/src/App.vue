<!-- 
 
컴포넌트 구조
- App.vue : 모든 게시글 데이터 (posts) 와 이를 수정하는 핵심 함수들 정의
- PostInput.vue : 입력창. 사용자가 글 쓰면 부모에 전달
- PostList.vue : 보관함. 부모에게 받은 데이터를 PostItem 에 나눠줌
- PostItem.vue : 개별 게시글. [글 번호, 제목, 버튼] 가짐

Props
- App -> PostList -> PostItem
- post (게시글 데이터), isSelected (열려있는지 여부) 전달하면 화면에 그림

Emits
- PostItem -> PostList -> App : no 번 글 삭제 요청을 부모에 전달
- PostInput -> App : 새로운 post를 list에 추가 요청
=> 요청 받은 App.vue가 실제 데이터 (posts) 를 수정
=> 데이터 바뀌면 Vue가 알아서 하위 컴포넌트 다시 그림 

-->

<template>
  <div id="app">
    <h1>📌 게시판 목록 v3 (컴포넌트 분리)</h1>

    <PostInput @add-post="addPost" />

    <PostList
      :posts="sortedPosts"
      :selectedPostNo="selectedPostNo"
      :editingPostNo="editingPostNo"
      :editPost="editPost"
      @toggle="togglePost"
      @start-edit="startEdit"
      @save="saveEdit"
      @cancel-edit="cancelEdit"
      @delete="deletePost"
      @close="closePost"
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import PostInput from './components/PostInput.vue';
import PostList from './components/PostList.vue';

export default {
  components: { PostInput, PostList },
  setup() {
    const posts = ref([
      {
        no: 1,
        title: 'Vue.js 기초 배우기',
        content:
          'Vue.js는 사용자 인터페이스를 구축하기 위한 프로그레시브 프레임워크입니다.',
      },
      {
        no: 2,
        title: '자바스크립트 ES6 문법',
        content:
          'ES6는 JavaScript의 최신 문법을 포함하며, let/const, 화살표 함수 등을 제공합니다.',
      },
      {
        no: 3,
        title: 'Node.js와 Express',
        content: 'Node.js는 서버 측 런타임이며, Express는 웹 프레임워크입니다.',
      },
      {
        no: 4,
        title: 'MongoDB 기본 개념',
        content:
          'MongoDB는 NoSQL 데이터베이스로 JSON과 유사한 문서 기반 데이터를 저장합니다.',
      },
      {
        no: 5,
        title: '프론트엔드와 백엔드의 차이',
        content:
          '프론트엔드는 사용자가 보는 부분을 개발하는 것이고, 백엔드는 서버와 데이터베이스를 관리하는 부분입니다.',
      },
      {
        no: 6,
        title: '비동기 프로그래밍',
        content:
          'JavaScript의 비동기 처리 방식에는 콜백, 프로미스, async/await가 있습니다.',
      },
      {
        no: 7,
        title: 'Vue Router 사용법',
        content:
          'Vue Router를 사용하면 Vue.js 애플리케이션에서 페이지 이동을 쉽게 처리할 수 있습니다.',
      },
      {
        no: 8,
        title: '컴포넌트 기반 개발',
        content:
          'Vue.js에서는 컴포넌트를 사용하여 UI를 작은 단위로 쪼개서 관리할 수 있습니다.',
      },
      {
        no: 9,
        title: 'CSS와 SCSS 차이점',
        content:
          'SCSS는 CSS의 확장된 버전으로 변수, 중첩, 믹스인 등을 지원합니다.',
      },
      {
        no: 10,
        title: 'Git과 GitHub 사용법',
        content:
          'Git은 버전 관리 시스템이며, GitHub는 이를 활용한 원격 저장소 플랫폼입니다.',
      },
    ]);

    // 번호 오름차순 정렬
    const sortedPosts = computed(() =>
      [...posts.value].sort((a, b) => a.no - b.no),
    );

    // 선택된 글 번호 및 수정 관련 데이터
    const selectedPostNo = ref(null);
    const editingPostNo = ref(null);
    const editPost = ref({ title: '', content: '' });

    // --- 기능 메서드 ---

    // 게시글 추가 (PostInput에서 호출)
    const addPost = (newPostData) => {
      const newNo =
        posts.value.length > 0
          ? Math.max(...posts.value.map((p) => p.no)) + 1
          : 1;
      posts.value.unshift({ no: newNo, ...newPostData });
    };

    // 게시글 상세 토글
    const togglePost = (no) => {
      selectedPostNo.value = selectedPostNo.value === no ? null : no;
      if (selectedPostNo.value !== editingPostNo.value)
        editingPostNo.value = null;
    };

    // 수정 모드 진입
    const startEdit = (post) => {
      editingPostNo.value = post.no;
      editPost.value = { title: post.title, content: post.content };
    };

    // 수정 내용 저장
    const saveEdit = (no) => {
      const target = posts.value.find((p) => p.no === no);
      if (target) {
        target.title = editPost.value.title;
        target.content = editPost.value.content;
      }
      editingPostNo.value = null;
    };

    const cancelEdit = () => (editingPostNo.value = null);
    const closePost = () => {
      selectedPostNo.value = null;
      editingPostNo.value = null;
    };

    // 게시글 삭제
    const deletePost = (no) => {
      if (confirm('삭제하시겠습니까?')) {
        posts.value = posts.value.filter((p) => p.no !== no);
        if (selectedPostNo.value === no) closePost();
      }
    };

    return {
      sortedPosts,
      selectedPostNo,
      editingPostNo,
      editPost,
      addPost,
      togglePost,
      startEdit,
      saveEdit,
      cancelEdit,
      deletePost,
      closePost,
    };
  },
};
</script>
