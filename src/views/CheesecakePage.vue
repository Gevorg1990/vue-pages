<template>
  <div class="center" style="padding-top: 200px;">

    <div id="comments" class="">

      <AnimatedButton :notifyParent="openModal"/>

      <!-- Success Modal -->
      <SuccessModal
          :isSuccessModalOpen="isSuccessModalOpen"
          @close-modal="closeModal"
      />

      <!-- The Modal -->
      <transition name="modal-fade">
        <div v-if="isModalOpen" class="modal" @click="handleClickOutside">
          <div class="modal-content" @click.stop ref="modalContent">
            <span class="close" @click="closeModal">&times;</span>
            <form @submit.prevent="addComment">
              <div class="img-box-file" @mouseleave="showAvatarPicker = false">
                <div class="avatar-box">
                  <input type="file"  @change="handleFileChange" id="file" name="avatar" accept="image/*" style="display: none">
                  <label for="file" style="cursor: pointer; poition: relative;" @mouseover="showAvatarPicker = true">
                    <img :src="avatarPreview || 'avatars-img/avatar-default.png'" alt="avatar" class="avatar">
                    <div v-if="showAvatarPicker" class="avatar-picker">
                      <div v-for="avatar in avatars" :key="avatar.src" @click.stop.prevent="selectAvatar(avatar)" class="avatar-item">
                        <img :src="avatar.src" :alt="avatar.alt" class="avatar-preview">
                      </div>
                    </div>
                  </label>
                  <span v-if="avatarError" class="error"></span>
                </div>


                <div>
                  <input class="input__name" type="text" @input="handleNameInput" v-model="userName" placeholder="Your Name">
                  <span v-if="nameError" class="error">{{ nameError }}</span>
                </div>

              </div>
              <div class="editable-div-box">

                <div class="editable-div-box-wrapper">
                  <div
                      class="editable-div"
                      contenteditable="true"
                      ref="editableDiv"
                      @input="handleCommentInput"
                      data-placeholder="Type your comment here..."
                      @keydown="limitTextLength"
                      @focus="showPicker = false"
                  ></div>
                  <span v-if="commentError" class="error">{{ commentError }}</span>
                </div>

                <div class="character-count" style="color: black"> <span  class="text-length">{{ commentLength }}</span>/300</div>
                <div class="emoji-picker">
                  <button @click="togglePicker" type="button">
                    <img src="emojis/3.gif" alt="🥰">
                  </button>
                  <div v-if="showPicker" class="emoji-list">
                    <div v-for="emoji in emojis" :key="emoji.src" @click="selectEmoji(emoji)" class="emoji-item">
                      <img :src="emoji.src" :alt="emoji.alt" />
                    </div>
                  </div>

                </div>
              </div>

              <div class="stars">
                  <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= tempRating, empty: star > tempRating }" @mouseover="hoverRating(star)" @mouseleave="resetRating" @click="setRating(star)">
                      ★
                  </span>
              </div>
              <button class="btn btn--submit" type="submit">Add Comment</button>
            </form>

          </div>
        </div>
      </transition>
    </div>

    <div v-if="item">
      <h2 class="item__name fs28">{{ item.name }}</h2>

      <!-- Tab navigation -->
      <div class="tabs">
        <button
            class="tab-btn"
            v-for="(image, index) in item.images"
            :key="index"
            ref="tabButton"
            :class="{ active: selectedTab === index + 1 }"
            @click="changeTab(index)">
          {{ item.sort[index] }}
        </button>
      </div>

      <!-- Tab content -->
      <div class="tab-content">
        <figure class="tab-content__img-box">
          <img :src="item.images[selectedTab - 1].src" :alt="`Image ${selectedTab + 1}`" />
        </figure>

        <p>{{ item.des[selectedTab - 1] }}</p>
      </div>
    </div>
    <Count :buyNumber="buyNumber" />
  </div>
</template>

<script>
import { ref, computed, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import i18n from "../i18n";
import { v4 as uuidv4 } from 'uuid';
import AnimatedButton from "../components/AnimatedButton";
import Count from "../components/Count";
import SuccessModal from "../components/Modal-Success";


// Helper functions for cookie management
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `expires=${date.toUTCString()};`;
  }
  document.cookie = `${name}=${value}; ${expires}path=/`;
}

