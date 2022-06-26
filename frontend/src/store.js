import { createStore } from "vuex";
import { getProducts, createProduct, deleteProduct } from "./fetcher";

export const store = createStore({
    state () {
        return {
            loading: false,
            errorMessage: '',
            productList: []
        }
    },
    mutations: {
        setProduct: (state, payload) => {
          state.productList = payload
        },
        setLoading: (state, payload) => {
          state.loading = payload
        },
        createProduct: (state, payload) => {
            state.productList.push(payload)
        },
        setErrorMessage: (state, payload) => {
            state.errorMessage = payload
        },
        deleteProduct: (state, payload) => {
            state.productList.splice(state.productList.findIndex(i => i._id === payload._id), 1)
        }
    },
    actions: {
        setProduct: async ({ commit, dispatch }) => {
            dispatch('setLoading', true)
            try {
                const response = await getProducts()
        
                if (response.status === 200) {
                    const data = await response.json()
                    console.log(data)
                    commit('setProduct', data)
                }
                else {
                    dispatch('setErrorMessage', await response.text())
                }
            }
            catch (e) {
                dispatch('setErrorMessage', e.message)
            }
            finally {
                dispatch('setLoading', false)
            }
        },
        setLoading: (context, payload) => {
            context.commit('setLoading', payload)
        },
        setErrorMessage: (context, payload) => {
            context.commit('setErrorMessage', payload)
        },
        deleteProduct: async ({ commit, dispatch }, payload) => {
            console.log(payload)
            dispatch('setLoading', true)
            try {
                const response = await deleteProduct(payload._id)
                if (response.status === 200) {
                    commit ('deleteProduct', payload)
                }
                else {
                    dispatch('setErrorMessage', await response.text())
                }
            } catch(e) {
                dispatch('setErrorMessage', e.message)
            }
            finally {
                dispatch ('setLoading', false)
            }
        },
        createProduct: async({ commit, dispatch }, payload) => {
            dispatch('setLoading', true)
            try{
                const response = await createProduct(payload)
                if (response.status === 201){
                    const data = await response.json()
                    commit('createProduct', data)
                }
                else {
                    dispatch('setErrorMessage', await response.text())
                }
            }
            catch(error) {
                dispatch('setErrorMessage', error.message)
            }
            finally {
                dispatch('setLoading', false)
            }
        },
    },
    getters: {
        productList(state) {
            return state.productList
        },
        errorMessage(state) {
            return state.errorMessage
        },
        loading(state) {
            return state.loading
        }
    },
})

