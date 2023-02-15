<template>
  <div class="search">
    <div :class="[ !isFocus ? 'search__input-container' : 'search__input-container--focus']">
      <input
        type="text"
        :placeholder="placeholder"
        ref = "input"
        @keydown.enter="searchHandler"
        @focus="focusHandler"
        @blur="blurHandler"
      />
      <span @click="searchHandler">
        <SearchIcon/>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">

import {
  withDefaults, defineProps, defineEmits, ref, Ref,
} from 'vue';
import { useRouter } from 'vue-router';
import SearchIcon from '../icons/SearchIcon.vue';

interface Props {
  placeholder: string
  width: string
  height: string
}

interface IData {
  value: {
    value: string
  }
}

withDefaults(defineProps<Props>(), {
  placeholder: 'placeholder',
  width: '300px',
  height: '300px',
});

const router = useRouter();
const isFocus: Ref<Boolean> = ref(false);
const input: IData = ref({ value: '' });

function focusHandler() {
  isFocus.value = true;
}

function blurHandler() {
  isFocus.value = false;
}

const emit = defineEmits([
  'search',
]);

function searchHandler() {
  const { value } : IData = input;
  if (value.value !== '') {
    emit('search', value.value);
    router.push('/search');
  }
}

</script>

<style lang="scss" scoped>

.search {
  &__input-container {
    display: flex;
    border: 1px solid $color-black;
    border-radius: 30px;
    padding: 0 10px;
    gap: 4px;

    &--focus {
      @extend .search__input-container;
      border: 1px solid $color-primary;
    }

    input {
      border: 0px;
      flex-grow: 1;
    }
    input:focus {
      outline: none;
    }
    span {
      margin: 2px;
    }
  }
}

</style>