export default {
  components: {SuccessModal, AnimatedButton, Count},
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const item = ref(null);
    const selectedTab = ref(Number(route.query.tab) || 1);

    // Computed property to get the count based on the selected tab
    const count = computed(() => {
      const currentItem = items.value.find(i => i.id === item.value?.id);
      return currentItem ? currentItem.count.map(Number) : [1]; // Convert to numbers, default to [1] if no item
    });

    const buyNumber = computed(() => {
      const index = selectedTab.value - 1; // Adjust index since selectedTab starts at 1
      return count.value[index] !== undefined ? count.value[index] : 1; // Return value or default to 1
    });

    const items = computed(() => {
      return store.getters.itemsCheesecake.map(item => ({
        ...item,
        name: i18n.global.t(item.nameKey), // Translate name using nameKey
        des: Array.isArray(item.des) ? item.des.map(d => i18n.global.t(d)) : [i18n.global.t(item.des)],
        sort: Array.isArray(item.sort) ? item.sort.map(d => i18n.global.t(d)) : [i18n.global.t(item.sort)]
      }));
    });

    const updateItem = () => {
      const itemId = route.params.id;
      item.value = items.value.find(i => i.id === Number(itemId));
    };

    watchEffect(updateItem);
    watchEffect(() => {
      selectedTab.value = Number(route.query.tab) || 1;
    });

    const changeTab = (index) => {
      selectedTab.value = index + 1;
      router.push({ query: { tab: index + 1 } });
    };

    return { items, item, selectedTab, changeTab, buyNumber };
  },
  data() {
    return {
      pageId : 'cheesecake/'+ this.item.id,
      globalRating: 5,
      tempRating: 5,
      comments: [],
      commentCount: 0,
      averageRating: 0,
      frontUserId: getCookie('frontUserId') || uuidv4(),
      showPicker: false,
      isModalOpen: false,
      emojis: [
        {src: 'emojis/1.gif', alt: '🤩'},
        {src: 'emojis/2.gif', alt: '🥳'},
        {src: 'emojis/3.gif', alt: '🥰'},
        {src: 'emojis/4.gif', alt: '😃'},
        {src: 'emojis/5.gif', alt: '🎂'},
        {src: 'emojis/7.gif', alt: '🤯'},
        {src: 'emojis/6.gif', alt: '🪩'},
        {src: 'emojis/8.gif', alt: '🌟'},
        {src: 'emojis/9.gif', alt: '👏'},
        {src: 'emojis/10.gif', alt: '👍'},
        {src: 'emojis/11.gif', alt: '🎁'},
        {src: 'emojis/12.gif', alt: '🎉'},
        {src: 'emojis/13.gif', alt: '💥'},
        {src: 'emojis/14.gif', alt: '🐝'},
        {src: 'emojis/15.gif', alt: '🎯'},
        {src: 'emojis/16.gif', alt: '❣'},
      ],
      showAvatarPicker: false,
      avatars: [
        {src: 'avatars-img/avatar1.png', alt: 'Avatar 1'},
        {src: 'avatars-img/avatar2.png', alt: 'Avatar 2'},
        {src: 'avatars-img/avatar3.png', alt: 'Avatar 3'},
        {src: 'avatars-img/avatar4.png', alt: 'Avatar 4'},
        {src: 'avatars-img/avatar5.png', alt: 'Avatar 5'},
        {src: 'avatars-img/avatar6.png', alt: 'Avatar 6'},
        {src: 'avatars-img/avatar7.png', alt: 'Avatar 7'},
        {src: 'avatars-img/avatar8.png', alt: 'Avatar 8'},
        {src: 'avatars-img/avatar9.png', alt: 'Avatar 9'},
        {src: 'avatars-img/avatar10.png', alt: 'Avatar 10'},
        {src: 'avatars-img/avatar11.png', alt: 'Avatar 11'},
        {src: 'avatars-img/avatar12.png', alt: 'Avatar 12'},
      ],
      userAvatar: null,
      avatarPreview: '',
      userName: '',
      nameError: '',   // Error message for name
      commentError: '', // Error message for comment
      avatarError: '', // Error message for avatar
      commentText: '',
      commentLength: 0,
      maxCommentLength: 300,
      isSuccessModalOpen: false // New state for success modal

    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.comments.length / this.commentsPerPage);
    },
    paginatedComments() {
      const start = (this.currentPage - 1) * this.commentsPerPage;
      const end = start + this.commentsPerPage;
      return this.comments.slice(start, end);
    },
    visiblePages() {
      const pages = [];
      let startPage, endPage;

      if (this.totalPages <= 5) {
        // Show all pages if total is less than or equal to 5
        startPage = 1;
        endPage = this.totalPages;
      } else {
        // Calculate the start and end page based on current page
        if (this.currentPage <= 3) {
          // Show first 5 pages
          startPage = 1;
          endPage = 5;
        } else if (this.currentPage + 2 >= this.totalPages) {
          // Show last 5 pages
          startPage = this.totalPages - 4;
          endPage = this.totalPages;
        } else {
          // Show current page with 2 pages before and after
          startPage = this.currentPage - 2;
          endPage = this.currentPage + 2;
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    },
    showFirstEllipsis() {
      return this.totalPages > 5 && this.currentPage > 4;
    },
    showLastEllipsis() {
      return this.totalPages > 5 && this.currentPage < this.totalPages - 3;
    }
  },
  methods: {

    handleCommentInput() {
      this.commentText = this.$refs.editableDiv.innerText;
      this.commentLength = this.commentText.length + $('.editable-div').find('img').length;
      this.clearCommentError();
    },
    limitTextLength(event) {
      if (this.commentLength >= this.maxCommentLength && event.key !== "Backspace" && event.key !== "Delete") {
        $('.text-length').addClass('anim')
        event.preventDefault();
      }else{
        $('.text-length').removeClass('anim')
      }
    },

    clearNameError() {
      this.nameError = '';
    },

    clearCommentError() {
      this.commentError = '';
    },

    clearAvatarError() {
      this.avatarError = '';
    },

    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.type.startsWith('image/')) {
          this.userAvatar = file;
          this.avatarPreview = URL.createObjectURL(file);
          this.clearAvatarError(); // Clear avatar error when a valid file is selected
        } else {
          alert('Please select a valid image file.');
          this.userAvatar = null;
          this.avatarPreview = 'avatars-img/avatar-default.png';
          this.avatarError = 'Invalid image file.';
        }
      }
    },

    // Call this method when the user selects an avatar
    selectAvatar(avatar) {
      this.userAvatar = avatar.src;
      this.avatarPreview = avatar.src;
      this.clearAvatarError(); // Clear avatar error when a valid avatar is selected
      this.showAvatarPicker = false;
    },

    // Call this method when the user types in the name field
    handleNameInput() {
      this.clearNameError();
    },
    // Existing methods...
    async addComment() {
      this.nameError = ''; // Reset error message
      this.commentError = ''; // Reset error message
      this.avatarError = ''; // Reset avatar error message

      const commentText = this.$refs.editableDiv.innerHTML.trim();

      if (!this.userName) {
        this.nameError = this.$t('error-message.name');
      }

      if (!commentText) {
        this.commentError = this.$t('error-message.comment');
      }

      if (!this.userAvatar) {
        this.avatarError = 'Avatar is required.';
      }

      if (this.userName && commentText && this.userAvatar) {
        try {
          const formData = new FormData();
          formData.append('text', commentText);
          formData.append('rating', this.globalRating);
          formData.append('userId', this.frontUserId);
          formData.append('name', this.userName);
          formData.append('pageId', this.pageId);
          formData.append('selectedTab', this.selectedTab); // Add the selected tab to FormData


          if (this.userAvatar instanceof File) {
            formData.append('avatar', this.userAvatar); // For file object
          } else if (this.userAvatar) {
            formData.append('avatar', this.userAvatar); // If using URL, though this should not be the case
          }

          const response = await fetch('http://localhost:3000/comments', {
            method: 'POST',
            body: formData
          });

          if (!response.ok) throw new Error('Failed to add comment');

          // Clear fields and close modal
          this.$refs.editableDiv.innerHTML = '';
          this.userName = '';
          this.userAvatar = null;
          this.avatarPreview = 'avatars-img/avatar-default.png'; // Reset preview
          this.closeModal();

          // Fetch comments and adjust pagination
          await this.fetchComments();
          // Move to last page after adding a comment
          this.currentPage = this.totalPages;

          // Open success modal
          this.isSuccessModalOpen = true;
        } catch (error) {
          console.error('Error adding comment:', error);
          alert(`Error adding comment: ${error.message}`);
        }
      }
    },

    closeSuccessModal() {
      this.isSuccessModalOpen = false;
    },
    async fetchComments() {
      try {
        const response = await fetch('http://localhost:3000/comments');
        if (!response.ok) throw new Error('Failed to fetch comments');
        const data = await response.json();
        this.comments = data.comments;
        this.globalRating = this.globalRating || data.globalRating;
        this.tempRating = this.globalRating;
        this.commentCount = data.comments.length;
        this.averageRating = data.averageRating || 0;

        // Ensure current page is adjusted if needed
        if (this.currentPage > this.totalPages) {
          this.currentPage = this.totalPages;
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    },
    async saveGlobalRating() {
      try {
        const response = await fetch('http://localhost:3000/global-rating', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ rating: this.globalRating })
        });

        if (!response.ok) throw new Error('Failed to save global rating');
        await this.fetchComments();
      } catch (error) {
        console.error('Error saving global rating:', error);
      }
    },
    setRating(star) {
      this.globalRating = star;
      this.saveGlobalRating();
    },
    hoverRating(star) {
      this.tempRating = star;
    },
    resetRating() {
      this.tempRating = this.globalRating;
    },
    togglePicker() {
      this.showPicker = !this.showPicker;
    },
    selectEmoji(emoji) {
      const editableDiv = this.$refs.editableDiv;
      const range = document.createRange();
      const sel = window.getSelection();

      if(this.commentLength >= 300) {
        $('.text-length').addClass('anim')
        setTimeout( ()=> this.showPicker = false,1000);
        return
      }

      // Ensure that the editableDiv has focus
      editableDiv.focus();

      if (sel.rangeCount > 0) {
        // Use the current selection range
        range.setStart(sel.getRangeAt(0).startContainer, sel.getRangeAt(0).startOffset);
        range.collapse(true);
      } else {
        // Start from the beginning if no selection
        range.setStart(editableDiv, 0);
        range.collapse(true);
      }

      // Create the emoji node and insert it at the range
      const imgTag = `<img style="vertical-align: middle; width: 20px; margin: 0 2px;" src="${emoji.src}" alt="${emoji.alt}" />`;
      const emojiNode = new DOMParser().parseFromString(imgTag, 'text/html').body.firstChild;

      // Ensure emoji is inserted only within the editableDiv
      if (editableDiv.contains(range.startContainer)) {
        range.deleteContents(); // Optional: Remove any existing content at cursor
        range.insertNode(emojiNode);
        range.setStartAfter(emojiNode); // Move cursor after the inserted emoji
        range.collapse(true);

        // Apply the range and focus the editableDiv
        sel.removeAllRanges();
        sel.addRange(range);
        editableDiv.focus();
      }

      this.handleCommentInput();

      // Close the emoji picker
      this.showPicker = false;
    },

    handleClickOutside(event) {
      if (!this.$refs.modalContent.contains(event.target)) {
        this.closeModal();
      }
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.showPicker = false;
      this.userName = '';
      this.globalRating = 5
      this.tempRating = 5
      this.avatarPreview = 'avatars-img/avatar-default.png';
      this.isSuccessModalOpen = false
    },

    formatDate(dateString) {
      // Ensure the dateString is a valid ISO 8601 date string
      const date = new Date(dateString);

      // Check if date is valid
      if (isNaN(date.getTime())) {
        return 'Invalid Date';
      }

      // Return formatted date in locale format
      return date.toLocaleDateString();
    }
  },
  mounted() {
    if (!getCookie('frontUserId')) {
      setCookie('frontUserId', this.frontUserId, 365);
    }
    this.fetchComments().then(() => {
      this.currentPage = 1;
    });


  }
};
</script>

<style lang="scss">

.item__name {
  margin-bottom: 20px;
}



</style>