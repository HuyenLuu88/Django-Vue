<template>
  <div class="action-buttons">
    <button class="btn btn-sm btn-outline-success mx-1" @click="handleAction('view')">
      <i class="mdi mdi mdi-eye"></i>
    </button>
    <button class="btn btn-sm btn-outline-primary" @click="handleAction('edit')">
      <i class="mdi mdi mdi-pencil"></i>
    </button>
    <button class="btn btn-sm btn-outline-dark mx-1" @click="handleAction('delete')">
      <i class="mdi mdi mdi-delete"></i>
    </button>
  </div>
</template>
<script>
import {
  VIEW_DEVICE,
  UPDATE_DEVICE,
  DELETE_DEVICE
} from "@/store/actions.type";

export default {
  name: "ActionButton",
  methods: {
    handleAction(actionName) {
      if (actionName == "view") {
        this.$store.dispatch(VIEW_DEVICE, this.data.id);
        this.$root.$cuteModal.open('example');
      } else if (actionName == "edit") {
        this.$store.dispatch(UPDATE_DEVICE, this.data.id);
      } else {
        this.$store.dispatch(DELETE_DEVICE, this.data.id);
      }
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>