<script>
    import Nav from '../components/nav.svelte';
    import Footer from '../components/footer.svelte';
</script>


<div class="flex flex-col h-screen justify-between pl-8 pr-8 max-w-6xl mx-auto">
    <Nav/>
    <div class="mb-auto">
        <slot/>
    </div>
    <Footer/>
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
