<script lang="ts">
    import Layout from "./lib/Layout.svelte";
</script>

<Layout />

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    :global(*) {
        box-sizing: inherit;
    }

    :global(body) {
        width: 60rem;
        position: relative;
        margin: 0 auto;
        box-sizing: border-box;
        font-family: Roboto, "Helvetica Neue", sans-serif;
    }
</style>
