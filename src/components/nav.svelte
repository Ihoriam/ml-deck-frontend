<script>
    export let isLogged = false;
</script>

<nav class="pt-6 flex justify-between items-center w-full">
    <div class="flex justify-start  items-center ">
        <div>
            <a class="mx-4 text-lg" href="/">
                <span>ML Deck</span>
                <span aria-hidden="true" role="img">🃏</span>
            </a>
        </div>
        <span aria-hidden="true" class="hidden sm:block sm:h-6 sm:w-px sm:bg-gray-100"></span>
        <div>
            <a class="content mx-4 text-lg" href="/about">
                About
            </a>
        </div>
    </div>
    <div class="flex justify-end  items-center ">
        <div class=" {isLogged ? 'hidden' : ''}">
            <a class="mx-4 text-lg " href="/login">
                Sign in
            </a>
        </div>
        <div class="{isLogged ? 'hidden' : ''}">
            <a class="mx-4 text-lg " href="/login">
                Sign up
            </a>
        </div>
        <div class="{isLogged ? '' : 'hidden'} flex w-10 h-10 border-gray-200 overflow-hidden border border-black rounded-full items-center justify-center">
            <a href="/profile">
                <div>🤡</div>
            </a>
        </div>
    </div>
</nav>
