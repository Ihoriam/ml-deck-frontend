<script>
    export let isLogged = false;
</script>

<nav class="pt-6 flex justify-between items-center w-full">
    <div class="inline-flex gap-1.5 items-center ">
        <div>
            <a class="text-lg font-bold" href="/">
                <span>ML Deck</span>
                <span aria-hidden="true" role="img">🃏</span>
            </a>
        </div>
        <span aria-hidden="true" class="hidden sm:block sm:h-6 sm:w-px sm:bg-gray-100"></span>
        <div class="inline-flex gap-3.5 items-center text-base">
            <div>
                <a class="content" href="/about">
                    About
                </a>
            </div>
            <div>
                <a class="content" href="/resources">
                    Resources
                </a>
            </div>
            <div>
                <a class="content" href="/docs">
                    Docs
                </a>
            </div>
        </div>
    </div>
    <div class="inline-flex gap-3.5 items-center text-base justify-end">
        <div class=" {isLogged ? 'hidden' : ''}">
            <a class="text-lg " href="/signIn">
                Sign in
            </a>
        </div>
        <div class="{isLogged ? 'hidden' : ''}">
            <a class="text-lg " href="/signIn">
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
