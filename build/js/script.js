const initApp = () => {
    const website_menu_btn = document.getElementById("website-menu-btn");
    const email_menu_btn = document.getElementById("email-menu-btn");
    const sell_menu_btn = document.getElementById("sell-menu-btn");
    const resources_menu_btn = document.getElementById("resources-menu-btn");  

    const website_menu = document.getElementById("website-menu");
    const email_menu = document.getElementById("email-menu");
    const sell_menu = document.getElementById("sell-menu");
    const resources_menu = document.getElementById("resources-menu");

    const mobile_menu_btn = document.getElementById("mobile-menu-btn");
    const mobile_menu = document.getElementById("mobile-menu");
    const mobile_menu_label = document.getElementById("mobile-menu-label");

    const website_mobile_btn = document.getElementById("website-mobile-btn");
    const email_mobile_btn = document.getElementById("email-mobile-btn");
    const sell_mobile_btn = document.getElementById("sell-mobile-btn");
    const resources_mobile_btn = document.getElementById("resources-mobile-btn");

    const website_mobile_menu = document.getElementById("website-mobile-menu");
    const email_mobile_menu = document.getElementById("email-mobile-menu");
    const sell_mobile_menu = document.getElementById("sell-mobile-menu");
    const resources_mobile_menu = document.getElementById("resources-mobile-menu");

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

    const toggleMobileMenu = (event) => {
        mobile_menu.classList.toggle('hidden');
    }

    const toggleWebsiteMobileMenu = () => {
        website_mobile_menu.classList.toggle('hidden');

        email_mobile_menu.classList.add('hidden');
        sell_mobile_menu.classList.add('hidden');
        resources_mobile_menu.classList.add('hidden');
    }

    const toggleEmailMobileMenu = () => {
        email_mobile_menu.classList.toggle('hidden');

        website_mobile_menu.classList.add('hidden');
        sell_mobile_menu.classList.add('hidden');
        resources_mobile_menu.classList.add('hidden');
    }

    const toggleSellMobileMenu = () => {
        sell_mobile_menu.classList.toggle('hidden');

        website_mobile_menu.classList.add('hidden');
        email_mobile_menu.classList.add('hidden');
        resources_mobile_menu.classList.add('hidden');
    }

    const toggleResourcesMobileMenu = () => {
        resources_mobile_menu.classList.toggle('hidden');

        website_mobile_menu.classList.add('hidden');
        email_mobile_menu.classList.add('hidden');
        sell_mobile_menu.classList.add('hidden');
    }

    document.addEventListener('click', (event) => toggleMenu(event));
    mobile_menu_btn.addEventListener('click', (event) => toggleMobileMenu(event));
    mobile_menu_label.addEventListener('click', (event) => toggleMobileMenu(event));
    website_mobile_btn.addEventListener('click', toggleWebsiteMobileMenu);
    email_mobile_btn.addEventListener('click', toggleEmailMobileMenu);
    sell_mobile_btn.addEventListener('click', toggleSellMobileMenu);
    resources_mobile_btn.addEventListener('click', toggleResourcesMobileMenu);


    const platform = document.getElementById("platform");
    const support = document.getElementById("support");
    const features = document.getElementById("features");
    const compare = document.getElementById("compare");
    const resources = document.getElementById("resources-a");
    const podia = document.getElementById("podia");
    const social = document.getElementById("social");

    const platform_menu = document.getElementById("platform-menu");
    const support_menu = document.getElementById("support-menu");
    const features_menu = document.getElementById("features-menu");
    const compare_menu = document.getElementById("compare-menu");
    const resources_a_menu = document.getElementById("resources-a-menu");
    const podia_menu = document.getElementById("podia-menu");
    const social_menu = document.getElementById("social-menu");

    const platformToggle = () => {
        platform_menu.classList.toggle('hidden');
        platform_menu.classList.toggle('flex');

        support_menu.classList.remove('flex');
        features_menu.classList.remove('flex');
        compare_menu.classList.remove('flex');
        resources_a_menu.classList.remove('flex');
        podia_menu.classList.remove('flex');
        social_menu.classList.remove('flex');

        support_menu.classList.add('hidden');
        features_menu.classList.add('hidden');
        compare_menu.classList.add('hidden');
        resources_a_menu.classList.add('hidden');
        podia_menu.classList.add('hidden');
        social_menu.classList.add('hidden');

    }

    const supportToggle = () => {
        support_menu.classList.toggle('hidden');
        support_menu.classList.toggle('flex');

        platform_menu.classList.remove('flex');
        features_menu.classList.remove('flex');
        compare_menu.classList.remove('flex');
        resources_a_menu.classList.remove('flex');
        podia_menu.classList.remove('flex');
        social_menu.classList.remove('flex');

        platform_menu.classList.add('hidden');
        features_menu.classList.add('hidden');
        compare_menu.classList.add('hidden');
        resources_a_menu.classList.add('hidden');
        podia_menu.classList.add('hidden');
        social_menu.classList.add('hidden');
    }

    const featuresToggle = () => {
        features_menu.classList.toggle('hidden');
        features_menu.classList.toggle('flex');

        platform_menu.classList.remove('flex');
        support_menu.classList.remove('flex');
        compare_menu.classList.remove('flex');
        resources_a_menu.classList.remove('flex');
        podia_menu.classList.remove('flex');
        social_menu.classList.remove('flex');

        platform_menu.classList.add('hidden');
        support_menu.classList.add('hidden');
        compare_menu.classList.add('hidden');
        resources_a_menu.classList.add('hidden');
        podia_menu.classList.add('hidden');
        social_menu.classList.add('hidden');
    }

    const compareToggle = () => {
        compare_menu.classList.toggle('hidden');
        compare_menu.classList.toggle('flex');

        platform_menu.classList.remove('flex');
        support_menu.classList.remove('flex');
        features_menu.classList.remove('flex');
        resources_a_menu.classList.remove('flex');
        podia_menu.classList.remove('flex');
        social_menu.classList.remove('flex');

        platform_menu.classList.add('hidden');
        support_menu.classList.add('hidden');
        features_menu.classList.add('hidden');
        resources_a_menu.classList.add('hidden');
        podia_menu.classList.add('hidden');
        social_menu.classList.add('hidden');
    }

    const resourcesToggle = () => {
        resources_a_menu.classList.toggle('hidden');
        resources_a_menu.classList.toggle('flex');

        platform_menu.classList.remove('flex');
        support_menu.classList.remove('flex');
        features_menu.classList.remove('flex');
        compare_menu.classList.remove('flex');
        podia_menu.classList.remove('flex');
        social_menu.classList.remove('flex');

        platform_menu.classList.add('hidden');
        support_menu.classList.add('hidden');
        features_menu.classList.add('hidden');
        compare_menu.classList.add('hidden');
        podia_menu.classList.add('hidden');
        social_menu.classList.add('hidden');
    }

    const podiaToggle = () => {
        podia_menu.classList.toggle('hidden');
        podia_menu.classList.toggle('flex');

        platform_menu.classList.remove('flex');
        support_menu.classList.remove('flex');
        features_menu.classList.remove('flex');
        compare_menu.classList.remove('flex');
        resources_a_menu.classList.remove('flex');
        social_menu.classList.remove('flex');

        platform_menu.classList.add('hidden');
        support_menu.classList.add('hidden');
        features_menu.classList.add('hidden');
        compare_menu.classList.add('hidden');
        resources_a_menu.classList.add('hidden');
        social_menu.classList.add('hidden');
    }

    const socialToggle = () => {
        social_menu.classList.toggle('hidden');
        social_menu.classList.toggle('flex');

        platform_menu.classList.remove('flex');
        support_menu.classList.remove('flex');
        features_menu.classList.remove('flex');
        compare_menu.classList.remove('flex');
        resources_a_menu.classList.remove('flex');
        podia_menu.classList.remove('flex');

        platform_menu.classList.add('hidden');
        support_menu.classList.add('hidden');
        features_menu.classList.add('hidden');
        compare_menu.classList.add('hidden');
        resources_a_menu.classList.add('hidden');
        podia_menu.classList.add('hidden');
    }

    platform.addEventListener('click', platformToggle);
    support.addEventListener('click', supportToggle);
    features.addEventListener('click', featuresToggle);
    compare.addEventListener('click', compareToggle);
    resources.addEventListener('click', resourcesToggle);
    podia.addEventListener('click', podiaToggle);
    social.addEventListener('click', socialToggle);

    document.addEventListener('scroll', function () {
        var navbar = document.getElementById('navbar');
        var scrollY = window.scrollY;

        if (scrollY > 50) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
      });
}

document.addEventListener('DOMContentLoaded', initApp);