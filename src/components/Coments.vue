<template>


  <div id="comments" class="center">
    <h1>Comment System</h1>

    <!-- Button to open the modal -->
    <button @click="openModal" type="button">Add Comment</button>

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
                <div v-if="showAvatarPicker" class="avatar-picker" style="display: flex; width: 250px">
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




            <div class="character-count"> <span class="text-length">{{ commentLength }}</span>/300</div>
            <div class="emoji-picker">
              <button @click="togglePicker" type="button">
                <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3a/1/30/1f60d.png" alt="">
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
          <button type="submit">Add Comment</button>
        </form>

      </div>
    </div>
    </transition>
    <div class="comment-box">
      <!-- Display comments with pagination -->
      <div class="comment__item" :id="'comment-' + comment.id" v-for="comment in paginatedComments" :key="comment.id">
        <div style="display: flex; flex-direction: column; height: 100%;">
          <!-- Display avatar -->
          <div style="display: flex; align-items: center; margin-bottom: 20px; gap: 20px">
            <img v-if="comment.avatar" :src="comment.avatar" alt="User Avatar" class="avatar">
            <strong style="font-size: 20px">{{ comment.name }}</strong>
          </div>

          <router-link v-if="comment.pageId" :to="'/' + comment.pageId"> show </router-link>


          <span class="comment__text" v-html="comment.text"></span>

          <div style="margin-top: auto;">
            <div class="stars">
                    <span v-for="star in 5" :key="star"
                          class="star"
                          :class="{ filled: star <= comment.rating, empty: star > comment.rating }">
                       ✭
                    </span>
            </div>

            <span class="comment__date">{{ formatDate(comment.date) }}</span>
          </div>
        </div>
        <button class="comment__delete-btn" v-if="comment.userId === frontUserId" @click="deleteComment(comment.id)">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M13.2798 13.6799V27.8C13.2798 28.3522 13.7275 28.8 14.2798 28.8H25.7198C26.2721 28.8 26.7198 28.3522 26.7198 27.8V13.6799M16.6398 17.5341V25.5388M20.3731 17.5341V25.5388M23.7331 17.5341V21.5364C23.7331 23.0994 23.7331 23.9758 23.7331 25.5388" stroke="#F30F0F"/>
            <rect x="10.8999" y="11.5117" width="18.2" height="1.88001" rx="0.940003" stroke="#F30F0F"/>
            <rect x="15.3979" y="9.30005" width="8.6" height="1.88001" rx="0.940003" stroke="#F30F0F"/>
          </svg>
        </button>
      </div>
    </div>
    <!-- Pagination Controls -->
    <div v-if="totalPages > 1" class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>

      <!-- Show first page and ellipses if needed -->
      <button v-if="showFirstEllipsis" @click="changePage(1)">1</button>
      <button v-if="showFirstEllipsis" disabled>...</button>

      <!-- Page number buttons -->
      <button v-for="page in visiblePages" :key="page" @click="changePage(page)" :class="{ active: currentPage === page }">
        {{ page }}
      </button>

      <!-- Show ellipses and last page if needed -->
      <button v-if="showLastEllipsis" disabled>...</button>
      <button v-if="showLastEllipsis" @click="changePage(totalPages)">{{ totalPages }}</button>

      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    </div>

    <div
        class="Stars"
        :style="{ '--rating': averageRating }"
        aria-label="Rating of this product is {{ averageRating }} out of 5."
    >
    </div>

    <div style="display: flex; gap:5px">
      <p> {{ averageRating }} </p>
      <p> ({{ commentCount }})</p>


    </div>
  </div>

