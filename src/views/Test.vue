<template>
  <div class="hello">
    <h1 :style="{color: inputValue.length > 2 ? 'red' : 'green'}">hello test</h1>
    <div class="form-control">
      <input type="text"
       :placeholder="myPlaceholder"
       v-model = "inputValue"
       @keypress.enter="addNote"
      >
      <button @click="addNote">add notes</button>

      <ul v-if="notes.length">
        <li style="display: block" v-for="(note, index) in notes" :key="index">
<!--          <span :class="note.length > 2 ? 'red' : 'bold'">{{note.toUpperCase()}}</span>-->
          <span :class="{
            'red': note.length > 2,
            'bold' : note.length > 2 & note.length < 5
          }">{{note.toUpperCase()}}</span>


           <button @click="removeNote(index )"> delete</button>
        </li>

        <li>{{notes.length}} --- {{doubleCountComputed}}</li>
      </ul>

      <div v-else>not notes</div>

      <p v-text="myPlaceholder"></p>
      <p v-once>{{myPlaceholder}}</p>
      <p v-pre>{{myPlaceholder}}</p>
      <button @click="myPlaceholder = 'test text'">v-once test in  click</button>

      <h2>{{ $t('message.text-info') }}</h2>
      <div v-html="myHTML"></div>

      <input type="text" @keyup.enter="addNum" ref="myInput">
      <ul>
        <li v-for="(number,idx) in numbers" @click="numbers.splice(idx,1)" :key="number">
          {{number}}
          <input type="text" @click.stop>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      myPlaceholder: 'add text',
      inputValue : '',
      notes: [
          'note-1',
          'note-2',
      ],
      numbers: [1,2,3,4,5]
    }
  },
  methods: {
    addNote() {
      if(this.inputValue !== '') {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }

    },
    removeNote(index) {
      this.notes.splice(index, 1)
    },

    // doubleCount() {
    //   console.log('doubleCount')
    //   return this.notes.length * 2
    // },

    addNum() {
      this.numbers.push(this.$refs.myInput.value)
    }

  },
  computed: {
    doubleCountComputed() {
      console.log('doubleCountComputed')
      return this.notes.length * 2
    },

    myHTML() {
      return `<h2>${this.myPlaceholder}</h2>`;
    },

    eventItems() {
      return this.numbers.filter((item)=> item % 2 === 0)
    },


  },
  watch: {
    inputValue(value) {
      if(value.length > 5) {
        this.inputValue = '';
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  background: $bgColor2;
}


.bold {
  font-weight: bold;
}

.red {
  color: red !important;
}
</style>
