import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'

const eliseDarkTheme = {
    name: 'eliseDarkTheme',
    dark: true,
    colors: {
        background: '#383636',
        surface: '#464040',
        'surface-bright': '#4D4D4D',
        'surface-light': '#5A5A5A',
        'surface-variant': '#000000',
        'surface-variant': '189,189,189',
        'on-surface-variant': '#383636',
        primary: '#1867C0',
        'primary-darken-1': '#1F5592',
        secondary: '#48A9A6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
    variables: {
        'border-color': '#FFFFFF',
        'border-opacity': 0.12,
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.60,
        'disabled-opacity': 0.38,
        'idle-opacity': 0.04,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.08,
        'activated-opacity': 0.12,
        'pressed-opacity': 0.12,
        'dragged-opacity': 0.08,
        // 'theme-kbd': '#212529',
        // 'theme-on-kbd': '#FFFFFF',
        // 'theme-code': '#F5F5F5',
        // 'theme-on-code': '#000000',
    }
}


export default createVuetify({
    components,
    directives,
    blueprint: md3,
    defaultTheme: 'eliseDarkTheme',
    themes: {
        eliseDarkTheme,
    },
    defaults: {
        global: {
            ripple: false,
        },
        VSheet: {
            elevation: 0,
            backgroundColor: 'surface',
        },
        VCard: {
            // VBtn: { variant: 'outlined' },
            elevation: 6,
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
            fa,
        },
    },
})
