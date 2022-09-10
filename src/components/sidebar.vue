<template>
    <aside>
        <div class="logo">
            <img src="https://www.pngmart.com/files/22/Sad-Cat-Meme-Download-PNG-Image.png" alt="bruh" srcset="">
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle">
                <span class="material-icons"></span>
            </button>
        </div>
    </aside>
</template>

<script setup>

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

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>