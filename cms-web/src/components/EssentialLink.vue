<template>
  <q-item
    clickable
    tag="a"
    :to="direct"
    class="text-white"
    active-class="bg-primary"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label style="font-size: 18px">{{ title }}</q-item-label>
    </q-item-section>

    <span
      v-if="active"
      style="
        position: absolute;
        left: 229px;
        top: 15px;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid white;
      "
    ></span>
  </q-item>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    direct: {
      type: String,
      default: "/",
    },

    icon: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