</template>


  <script>
  import { v4 as uuidv4 } from 'uuid';

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
      data() {
        return {
          pageId : '',
          globalRating: 5,
          tempRating: 5,
          comments: [],
          commentCount: 0,
          averageRating: 0,
          frontUserId: getCookie('frontUserId') || uuidv4(),
          showPicker: false,
          isModalOpen: false,
          emojis: [
            {src: 'https://static.xx.fbcdn.net/images/emoji.php/v9/t3a/1/30/1f60d.png', alt: '😍'},
            {src: 'https://static.xx.fbcdn.net/images/emoji.php/v9/t90/1/30/1f929.png', alt: '🤩'},
            {src: 'https://static.xx.fbcdn.net/images/emoji.php/v9/ta5/1/30/1f973.png', alt: '🥳'},
            {src: 'https://static.xx.fbcdn.net/images/emoji.php/v9/t3a/1/30/1f60d.png', alt: '🥺'},
          ],
          showAvatarPicker: false,
          avatars: [
            {src: 'avatars-img/avatar1.png', alt: 'Avatar 1'},
            {src: 'avatars-img/avatar2.png', alt: 'Avatar 2'},
            {src: 'avatars-img/avatar3.png', alt: 'Avatar 3'},
            // Add more avatars if needed
          ],
          userAvatar: null,
          avatarPreview: '',
          currentPage: 1,
          commentsPerPage: 8,
          userName: '',
          nameError: '',   // Error message for name
          commentError: '', // Error message for comment
          avatarError: '', // Error message for avatar
          commentText: '',
          commentLength: 0,
          maxCommentLength: 300,

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
        selectAvatar(avatar) {
          this.userAvatar = avatar.src;
          this.avatarPreview = avatar.src;
          this.showAvatarPicker = false;
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
          console.log('Selected avatar:', avatar.src);
        },

        // Call this method when the user types in the name field
        handleNameInput() {
          this.clearNameError();
        },
        async addComment() {
          this.nameError = ''; // Reset error message
          this.commentError = ''; // Reset error message
          this.avatarError = ''; // Reset avatar error message

          const commentText = this.$refs.editableDiv.innerHTML.trim();

          if (!this.userName) {
            this.nameError = 'Name is required.';
          }

          if (!commentText) {
            this.commentError = 'Comment cannot be empty.';
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
            } catch (error) {
              console.error('Error adding comment:', error);
              alert(`Error adding comment: ${error.message}`);
            }
          }
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
            this.pageId = data.pageID

            // Ensure current page is adjusted if needed
            if (this.currentPage > this.totalPages) {
              this.currentPage = this.totalPages;
            }
          } catch (error) {
            console.error('Error fetching comments:', error);
          }
        },
        async deleteComment(commentId) {
          if (confirm('Are you sure you want to delete this comment?')) {
            const commentElement = document.getElementById(`comment-${commentId}`);

            // Check if the element exists
            if (commentElement) {
              // Apply the dust animation class
              commentElement.classList.add('dust');

              // Wait for the animation to finish
              await new Promise((resolve) => setTimeout(resolve, 500));
            }

            try {
              const response = await fetch(`http://localhost:3000/comments/${commentId}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId: this.frontUserId })
              });

              if (!response.ok) throw new Error('Failed to delete comment');

              // If the element exists, remove it from the DOM
              if (commentElement) {
                commentElement.remove();
              }

              // Optionally, refresh the comments list
              await this.fetchComments();
            } catch (error) {
              console.error('Error deleting comment:', error);

              // Revert the animation if there was an error
              if (commentElement) {
                commentElement.classList.remove('dust');
              }
            }
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
        },
        changePage(page) {
          if (page > 0 && page <= this.totalPages) {
            this.currentPage = page;
          }
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
          this.currentPage = this.totalPages;
        });

      }
    }
  </script>





<style lang="scss" >

.input__name {
  height: 50px;
  border-radius: 6px;
  min-width: 220px;
  padding: 0 10px;
  border: 1px solid silver;
}


.editable-div[contenteditable]:empty:before {
  content: attr(data-placeholder);
  color: #aaa;
}

.emoji-list {
  display: flex;
  flex-wrap: wrap;
}

.emoji-item {
  margin: 5px;
  cursor: pointer;
}



.filled {
  color: gold;
}

.empty {
  color: lightgray;
}

.pagination {
  margin: 10px 0;
  display: flex;
  justify-content: center;
}

.img-box-file {
  position:relative; display: flex; gap: 40px; align-items: center; margin-bottom: 30px;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
  display: block;
  position: absolute;
}
.editable-div-box {
  position: relative;
}

.editable-div-box-wrapper:has(.error) .editable-div {
  margin-bottom: 0;
}

.editable-div-box-wrapper:has(.error) {
  padding-bottom: 30px;
}

.comment-box {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1440px;
  margin: auto;
}

.comment-box div {
  flex:  0 1 calc(25% - 23px);
  position: relative;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.emoji-picker button {
  background: unset;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.emoji-picker button:hover img {
  filter: grayscale(0);
}

.emoji-picker button img {
  width: 100%;
  filter: grayscale(1);
  transition: filter 0.3s ease;
}

.text-length {
  transition: color 0.3s ease;
}

.anim {
  color: #F30F0F;
}



button.active {
  background: #F30F0F;
}

/* delete anim item */
@keyframes dustDisappear {
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform: scale(0.5) translateY(-20px);
    filter: blur(2px);
  }
}

.dust {
  animation: dustDisappear 0.5s forwards;
}


:root {
  --star-size: 40px;
  --star-color: #fff;
  --star-background: #fc0;
}

[v-cloak] {
  display: none;
}

.star {
  cursor: pointer;font-size: 20px;
  transition: all 0.3s ease;
}

.Stars {
  --percent: calc(var(--rating) / 5 * 100%);
  display: inline-block;
  font-size: var(--star-size);
  line-height: 1;
}

.Stars:before {
  content: '✭✭✭✭✭';
  letter-spacing: 1px;
  background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

form {
  position: relative;
}

.stars {
  display: flex;
  gap: 5px;
  color: gold;
  font-size: 1.2em;
}

.filled {
  color: gold;
}
.empty {
  color: lightgray;
}

.container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.emoji-picker {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
  padding: 0;
  margin: 0;
  height: 30px;
}

.emoji-list {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 5px;
  right: 0;
  min-width: 204px;
  position: absolute;
}

.emoji-item {
  box-sizing: content-box;
  font-size: 24px;
  width: 30px;
  height: 30px;
  margin: 4px;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
}


.comment__date,
.comment__text{
  display: block;
}

.comment__item {
  min-height: 60px;
  border: 1px solid #aaa;
  box-sizing: border-box;
  padding: 20px;

}

.comment__delete-btn,
.btn-emoji {
  background: unset;
  border: unset;
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
}

.comment__delete-btn {
  height: 50px;
  width: 50px;
  position: absolute;
  right: 4px;
  top: 8px;
}

.comment__delete-btn:hover svg rect {
  transition: transform 0.3s ease ;
  transform: translateY(-6px) translateX(5px) rotate(15deg);
}

.emoji-item:hover {
  background-color: #f0f0f0;
}

.editable-div:empty:before {
  content: attr(data-placeholder);
}



.editable-div {
  width: 100%;
  min-height: 150px;
  padding: 10px 40px 10px 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow-y: auto;
  white-space: pre-wrap;
  color: black;
}

/*AVATAR*/
/* Avatar Picker Styles */
.avatar-picker {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #888;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  z-index: 2;
}

.avatar-item {
  cursor: pointer;
}

.avatar-item:hover .avatar-preview {
  border: 2px solid #000;
}

.avatar-preview {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ddd;
}
.avatar-box {
  border-radius: 50%;
  width: 60px;
  height: 60px;
}

.avatar-box:has(.error) {
  outline: 1px solid red;

}


.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.avatar-preview {
  width: 80px;
  height: 80px;
}

/*MODAL */

/* Modal Styles */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 60px;
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto;
  padding: 40px;
  border: 1px solid #888;
  max-width: 500px;
  position: relative;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  right: 20px;
  top: 5px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

</style>