
const navigation = document.getElementById("navigation")

const storeContent = document.getElementById("store-content")
const macContent = document.getElementById("mac-content")
const ipadContent = document.getElementById("ipad-content")
const iphoneContent = document.getElementById("iphone-content")
const watchContent = document.getElementById("watch-content")
const airContent = document.getElementById("air-content")
const TVContent = document.getElementById("TV-content")
const entertainmentContent = document.getElementById("entertainment-content")
const accessoriesContent = document.getElementById("accessories-content")
const supportContent = document.getElementById("support-content")
const SearchContent = document.getElementById("search-content")
const bagContent = document.getElementById("bag-content")

const backNav = document.getElementById("backNav")

function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

let NavOpen = new Array(10).fill(false)
let search = false
let bag = false

store.addEventListener('mouseenter', (ev) => {
    backNav.style.backdropFilter = "blur(10px)"
    navigation.style.backgroundColor  = "#141414"
    search = false
    bag = false
    for (let i = 0; i < NavOpen.length; i++)
    {
        NavOpen[i] = false
    }
    NavOpen[0] = true
})

mac.addEventListener('mouseenter', (ev) => {
    backNav.style.backdropFilter = "blur(10px)"
    navigation.style.backgroundColor  = "#141414"
    search = false
    bag = false
    for (let i = 0; i < NavOpen.length; i++)
    {
        NavOpen[i] = false
    }
    NavOpen[1] = true
})

ipad.addEventListener('mouseenter', (ev) => {
    backNav.style.backdropFilter = "blur(10px)"
    navigation.style.backgroundColor  = "#141414"
    search = false
    bag = false
    for (let i = 0; i < NavOpen.length; i++)
    {
        NavOpen[i] = false
    }
    NavOpen[2] = true
})

iphone.addEventListener('mouseenter', (ev) => {
    backNav.style.backdropFilter = "blur(10px)"
    navigation.style.backgroundColor  = "#141414"
    search = false
    bag = false
    for (let i = 0; i < NavOpen.length; i++)
    {
        NavOpen[i] = false
    }
    NavOpen[3] = true
})

watch.addEventListener('mouseenter', (ev) => {
    backNav.style.backdropFilter = "blur(10px)"
    navigation.style.backgroundColor  = "#141414"
    search = false
    bag = false
    for (let i = 0; i < NavOpen.length; i++)
    {
        NavOpen[i] = false
    }
    NavOpen[4] = true
})

airpods.addEventListener('mouseenter', (ev) => {
    backNav.style.backdropFilter = "blur(10px)"
    navigation.style.backgroundColor  = "#141414"
    search = false
    bag = false
    for (let i = 0; i < NavOpen.length; i++)
    {
        NavOpen[i] = false
    }
    NavOpen[5] = true
})

tvhome.addEventListener('mouseenter', (ev) => {
    backNav.style.backdropFilter = "blur(10px)"
    navigation.style.backgroundColor  = "#141414"
    search = false
    bag = false
    for (let i = 0; i < NavOpen.length; i++)
    {
        NavOpen[i] = false
    }
    NavOpen[6] = true
})

entertainment.addEventListener('mouseenter', (ev) => {
    backNav.style.backdropFilter = "blur(10px)"
    navigation.style.backgroundColor  = "#141414"
    search = false
    bag = false
    for (let i = 0; i < NavOpen.length; i++)
    {
        NavOpen[i] = false
    }
    NavOpen[7] = true
})

accessories.addEventListener('mouseenter', (ev) => {
    backNav.style.backdropFilter = "blur(10px)"
    navigation.style.backgroundColor  = "#141414"
    search = false
    bag = false
    for (let i = 0; i < NavOpen.length; i++)
    {
        NavOpen[i] = false
    }
    NavOpen[8] = true
})


supportDiv.addEventListener('mouseenter', (ev) => {
    backNav.style.backdropFilter = "blur(10px)"
    navigation.style.backgroundColor  = "#141414"
    search = false
    bag = false
    for (let i = 0; i < NavOpen.length; i++)
    {
        NavOpen[i] = false
    }
    NavOpen[9] = true
})

searchLogo.addEventListener('mouseenter', (ev) => {
    for (let i = 0; i < NavOpen.length; i++)
    {
        NavOpen[i] = false
    }
    bag = false
    if (!search){
        navigation.style.paddingBottom = 10 + 'px'
        navigation.style.backgroundColor  = "hsla(0, 0%, 0%, 0.664)"
        backNav.style.backdropFilter = "blur(0px)"
    }
})

bagLogo.addEventListener('mouseenter', (ev) => {
    for (let i = 0; i < NavOpen.length; i++)
    {
        NavOpen[i] = false
    }
    search = false
    if (!bag){
        navigation.style.paddingBottom = 10 + 'px'
        navigation.style.backgroundColor  = "hsla(0, 0%, 0%, 0.664)"
        backNav.style.backdropFilter = "blur(0px)"
    }
})

function searchClick(){
    search = !search

    if (search){
        navigation.style.paddingBottom = 370 + 'px'
        backNav.style.backdropFilter = "blur(10px)"
        navigation.style.backgroundColor  = "#141414"

        SearchContent.style.opacity = 1
        SearchContent.style.pointerEvents = "auto"
    }
    else{
        navigation.style.paddingBottom = 10 + 'px'
        navigation.style.backgroundColor  = "hsla(0, 0%, 0%, 0.664)"
        backNav.style.backdropFilter = "blur(0px)"

        SearchContent.style.opacity = 0
        SearchContent.style.pointerEvents = "none"
    }
}

