<template>
  <div>
    <b-modal
      id="modal-scoped"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >      
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-row class="mb-1 mt-3">
          <b-col>
            <b-form-group
              label="Name"
              label-for="name-input"
              invalid-feedback="Name is required"
              :state="nameState"
            >
              <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="Name"
              label-for="name-input"
              invalid-feedback="Name is required"
              :state="nameState"
            >
              <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="mb-1">
          <b-col>
            <b-form-group
              label="Name"
              label-for="name-input"
              invalid-feedback="Name is required"
              :state="nameState"
            >
              <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="Name"
              label-for="name-input"
              invalid-feedback="Name is required"
              :state="nameState"
            >
              <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "DeviceModal",
  data() {
    return {
      name: "",
      nameState: null,
      submittedNames: []
    };
  },
  props: ['device'],
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    }
  }
};
</script>
<style>
.modal-backdrop {
  opacity: 0.5;
}
</style>