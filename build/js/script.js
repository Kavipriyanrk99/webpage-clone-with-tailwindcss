const initApp = () => {
    const website_menu_btn = document.getElementById("website-menu-btn");
    const email_menu_btn = document.getElementById("email-menu-btn");
    const sell_menu_btn = document.getElementById("sell-menu-btn");
    const resources_menu_btn = document.getElementById("resources-menu-btn");  

    const website_menu = document.getElementById("website-menu");
    const email_menu = document.getElementById("email-menu");
    const sell_menu = document.getElementById("sell-menu");
    const resources_menu = document.getElementById("resources-menu");

    const toggleMenu = (event) => {
        if(event.target.name === "website-menu-btn"){
            if(website_menu.classList.contains('hidden')){
                website_menu_btn.classList.add('border-davygray');
                website_menu_btn.classList.remove('border-white');
                website_menu_btn.classList.add('bg-isabelline');

                website_menu.classList.remove('hidden');
                website_menu.classList.add('flex');
                email_menu.classList.add('hidden');
                sell_menu.classList.add('hidden');
                resources_menu.classList.add('hidden');

                email_menu_btn.classList.remove('border-davygray');
                email_menu_btn.classList.add('border-white');
                email_menu_btn.classList.remove('bg-isabelline');

                sell_menu_btn.classList.remove('border-davygray');
                sell_menu_btn.classList.add('border-white');
                sell_menu_btn.classList.remove('bg-isabelline');

                resources_menu_btn.classList.remove('border-davygray');
                resources_menu_btn.classList.add('border-white');
                resources_menu_btn.classList.remove('bg-isabelline');
            } else{
                website_menu.classList.add('hidden');

                website_menu_btn.classList.remove('border-davygray');
                website_menu_btn.classList.add('border-white');
                website_menu_btn.classList.remove('bg-isabelline');
            }
        } else if(event.target.name === "email-menu-btn"){
            if(email_menu.classList.contains('hidden')){
                email_menu_btn.classList.add('border-davygray');
                email_menu_btn.classList.remove('border-white');
                email_menu_btn.classList.add('bg-isabelline');

                email_menu.classList.remove('hidden');
                email_menu.classList.add('flex');
                website_menu.classList.add('hidden');
                sell_menu.classList.add('hidden');
                resources_menu.classList.add('hidden');

                website_menu_btn.classList.remove('border-davygray');
                website_menu_btn.classList.add('border-white');
                website_menu_btn.classList.remove('bg-isabelline');

                sell_menu_btn.classList.remove('border-davygray');
                sell_menu_btn.classList.add('border-white');
                sell_menu_btn.classList.remove('bg-isabelline');

                resources_menu_btn.classList.remove('border-davygray');
                resources_menu_btn.classList.add('border-white');
                resources_menu_btn.classList.remove('bg-isabelline');
            } else{
                email_menu.classList.add('hidden');

                email_menu_btn.classList.remove('border-davygray');
                email_menu_btn.classList.add('border-white');
                email_menu_btn.classList.remove('bg-isabelline');
            }
        } else if(event.target.name === "sell-menu-btn"){
            if(sell_menu.classList.contains('hidden')){
                sell_menu_btn.classList.add('border-davygray');
                sell_menu_btn.classList.remove('border-white');
                sell_menu_btn.classList.add('bg-isabelline');

                sell_menu.classList.remove('hidden');
                sell_menu.classList.add('flex');
                website_menu.classList.add('hidden');
                email_menu.classList.add('hidden');
                resources_menu.classList.add('hidden');

                website_menu_btn.classList.remove('border-davygray');
                website_menu_btn.classList.add('border-white');
                website_menu_btn.classList.remove('bg-isabelline');

                email_menu_btn.classList.remove('border-davygray');
                email_menu_btn.classList.add('border-white');
                email_menu_btn.classList.remove('bg-isabelline');

                resources_menu_btn.classList.remove('border-davygray');
                resources_menu_btn.classList.add('border-white');
                resources_menu_btn.classList.remove('bg-isabelline');
            } else{
                sell_menu.classList.add('hidden');

                sell_menu_btn.classList.remove('border-davygray');
                sell_menu_btn.classList.add('border-white');
                sell_menu_btn.classList.remove('bg-isabelline');
            }
        } else if(event.target.name === "resources-menu-btn"){
            if(resources_menu.classList.contains('hidden')){
                resources_menu_btn.classList.add('border-davygray');
                resources_menu_btn.classList.remove('border-white');
                resources_menu_btn.classList.add('bg-isabelline');

                resources_menu.classList.remove('hidden');
                resources_menu.classList.add('block');
                website_menu.classList.add('hidden');
                sell_menu.classList.add('hidden');
                email_menu.classList.add('hidden');

                website_menu_btn.classList.remove('border-davygray');
                website_menu_btn.classList.add('border-white');
                website_menu_btn.classList.remove('bg-isabelline');

                email_menu_btn.classList.remove('border-davygray');
                email_menu_btn.classList.add('border-white');
                email_menu_btn.classList.remove('bg-isabelline');

                sell_menu_btn.classList.remove('border-davygray');
                sell_menu_btn.classList.add('border-white');
                sell_menu_btn.classList.remove('bg-isabelline');
            } else{
                resources_menu.classList.add('hidden');

                resources_menu_btn.classList.remove('border-davygray');
                resources_menu_btn.classList.add('border-white');
                resources_menu_btn.classList.remove('bg-isabelline');
            }
        } else{
            website_menu.classList.add('hidden');
            email_menu.classList.add('hidden');
            sell_menu.classList.add('hidden');
            resources_menu.classList.add('hidden');

            website_menu_btn.classList.remove('border-davygray');
            website_menu_btn.classList.add('border-white');
            website_menu_btn.classList.remove('bg-isabelline');

            email_menu_btn.classList.remove('border-davygray');
            email_menu_btn.classList.add('border-white');
            email_menu_btn.classList.remove('bg-isabelline');

            sell_menu_btn.classList.remove('border-davygray');
            sell_menu_btn.classList.add('border-white');
            sell_menu_btn.classList.remove('bg-isabelline');

            resources_menu_btn.classList.remove('border-davygray');
            resources_menu_btn.classList.add('border-white');
            resources_menu_btn.classList.remove('bg-isabelline');
        }
        
    }

    document.addEventListener('click', (event) => toggleMenu(event))
}

document.addEventListener('DOMContentLoaded', initApp);