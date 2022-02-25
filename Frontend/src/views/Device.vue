<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="page-header">
        <h3 class="page-title">
          <span class="page-title-icon bg-gradient-primary text-white me-2">
            <i class="mdi mdi-format-list-bulleted menu-icon"></i>
          </span> Devices
        </h3>
        <nav aria-label="breadcrumb">
          <ul class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              <span></span>Overview
              <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <router-link class="text-google" :to="{ name: 'device-add' }">
              <i class="mdi mdi-plus-box mdi-36px"></i>
            </router-link>
            <data-table v-bind="parametersTable" />
            <DeviceModal :device="device" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import { mapGetters } from "vuex";
import { GET_DEVICES } from "@/store/actions.type";
import ActionButton from "@/components/ActionButton";
import DeviceModal from "@/components/DeviceModal";

export default {
  name: "device",
  components: {
    ActionButton,
    DeviceModal
  },
  computed: {
    ...mapGetters(["devices", "device"]),
    parametersTable() {
      return {
        data: this.devices,
        columns: [
          {
            key: "name"
          },
          {
            key: "type"
          },
          {
            key: "price"
          },
          {
            key: "color"
          },
          {
            key: "action",
            sortable: false,
            component: ActionButton
          }
        ],
        showEntriesInfo: false
      };
    }
  },
  mounted() {
    this.$store.dispatch(GET_DEVICES);
  }
};
</script>

<style>
.data-table-pagination {
  grid-area: download;
}
.data-table-pagination .pagination-search {
  display: none;
}
.data-table-export-data {
  grid-area: unset;
  margin-top: unset;
}
.data-table-export-data .form-control {
  width: auto;
}
</style>