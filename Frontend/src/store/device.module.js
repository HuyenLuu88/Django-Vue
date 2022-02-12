import ApiService from "@/common/api.service";
import {
    DEVICE_ADD,
    GET_DEVICES,
    SET_DEVICES
} from "./actions.type";
import { SET_ERROR } from "./mutations.type";

const state = {
    devices: []
};

const getters = {
    devices(state) {
        return state.devices;
    }
};

const actions = {
    [DEVICE_ADD](context, credentials) {
        return new Promise((resolve, reject) => {
            ApiService.post("device/add", { device: credentials })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    context.commit(SET_ERROR, response.data.errors);
                    reject(response);
                });
        });
    },
    [GET_DEVICES]({commit}) {
        return new Promise((resolve, reject) => {            
            ApiService.get("devices")
                .then(({ data }) => {
                    console.log("REs:", JSON.stringify(data))
                    commit(SET_DEVICES, data.devices);
                    resolve(data);
                })
                .catch(({ response }) => {
                    console.log("Err:", response)
                    commit(SET_ERROR, response.data.errors);
                    reject(response);
                });
        });
    },
};

const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error;
    },
    [SET_DEVICES](state, devices) {
        state.devices = devices;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};