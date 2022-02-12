<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="page-header">
        <h3 class="page-title">
          <span class="page-title-icon bg-gradient-primary text-white me-2">
            <i class="mdi mdi-format-list-bulleted menu-icon"></i>
          </span> Add a device
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
      <div class="col-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body col-8 mx-auto">
            <h2 class="card-title text-center mt-3">Please Enter informations</h2>
            <ul v-if="errors" class="error-messages">
              <li class="bg-white text-danger" v-for="(v, k) in errors" :key="k">{{ k }} {{ v | error }}</li>
            </ul>
            <form class="forms-sample mt-5" v-on:submit.prevent="onSubmit">
              <div class="form-group">
                <label for="form-control">Name</label>
                <input type="text" class="form-control" v-model="name" placeholder="Device Name" />
              </div>
              <div class="form-group">
                <label for="form-control">Type</label>
                <input type="text" class="form-control" v-model="type" placeholder="Device Type" />
              </div>
              <div class="form-group">
                <label for="form-control">Price</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="price"
                  placeholder="Device Price"
                />
              </div>
              <div class="form-group">
                <label for="form-control">Color</label>
                <input type="text" class="form-control" v-model="color" placeholder="Device Color" />
              </div>
              <button type="submit" class="btn btn-gradient-primary me-2 mt-5">Submit</button>
              <button class="btn btn-gradient-secondary mt-5" @click="back">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { DEVICE_ADD } from "@/store/actions.type";

export default {
  name: "deviceEdit",
  methods: {
    back() {
      window.history.back();
    },
    onSubmit() {
      this.$store
        .dispatch(DEVICE_ADD, {
          name: this.name,
          type: this.type,
          price: this.price,
          color: this.color
        })
        .then(() => this.$router.push({ name: "device" }));
    }
  },
  data() {
    return {
      name: "",
      type: "",
      price: "",
      color: ""
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
