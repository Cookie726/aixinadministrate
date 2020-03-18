export default {
    namespaced: true,
    state: {
        get userInfo() {
            let userInfo = JSON.parse(localStorage.getItem("userInfo"))
            if (!userInfo) {
                localStorage.setItem("userInfo", JSON.stringify({
                    name: ""
                }))
                userInfo = {
                    name: ""
                }
            }
            return userInfo
        },

        set userInfo(val) {
            localStorage.setItem("userInfo", JSON.stringify(val))
        }
    },
    mutations: {
        LOGIN(state, val) {
            state.userInfo = val
        },
        LOGOUT(state) {
            state.userInfo = {}
        }
    }
}