function bagClick(){
    bag = !bag

    if (bag){
        navigation.style.paddingBottom = 370 + 'px'
        backNav.style.backdropFilter = "blur(10px)"
        navigation.style.backgroundColor  = "#141414"

        bagContent.style.opacity = 1
        bagContent.style.pointerEvents = "auto"
    }
    else{
        navigation.style.paddingBottom = 10 + 'px'
        navigation.style.backgroundColor  = "hsla(0, 0%, 0%, 0.664)"
        backNav.style.backdropFilter = "blur(0px)"

        bagContent.style.opacity = 0
        bagContent.style.pointerEvents = "none"
    }
}



document.addEventListener('mousemove', (ev) => {
    if (ev.y > navigation.clientHeight)
    {
        navigation.style.backgroundColor  = "hsla(0, 0%, 0%, 0.664)"
        backNav.style.backdropFilter = "blur(0px)"
        navigation.style.paddingBottom = 10 + 'px'
        search = false
        bag = false
        for (let i = 0; i < NavOpen.length; i++)
        {
            NavOpen[i] = false
        }
    }

})

setInterval (function() {
    
    if (NavOpen[0]){
        navigation.style.paddingBottom = 360 + 'px'
        storeContent.style.pointerEvents = "auto"
        storeContent.style.opacity = 1
    } else{
        storeContent.style.opacity = 0
        storeContent.style.pointerEvents = "none"
    }

    if (NavOpen[1]){
        navigation.style.paddingBottom = 520 + 'px'
        macContent.style.pointerEvents = "auto"
        macContent.style.opacity = 1
    } else{
        macContent.style.opacity = 0
        macContent.style.pointerEvents = "none"
    }

    if (NavOpen[2]){
        navigation.style.paddingBottom = 480 + 'px'
        ipadContent.style.pointerEvents = "auto"
        ipadContent.style.opacity = 1
    } else{
        ipadContent.style.opacity = 0
        ipadContent.style.pointerEvents = "none"
    }

    if (NavOpen[3]){
        navigation.style.paddingBottom = 450 + 'px'
        iphoneContent.style.pointerEvents = "auto"
        iphoneContent.style.opacity = 1
    } else{
        iphoneContent.style.opacity = 0
        iphoneContent.style.pointerEvents = "none"
    }

    if (NavOpen[4]){
        navigation.style.paddingBottom = 450 + 'px'
        watchContent.style.pointerEvents = "auto"
        watchContent.style.opacity = 1
    } else{
        watchContent.style.opacity = 0
        watchContent.style.pointerEvents = "none"
    }

    if (NavOpen[5]){
        navigation.style.paddingBottom = 360 + 'px'
        airContent.style.pointerEvents = "auto"
        airContent.style.opacity = 1
    } else{
        airContent.style.opacity = 0
        airContent.style.pointerEvents = "none"
    }

    if (NavOpen[6]){
        navigation.style.paddingBottom = 360 + 'px'
        TVContent.style.pointerEvents = "auto"
        TVContent.style.opacity = 1
    } else{
        TVContent.style.opacity = 0
        TVContent.style.pointerEvents = "none"
    }

    if (NavOpen[7]){
        navigation.style.paddingBottom = 430 + 'px'
        entertainmentContent.style.pointerEvents = "auto"
        entertainmentContent.style.opacity = 1
    } else{
        entertainmentContent.style.opacity = 0
        entertainmentContent.style.pointerEvents = "none"
    }

    if (NavOpen[8]){
        navigation.style.paddingBottom = 430 + 'px'
        accessoriesContent.style.pointerEvents = "auto"
        accessoriesContent.style.opacity = 1
    } else{
        accessoriesContent.style.opacity = 0
        accessoriesContent.style.pointerEvents = "none"
    }

    if (NavOpen[9]){
        navigation.style.paddingBottom = 430 + 'px'
        supportContent.style.pointerEvents = "auto"
        supportContent.style.opacity = 1
    } else{
        supportContent.style.opacity = 0
        supportContent.style.pointerEvents = "none"
    }

    if (!search)
    {
        SearchContent.style.opacity = 0
        SearchContent.style.pointerEvents = "none"
    }

    if (!bag)
    {
        bagContent.style.opacity = 0
        bagContent.style.pointerEvents = "none"
    }

    
}, 1)


// slider

let list = document.querySelector('#slider #list');
let items = document.querySelectorAll('#slider #list #item');
let dots = document.querySelectorAll('#slider #dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if(active + 1 > lengthItems) {
        active = 0;
    }
    else {
        active = active + 1;
    }
    reloadslider();
}

prev.onclick = function() {
    if(active - 1 < 0) { 
        active = lengthItems;
    }
    else {
        active = active - 1;
    }
    reloadslider();
}

let refreshslider = setInterval(()=> {next.click()}, 5000);

function reloadslider() {
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    dots.forEach((dot, index) => {
        if (index === active) {
            dot.style.width = '20px';
        }
        else {
            dot.style.width = '10px';
        }
    })

    clearInterval(refreshslider);
    refreshslider = setInterval(()=> {next.click()}, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadslider(); 
    })
})