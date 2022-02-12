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
            <data-table v-bind="parametersTable" @actionTriggered="handleAction" />
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
import store from "@/store";

export default {
  name: "device",
  computed: {
    ...mapGetters(["devices"]),
    parametersTable() {
      return {
        data: [
          {
            no: '1',
            name: 'Apple',
            type: 'A-Type',
            color: 'Black',
            price: '$1 000'
          },
          {
            no: '2',
            name: 'Apple',
            type: 'B-Type',
            color: 'Gold',
            price: '$2 000'
          }
        ],
        columns: [
          {
            key: "no"
          },
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
            sortable: false
          }
        ],
        showEntriesInfo: false
      };
    }
  },
  methods: {
    handleAction(actionName, data) {
      console.log(actionName, data);
    }
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