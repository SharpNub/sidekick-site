<!-- VERSION 0.0.1 -->
<!-- 
    Button File 
    - This file is used to create a button component that can be used throughout the application.
    - Customization features include:
        - theme: light (default), dark
        - variant: primary (default), secondary, accent, outline, disabled
        - size: medium (default), large, small
        - href: link to a page (optional, only if action is not provided)
        - newTab: open link in new tab (optional)
        - action: function to run on click (optional, only if href is not provided)
-->

<template>
        <NuxtLink v-if="href" :to="href" :target="newTab ? '_blank' : undefined" :class="classObject">
            <slot />
        </NuxtLink>
        <div v-else :onclick="action" :class="classObject" class="inline-block w-64 py-4 px-8 rounded-xl bg-action cursor-pointer box-shadow-lower ease duration-200 hover:box-shadow-both hover:bg-tertiary text-center text-shadow-none font-primary uppercase text-white font-bold">
            <slot />
        </div>
</template>

<script setup lang="ts">

const DEFAULT_THEME = 'light';
const DEFAULT_VARIANT = 'primary';
const DEFAULT_SIZE = 'medium';


const props = defineProps({
    theme: {
        type: String,
        default: DEFAULT_THEME
    },
    variant: {
        type: String,
        default: DEFAULT_VARIANT
    },
    size: {
        type: String,
        default: DEFAULT_SIZE
    },
    href: {
        type: String,
        default: null
    },
    newTab: {
        type: Boolean,
        required: false,
        default: false
    },
    action: {
        type: Function,
        default: () => {return null}
    }
})


const designs = {
    material: '',
    frictionless: 'inline-block w-64 py-4 px-8 rounded-xl cursor-pointer text-center text-shadow-none ease duration-200'
}
    // text-purple-900 bg-purple-200 hover:text-white hover:bg-purple-600

    // NOTE:
    // - they dont have a good way of managing the colors for the theme
    // - I dont have a good way of knowing what theme is active
    // - https://tailwindcss.nuxtjs.org/examples/dark-mode
const themeColors = {
    light: {
        primary:    'text-purple-900 bg-yellow-500 hover:bg-yellow-600',
        secondary:  'font-primary font-bold text-white uppercase bg-action hover:bg-tertiary box-shadow-lower hover:box-shadow-both',
        accent:     'text-white bg-purple-600 hover:bg-purple-500',
        outline:    '',
        disabled:   '',
        success:    '',
        warning:    '',
        error:      '',
        info:       ''
    },
    dark: {
        primary:    'text-purple-900 bg-yellow-500 hover:bg-yellow-600',
        secondary:  'font-primary font-bold text-white uppercase bg-action hover:bg-tertiary box-shadow-lower hover:box-shadow-both',
        accent:     'text-white bg-purple-600 hover:bg-purple-500',
        outline:    '',
        disabled:   '',
        success:    '',
        warning:    '',
        error:      '',
        info:       ''
    },
}
const sizeStyles = {
    small: 'px-5 py-2.5 text-sm',
    medium: 'px-8 py-3.5 text-base',
    large: 'px-10 py-4 text-lg',
}

// variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         icon: "h-10 w-10",
//       },

const isActive = ref(true)
const error = ref(null)



const classObject = computed(() => {
    let themeColorHolder = themeColors[props.theme] ? themeColors[props.theme] : themeColors[DEFAULT_THEME]; // get the theme style

    let colorClasses = themeColorHolder[props.variant] ? themeColorHolder[props.variant] : themeColorHolder[DEFAULT_VARIANT]; // get the variant classes for the theme
    let sizeClasses = sizeStyles[props.size] ? sizeStyles[props.size] : sizeStyles[DEFAULT_SIZE]; // get the size classes

    let classOutput: string = '';
    return classOutput.concat(colorClasses, ' ', sizeClasses);
});

</script>
