<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">
            <img src="https://www.pngmart.com/files/22/Sad-Cat-Meme-Download-PNG-Image.png" alt="bruh" srcset="">
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">>></span>
            </button>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(false)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
}
</script>

<style lang="scss">
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .logo{
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle{
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: --var(--light);
            }
        }
    }

    &.is-expanded {
        width: 300px;

        .menu-toggle-wrap {
            top: -3rem;
            .menu-toggle {
                transform: rotate(-180deg);
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>