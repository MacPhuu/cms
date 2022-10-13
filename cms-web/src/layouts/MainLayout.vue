<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar class="flex row reverse">
        <q-icon class="text-black" name="account_circle" size="30px" />
        <span class="text-black q-mr-sm">Admin</span>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="bg-secondary"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      width="240"
    >
      <q-list>
        <q-item-label header class="flex items-center">
          <q-avatar size="38px">
            <img src="../assets/logo_main_layout.svg" />
          </q-avatar>
          <span class="text-h5 text-white q-ml-md">Sơn chu</span>
        </q-item-label>

        <EssentialLink
          v-for="(link, index) in essentialLinks"
          :key="link.title"
          v-bind="link"
          @click="handler(index)"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { usePagesStore } from "stores/pages";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const store = usePagesStore();

    return {
      essentialLinks: computed(() => store.pagesList),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  methods: {
    handler(index) {
      for (var i of this.essentialLinks) {
        console.log(i);
        i.active = false;
      }
      this.essentialLinks[index].active = true;
    },
  },
});
</script>
