import { createStore } from "vuex";
import { getProducts, createProduct, deleteProduct } from "./fetcher";

export const store = createStore({
    state () {
        return {
            loading: false,
            errorMessage: '',
            productList: [
                {
                    name: 'Наименование товара',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    price: 10000,
                    image: 'product.png'
                },
                {
                    name: 'Наименование товара',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    price: 10000,
                    image: 'product.png'
                },
                {
                    name: 'Наименование товара',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    price: 10000,
                    image: 'product.png'
                },
                {
                    name: 'Наименование товара',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    price: 10000,
                    image: 'product.png'
                },        {
                    name: 'Наименование товара',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    price: 10000,
                    image: 'product.png'
                },        {
                    name: 'Наименование товара',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    price: 10000,
                    image: 'product.png'
                },
                {
                    name: 'Наименование товара',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    price: 10000,
                    image: 'product.png'
                },
                {
                    name: 'Наименование товара',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    price: 10000,
                    image: 'product.png'
                },
                {
                    name: 'Наименование товара',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    price: 10000,
                    image: 'product.png'
                }
            ]
        }
    },
    mutations: {
        setProduct: (state, payload) => {
          state.productList = payload
        },
        setLoading: (state, payload) => {
          state.loading = payload
        },
        setErrorMessage: (state, payload) => {
            state.errorMessage = payload
        }
    },
    actions: {
        setProduct: async ({ commit, dispatch }) => {
            dispatch('setLoading', true)
            try {
                const response = await getProducts()
                if (response.status === 200) {
                    const data = await response.json()
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
            dispatch('setLoading', true)
            try {
                const response = await deleteProduct(state.product[payload.id])
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
                if (response.status === 200){
                    const data = await response.json()
                    commit('createProduct', data)
                }
                else {
                    dispatch('setErrorMessage', await response.text())
                }
            }
            catch(e) {
                dispatch('setErrorMessage', e.message)
            }
            finally {
                dispatch('setLoading', false)
            }
        },
    },
    getters: {
        productList(state) {
            return state.productList
        }
    },
})

