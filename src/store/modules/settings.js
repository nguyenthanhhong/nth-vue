import variables from '@/assets/styles/element-variables.scss'
import leftMenuList from './menu'

const state = {
    leftPanelCollapse: false,
    fontSize: 'default',
    themeColor: variables.theme,
    language: 'en',
    leftMenuList: leftMenuList
}

//setter methods for state
const mutations = {
    TOGGLE_LEFTPANEL: state => {
        state.leftPanelCollapse = !state.leftPanelCollapse
    },
    SET_FONT_SIZE: (state, size) => {
        state.fontSize = size
    },    
    SET_LANGUAGE: (state, language) => {
        state.language = language
    }
}

const actions = {
    toggleLeftPanel({ commit }) {
        commit('TOGGLE_LEFTPANEL')
    },
    setFontSize({ commit }, size) {
        commit('SET_FONT_SIZE', size)
    },    
    setLanguage({ commit }, language) {
        commit('SET_LANGUAGE', language)
    },
}

const getters = {
    leftPanelCollapse: state => state.leftPanelCollapse,
    fontSize: state => state.fontSize,
    themeColor: state => state.themeColor,
    language: state => state.language,
    leftMenuList: state => state.leftMenuList
}


const settings = {
    nammespaced: true,
    state,
    mutations,
    actions,
    getters,
    render: h => h(settings)

}

export default settings;