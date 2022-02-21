import { DevicesService } from "@/common/api.service";
import {
    DEVICE_ADD,
    GET_DEVICES,
    SET_DEVICES,
    VIEW_DEVICE,
    UPDATE_DEVICE,
    DELETE_DEVICE
} from "./actions.type";
import { SET_ERROR, GET_DEVICE } from "./mutations.type";

const state = {
    devices: [],
    device: {},
};

const getters = {
    devices(state) {
        return state.devices;
    },
    device(state) {
        return state.device;
    }
};

const actions = {
    [DEVICE_ADD](context, credentials) {
        return new Promise((resolve, reject) => {
            DevicesService.create(credentials)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    context.commit(SET_ERROR, response.data.errors);
                    reject(response);
                });
        });
    },
    [GET_DEVICES]({ commit }) {
        return new Promise((resolve, reject) => {
            DevicesService.get()
                .then(({ data }) => {
                    commit(SET_DEVICES, data);
                    resolve(data);
                })
                .catch(({ response }) => {
                    context.commit(SET_ERROR, response.data.errors);
                    reject(response);
                });
        });
    },
    [VIEW_DEVICE](context, slug) {
        return new Promise((resolve, reject) => {
            DevicesService.view(slug)
                .then(({ data }) => {
                    context.commit(GET_DEVICE, data);
                    resolve(data);
                })
                .catch(({ response }) => {
                    context.commit(SET_ERROR, response.data.errors);
                    reject(response);
                });
        });
    },
    [UPDATE_DEVICE](context, slug) {
        return new Promise((resolve, reject) => {
            DevicesService.view(slug)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    context.commit(SET_ERROR, response.data.errors);
                    reject(response);
                });
        });
    },
    [DELETE_DEVICE](context, slug) {
        return new Promise((resolve, reject) => {
            DevicesService.delete(slug)
                .then(({ data }) => {
                    console.log("Res:", data)
                    context.commit(SET_DEVICES, data)
                    resolve(data);
                })
                .catch(({ response }) => {
                    context.commit(SET_ERROR, response.data.errors);
                    reject(response);
                });
        });
    }
};

const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error;
    },
    [SET_DEVICES](state, devices) {
        state.devices = devices;
    },
    [GET_DEVICE](state, device) {
        state.device = device;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};