<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :viewBox="viewBox"
      :aria-labelledby="iconName"
    >
      <title :id="iconName" lang="en">{{ iconName }}</title>
      <g :fill="fill">
        <slot />
      </g>
    </svg>
  </template>
<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';

interface Props {
  viewBox: string
  iconName: string
  width: string
  height: string
  fill: string
}

withDefaults(defineProps<Props>(), {
  viewBox: '0 0 24 24',
  iconName: '',
  width: '18px',
  height: '18px',
  fill: 'currentColor',
});

</script>
